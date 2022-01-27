const path=require('path');
const Jimp = require('jimp');
const userService = require('../services/user-service');
const UserDto=require('../dtos/user-dto');

class ActivateController{
    async activate(req,res){
        const { name, avatar } = req.body;
        //console.log(name);
        //console.log(avatar);
        if (!name || !avatar) {
            res.status(400).json({ message: 'All fields are required!' });
        }

        
        const buffer = Buffer.from(
            avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
            'base64'
        );
        const imagePath = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}.png`;
        //console.log(buffer);
        //console.log(imagePath);
        //console.log(Jimp);
        //console.log(__dirname)  
        //error from here

        try {
            const jimResp = await Jimp.read(buffer);
            //console.log(jimResp);
            //const dir=path.resolve(__dirname);
            //console.log(dir);
            //console.log(__dirname);
            
            jimResp
                .resize(150, Jimp.AUTO)
                .write(path.resolve( __dirname,`../storage/${imagePath}`));
                //console.log(__dirname)
        } catch (err) {
            res.status(500).json({ message: 'Could not process the image' });
        }

        const userId=req.user._id;
        try{
            const user= await userService.findUser({_id:userId})

        if(!user){
            res.status(404).json({message:'user not found'})
        }

        user.activated=true;
        user.name=name;
        user.avatar=`/storage/${imagePath}`
        user.save();
        res.json({user:new UserDto(user),auth:true});

        }catch(err){
            res.status(400).json({message:'something went wrong'})
        }

        

        
    }
}

module.exports=new ActivateController();