const express = require('express')
const {User, bcrypt} = require('../models/User')


const router = express.Router()

router.post('/register', async (req, res) => {
     
    try {
        
        const {email} = req.body

        if ( await User.findOne({ email })) {
            return res.status(400).send({ error: "User already exists" })
        }

        const user = await User.create(req.body)
        user.password = undefined;
        res.send({user})
        
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' })
    }
})

router.post('/signin', async (req, res) => {  
  
    const {email, password} = req.body
     //authenticathor 
    const user = await User.findOne({email}).select('+password')  //solicitar o send password
   
    if(!user){
        return res.status(400).send({error: 'User not found'})
    }
  
    if(await bcrypt.compare(password, user.password) && user.email === email.toLowerCase()){
        console.log(res)
        return res.status(200).send({sucess: 'Valid Signin'})
    }else{
        return res.status(400).send({error: 'Invalid password'})
    }
   
})


module.exports = router

//defini o path /auth como default de todas router