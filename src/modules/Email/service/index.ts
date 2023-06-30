import { Service } from "typedi";
import { EmailData } from "../dto/email.interface";
import * as nodemailer from 'nodemailer';


@Service()
export default class EmailService {


    async SendEmail(EmailProps: EmailData) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            disableFileAccess: true,
            auth: {
                user: 'Bitsotrades@gmail.com', // generated ethereal user
                pass: "ivvifsimoxfhcyqi", // generated ethereal password
            },
        });

        transporter.verify(function (error: any, success: any) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('Email connected');
            }

        });

        const { email, title, html, text, noreply }: EmailData = EmailProps;
        // send mail with defined transport object
        await transporter.sendMail({
            from: "Bisotrades@gmail.com", // sender address
            to: email, // list of receivers
            subject: title, // Subject line
            html: html, // html body
            text: text, // plain text body
        });
    }
}