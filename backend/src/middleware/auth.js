const User = require('../models/user')
const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config({ path: './.env'});

const auth = async (req,res,next) => {
    try {
    const token = await req.header('Authorization').replace('Bearer ','')
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
    if(!user){
        
        throw new Error()
    }

    req.token = token
    req.user = user

    next()


    } catch (e){

        res.status(401).send({error: 'Not authenticated'})

    }

}

module.exports = auth