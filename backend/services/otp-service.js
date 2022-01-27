const crypto=require('crypto');
//const twilio = require('twilio');
//const { PhoneNumberContext } = require('twilio/lib/rest/lookups/v1/phoneNumber');
const smsSid=process.env.SMS_SID;
const smsAuthToken=process.env.SMS_AUTH_TOKEN;
const smsNumber=process.env.SMS_FROM;
const hashService=require('../services/hash-service')
const twilio=require('twilio')(smsSid,smsAuthToken,{
    lazyLoading:true,
});
class otpService{
    async generateOtp(){
        const otp=crypto.randomInt(1000,9999);
        return otp;
    }
    async sendBySms(phone,otp){
        return await twilio.messages.create({
            to:phone,
            from:smsNumber,
            body:`your real time voice application's otp is ${otp}`,
        })


    }
    verifyOtp(hashedOtp,data){
        let computedHash=hashService.hashOtp(data);
        return computedHash===hashedOtp

    }

}

module.exports=new otpService();