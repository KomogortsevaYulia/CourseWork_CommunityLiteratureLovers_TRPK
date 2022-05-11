const dotenv = require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const {notFound,errorHandler} = require('./middleware/errorHandler')
const sequelize = require('./dbConnection')

const User = require('./models/User')
const Role = require('./models/Role')
const userRoute = require('./routes/users')
const profileRoute = require('./routes/profile')
const app = express()

//CORS
app.use(cors({credentials: true, origin: true})) 

Role.hasMany(User, {
    foreignKey: "idRole",
  })
User.belongsTo(Role, {
    foreignKey: "idRole",
  })


const sync = async () => await sequelize.sync({alter:true})
sync()

app.use(express.json())
app.use(morgan('tiny'))

app.get('/',(req,res) => {
    res.json({status:"API is running"});
})
app.use('/api',userRoute)
app.use('/api/profiles',profileRoute)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8081

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:8081`);
})
