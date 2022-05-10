const dotenv = require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const {notFound,errorHandler} = require('./middleware/errorHandler')
const sequelize = require('./dbConnection')

const User = require('./models/User')

const userRoute = require('./routes/users')

const app = express()

//CORS
app.use(cors({credentials: true, origin: true})) 



//RELATIONS:
//1 to many relation between user and article

//One to many relation between User and Comments

//Many to many relation between User and User
User.belongsToMany(User,{
    through:'Followers',
    as:'followers',
    timestamps:false,
})


const sync = async () => await sequelize.sync({alter:true})
sync()

app.use(express.json())
app.use(morgan('tiny'))

app.get('/',(req,res) => {
    res.json({status:"API is running"});
})
app.use('/api',userRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8081

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:8081`);
})