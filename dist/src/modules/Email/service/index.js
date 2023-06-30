"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const nodemailer = tslib_1.__importStar(require("nodemailer"));
let EmailService = class EmailService {
    async SendEmail(EmailProps) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            disableFileAccess: true,
            auth: {
                user: 'Bitsotrades@gmail.com',
                pass: "ivvifsimoxfhcyqi", // generated ethereal password
            },
        });
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error.message);
            }
            else {
                console.log('Email connected');
            }
        });
        const { email, title, html, text, noreply } = EmailProps;
        // send mail with defined transport object
        await transporter.sendMail({
            from: "Bisotrades@gmail.com",
            to: email,
            subject: title,
            html: html,
            text: text, // plain text body
        });
    }
};
EmailService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], EmailService);
exports.default = EmailService;
//# sourceMappingURL=index.js.map