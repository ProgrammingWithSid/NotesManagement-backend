require('dotenv').config();
require('./config/mongoose');
const User = require('mongoose').model('userModel')

let createExpressApp = require('./config/express'); // Updated require statement
let app = createExpressApp(); // Call the function to get the Express app


const port = process.env.PORT || 3000; 

app.listen(port,async ()=> {

    const users = await User.find();
    if(users.length==0) {
        const newUser = await new User({
            first_name : 'admin',
            last_name : 'admin',
            email : 'admin@admin.com',
            password : '12345678'
        })
        let user = await newUser.save();
        console.log(user);
    }
    console.log(`Magic Happens At Port ${port}`)

})