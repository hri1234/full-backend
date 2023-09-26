// const nodeMailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        auth: {
            user: 'hritikpandey2019@@gmail.com',
            pass: 7999510022,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        html: options.message,
    };

    await transporter.sendMail(mailOptions);

    const msg = {
        to: options.email,
        from: 'd-sf5sf7s1g5ff8fd87df48df51eg',
        templateId: options.templateId,
        dynamic_template_data: options.data,
    }
    sgMail.send(msg).then(() => {
        console.log('Email Sent')
    }).catch((error) => {
        console.error(error)
    });
};

module.exports = sendEmail;
