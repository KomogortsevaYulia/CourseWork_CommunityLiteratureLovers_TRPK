const { databaseVersion } = require('../dbConnection');
const User = require('../models/User');
const {hashPassword,matchPassword} = require('../utils/password')
const {sign,decode} = require('../utils/jwt')


module.exports.createUser = async (req,res) => {
    try{
        if(!req.body.user.username) throw new Error("Требуется логин")
        if(!req.body.user.fio) throw new Error("Требуется ФИО ")
        if(!req.body.user.email) throw new Error("Требуется электронная почта")
        if(!req.body.user.password) throw new Error("Требуется ввести пароль")
        
        const existingUser = await User.findByPk(req.body.user.email)
        if(existingUser)
            throw new Error('Пользователь уже существует с этим идентификатором электронной почты')

        const password = await hashPassword(req.body.user.password);
        const user = await User.create({
            username: req.body.user.username,
            fio: req.body.user.fio,
            password: password,
            email: req.body.user.email
        })
        
        if(user){
            if(user.dataValues.password)
                delete user.dataValues.password
            user.dataValues.token = await sign(user)
            res.status(201).json({user})
        }    
    }catch (e){
        res.status(422).json({errors: { body: [ 'Could not create user ', e.message ] }})
    }   
}

module.exports.loginUser = async (req,res) => {
    try{
        if(!req.body.user.email) throw new Error("Требуется электронная почта")
        if(!req.body.user.password) throw new Error("Требуется ввести пароль")

        const user = await User.findByPk(req.body.user.email)

        if(!user){
            res.status(401)
            throw new Error('Нет пользователя с этим идентификатором электронной почты')
        }
        
        //Check if password matches
        const passwordMatch = await matchPassword(user.password,req.body.user.password)

        if(!passwordMatch){
            res.status(401)
            throw new Error('Неверный пароль или идентификатор электронной почты')
        }
            
        delete user.dataValues.password
        user.dataValues.token = await sign({email: user.dataValues.email,username:user.dataValues.username})

        res.status(200).json({user})
    }catch(e){
        const status = res.statusCode ? res.statusCode : 500
        res.status(status).json({errors: { body: [ 'Could not create user ', e.message ] }})
    }
}

module.exports.getUserByEmail = async (req,res) => {
    try{
        const user = await User.findByPk(req.user.email)
        if(!user){
            throw new Error('Такой пользователь не найден')
        }
        delete user.dataValues.password
        user.dataValues.token = req.header('Authorization').split(' ')[1]
        return res.status(200).json({user})
    }catch(e){
        return res.status(404).json({
            errors: { body: [ e.message ] }
        })
    }
}

module.exports.updateUserDetails = async (req,res) => {
    try{
        const user = await User.findByPk(req.user.email)

        if(!user){
            res.status(401)
            throw new Error('Нет пользователя с этим идентификатором электронной почты')
        }
            
        
        if(req.body.user){
            const username = req.body.user.username ? req.body.user.username : user.username
            const fio = req.body.user.fio ? req.body.user.fio : user.fio
            let password = user.password
            if(req.body.user.password)
                password = await hashPassword(req.body.user.password)

            const updatedUser = await user.update({username,fio,password})
            delete updatedUser.dataValues.password
            updatedUser.dataValues.token = req.header('Authorization').split(' ')[1]
            res.json(updatedUser)
        }else{
            delete user.dataValues.password
            user.dataValues.token = req.header('Authorization').split(' ')[1]
            res.json(user)
        }
        
    }catch(e){
        const status = res.statusCode ? res.statusCode : 500
        return res.status(status).json({
            errors: { body: [ e.message ] }
        })
    }
    
}