import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';

import { Injectable } from '@nestjs/common';

interface EmailOption {
    to: string,
    subject: string,
    html: string
}

@Injectable()
export class EmailService {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'didth0812@gmail.com', //TODO: config
                pass: 'tqmtbsrbgvoppwfa', //TODO: config
            }
        })
    }

    async sendMemberJoinVerification(emailAddress: string, signupVerifyToken: string) {
        const baseUrl = 'http://localhost:3000'; //TODO: config
        
        const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;
        
        const mailOptions: EmailOption = {
            to: emailAddress,
            subject: '가입인증메일!',
            html: `
                가입확인 버튼를 누르시면 가입 인증이 완료됩니다.<br/>
                <form action="${url}" method="POST">
                <button>가입확인</button>
                </form>
            `
        }

        return await this.transporter.sendMail(mailOptions);
    }

    async verifyEmail(signupVerifyToken: string): Promise<string> {
        // TODO
        // 1. DB에서 signupVerifyToken으로 회원 가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
        // 2. 바로 로그인 상태가 되도록 JWT를 발급

        throw new Error('Method not implemented.');
    }

    async login(email:string, password: string): Promise<string> {
        // TODO
        // 1. email, password를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
        // 2. JWT를 발급

        throw new Error('Method not implemented.');
    }

    async getUserInfo(userId: string): Promise<string> {
        // TODO
        // 1. userId를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
        // 2. 조회된 데이터를 UserInfo 타입으로 응답

        throw new Error('Method not implemented.');
    }


}
