const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../Models/User');

exports.SignUp=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(found){
            return res.status(400).send({errors : [{msg : "Email used"}]})
        }

        const newAccount = new User(req.body)
        
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        newAccount.password = hashedPassword

        newAccount.save()

        const payload = {id : newAccount._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '1h' })

        res.status(200).send({msg : "ACCOUNT CREATED",newAccount,token})

    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not create account"}]})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const {name,email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{msg : "Something wrong"}]})
        }

        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
            return res.status(400).send({errors : [{msg : "Something wrong"}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '1h' })
    
        res.status(200).send({msg : "Logged In", found,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not Loggin"}]})
    }
}