import { PrismaClient, Users } from "@prisma/client";
import { RegisterDto } from "../Dto/register.dto";
import Container, { Service } from "typedi";
import { HttpException } from "../../../utils/HttpException";
import { LoginDto } from "../Dto/login.dto";
import * as argon from "argon2"
import { randomBytes } from 'crypto';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Email } from "../Dto/email.dto";
import { sendOTP } from "../../Email/templates/otp.template";
import EmailService from "../../Email/service/index";
import { otpDTO } from "../Dto/otp.dto";

@Service()
export default class authService {
  public prisma = new PrismaClient

  public async createUser(userdata: RegisterDto, ref: string) {

    try {


      const chechReferalCode = async () => {
        const checkRef = await this.prisma.users.findUnique({
          where: {
            referal_code: ref,
          }
        })

        return checkRef
      }


      if (ref != "undefined") {
        const checkRef = chechReferalCode()
        if (!checkRef) {
          return {
            status_code: 404,
            status: false,
            message: "No user with such referal_code"
          }
        }

        await this.prisma.users.update({
          where: {
            referal_code: ref
          }, data: {
            referal_award: (await checkRef).referal_award + 250,
            referals: [...(await checkRef).referals, ref]
          }

        })

      }

      const checkEmail = await this.prisma.users.findUnique({
        where: {
          email: userdata.email,

        }
      })

      if (checkEmail) {
        return {
          status_code: 400,
          status: false,
          message: "Email already exists kindly login"
        }
      }


      const checkPhone = await this.prisma.users.findUnique({
        where: {
          phone: userdata.phone
        }
      })

      if (checkPhone) {
        return {
          status_code: 400,
          status: false,
          message: "Phone number already exists kindly login"
        }
      }

      function referal_code(size: number) {
        return randomBytes(Math.ceil(size / 2))
          .toString('hex') // convert to hexadecimal format
          .slice(0, size).toUpperCase();   // return required number of characters
      }


      const hashed_password = await argon.hash(userdata.password)
      const user = await this.prisma.users.create({
        data: {
          full_name: userdata.full_name,
          email: userdata.email,
          phone: userdata.phone,
          password: hashed_password,
          country: userdata.country,
          referal_code: referal_code(4) + "-" + referal_code(4),
          referal_award: ref !== "undefined" ? chechReferalCode() ? 100 : 0 : 0
        },
      });

      
      return {
        status_code: 200,
        status: true,
        message: "user created",

      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new HttpException(400, `Email alredy exist`)
        }
      } else {
        throw new HttpException(500, `${error}`)

      }
    } finally {
      await this.prisma.$disconnect();
    }
  }




  public async loginUser(logindata: LoginDto) {
    try {
      let user: Users
      const checkIfEmail = logindata.emailORphone.includes("@")

      if (checkIfEmail) {
        user = await this.prisma.users.findUnique({
          where: {
            email: logindata.emailORphone
          }
          , include: {
            investments: true,
            transaction_histories: true
          }
        })
      } else {
        user = await this.prisma.users.findUnique({
          where: {
            phone: logindata.emailORphone,
          },
          include: {
            investments: true, transaction_histories: true
          }
        });
      }

      if (!user) {
        return {
          status_code: 400,
          status: false,
          message: "Invalid email address or phone"
        }
      }


      const isValid = await argon.verify(user.password, logindata.password);
      if (!isValid) {
        return {
          status_code: 400,
          status: false,
          message: "incorrect password"
        }
      }
      delete user?.password;
      return {
        status_code: 200,
        message: 'login success',
        data: user

      }
    } catch (error) {
      throw new HttpException(500, `${error.message}`)
    } finally {
      await this.prisma.$disconnect();
    }
  }


  public async adminLogin(admindata: LoginDto) {
    try {
      const user = await this.prisma.administrators.findUnique({
        where: {
          email: admindata.emailORphone,
        }
      });

      if (!user) {
        return {
          status_code: 400,
          status: false,
          message: "Invalid email address or password"
        }
      }

      // checking if password is correct ####################
      const isValid = await argon.verify(user.password, admindata.password);
      if (!isValid) {
        return {
          status_code: 400,
          status: false,
          message: "incorrect password"
        }
      }

      delete user?.password;
      return {
        status_code: 200,
        status: true,
        message: "Login success",
        ...user,
      }
    } catch (error) {
      throw new HttpException(500, `${error.message}`)
    } finally {
      await this.prisma.$disconnect();
    }
  }


  public async sendOTP(email: Email) {

    const emailService = Container.get(EmailService)
    try {

      let user: Users
      // checking if loggin method is email or phone number #############
      const checkIfEmailExist = await this.prisma.users.findUnique({
        where: {
          email: email.email
        },
        include: {
          otp: true
        }
      })


      if (!checkIfEmailExist) {
        return {
          status_code: 400,
          status: false,
          message: "Invalid email address"
        }
      }
      function generateOTP() {
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 5; i++) {
          OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
      }


      const getToday = new Date()
      getToday.setMinutes(getToday.getMinutes() + 10)

      const OTP = generateOTP()

      if (checkIfEmailExist.otp !== null) {
        await this.prisma.users.update({
          where: {
            email: email.email
          },
          data: {
            otp: {
              update: {
                code: OTP, expiration: getToday.toISOString()
              }
            }
          }
        })

        const resetEmail = sendOTP(OTP, checkIfEmailExist.full_name)
        await emailService.SendEmail({ email: checkIfEmailExist.email, title: "OTP", html: resetEmail, noreply: true })
      } else {
        await this.prisma.users.update({
          where: {
            email: checkIfEmailExist.email
          },
          data: {
            otp: {
              create: {
                code: OTP, expiration: getToday.toISOString(), id: checkIfEmailExist.id
              }
            }
          }
        })
        const resetEmail = sendOTP(OTP, checkIfEmailExist.full_name)
        await emailService.SendEmail({ email: checkIfEmailExist.email, title: "OTP", html: resetEmail, noreply: true })
      }

      return {
        status_code: 200,
        status: true,
        message: "OTP sent successfully",
      }
    } catch (error) {
      throw new HttpException(500, `${error.message}`)
    } finally {
      await this.prisma.$disconnect();
    }
  }


  public async verifyOTP(email: string, otp: otpDTO) {

    const emailService = Container.get(EmailService)
    try {
      const getToday = new Date()

      const user = await this.prisma.users.findUnique({
        where: {
          email: email
        },
        include: {
          otp: true
        }
      })

      if (!user) {
        return {
          status_code: 400,
          status: false,
          message: "something is'nt correct try again"
        }
      }



      if (`${user.otp.expiration.toISOString()}` >= `${getToday.toISOString()}`) {

        if (otp.otp == user.otp.code) {

          await this.prisma.users.update({
            where: {
              email: user.email,
            }, data: {
              verified: true
            }
          })

          return {
            status_code: 200,

            status: true,
            message: "OTP verified"
          }
        } else {
          return {
            status_code: 400,
            status: false,
            message: "OTP Incorrect"
          }
        }
      } else {
        return {
          status_code: 400,
          status: false,
          message: "OTP Expired"
        }
      }
    } catch (error) {
      throw new HttpException(500, `${error.message}`)
    } finally {
      await this.prisma.$disconnect();
    }
  }



}
