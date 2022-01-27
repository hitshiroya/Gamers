const crypto=require('crypto')
class HashService{
    hashOtp(data){
        
        return crypto.Hmac('sha256','process.env.HASH_SECRET').update(data).digest('hex');
    }
}

module.exports=new HashService();