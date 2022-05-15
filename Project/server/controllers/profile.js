const User = require('../models/User')
const Role = require('../models/Role')


module.exports.getProfile = async (req,res) => {
    try{
        const name = req.params.username
        const user = await User.findOne({
            where:{
                username : name
            },
            include: [
                {
                  model: Role,
                  attributes: [
                    "name"
                  ],
                },
            ]
        })
        
        if(!user){
            res.status(404)
            throw new Error('User with this username not found')
        }

        const profile = {
            username: name,
            fio: user.dataValues.fio,
            email:user.dataValues.email,
            nameRole:user.Role.dataValues.name,
        }
        res.status(200).json({profile})
        
    }catch(e){
        const code = res.statusCode ? res.statusCode : 422
        return res.status(code).json({
            errors: { body: [e.message ] }
        })
    }
}