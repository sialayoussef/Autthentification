const express = require('express')

const { SignUp, SignIn } = require('../Controllers/User');
const { ValidationRegister, Validation, ValidationLogin } = require('../Middlewares/ValidReg');
const { isAuth } = require('../Middlewares/isAuth');

const userRouter = express.Router()


userRouter.post('/SignUp',ValidationRegister,Validation,SignUp)

userRouter.post('/SignIn',ValidationLogin,Validation,SignIn)

userRouter.get('/currentUser',isAuth,(req,res)=> res.send(req.user))

module.exports = userRouter