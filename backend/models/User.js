const {Schema, model } = require('mongoose')
/*const { default: Login } = require('../fend/src/components/Login')*/
const User = new Schema(
    {
        Login:  { type: String, 
            uniqued: true, 
            require: true
        },
        password: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    }
)

module.exports=model("User", User)