const BaseService = require("./base.service");
const bcrypt = require("bcryptjs");
const sgMail = require('@sendgrid/mail');
require('dotenv').config();
class UserService extends BaseService{
    constructor({UserBusiness}){
        super(UserBusiness);
        this.userBusiness = UserBusiness;
    }
    async comparePassword(received,saved){
        return await bcrypt.compareSync(received,saved);
    }
    async sendEmail(user){
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: user.email, // Change to your recipient
            from: 'matiaseacosta18@gmail.com', // Change to your verified sender
            subject: 'Register successfull',
            text: 'You have been registered sucessfuli',
            html: '<strong>Welcome!</strong>',
        }
        let sent = await sgMail.send(msg);
        return sent
    }
    async getUserByUsername(username){
        return await this.userBusiness.getUserByUsername(username);
    }
    async setRoles(user,roles) { 
        return await this.userBusiness.setRoles(user,roles)
    } 
    async checkDuplicateUsernameOrEmail(username,email){
        return await this.userBusiness.checkDuplicateUsernameOrEmail(username,email)
    }
    async isAdmin(id){
        try {
            return await this.userBusiness.isAdmin(id)
        } catch (error) {   
            console.log(error)
        }
    }
}

module.exports = UserService