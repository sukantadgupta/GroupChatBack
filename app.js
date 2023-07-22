const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = require('./utils/database')
const User = require('./models/user')
const Msg = require('./models/message')
const Group = require('./models/group')
const userGroupData = require('./models/usergroup')


const userRoutes = require('./routes/user')
const msgRoutes = require('./routes/message')
const groupRoutes = require('./routes/group')

const app = express()
//app.use(cors())
app.use(cors({
    origin: '*',
    credentials: true
}))

app.use(bodyParser.json())

app.use("/user",userRoutes)
app.use("/msg",msgRoutes)
app.use('/group',groupRoutes)


User.hasMany(Msg)
Msg.belongsTo(User)

Group.hasMany(Msg)
Msg.belongsTo(Group)

// User.belongsToMany(Group,{through:'usergroup'})
// Group.belongsToMany(User,{through:'usergroup'})
User.belongsToMany(Group,{through:userGroupData})
Group.belongsToMany(User,{through:userGroupData})

sequelize.sync()
.then((res)=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log('app started running')
    })
})