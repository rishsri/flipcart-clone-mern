
import { response } from "express";
import User from "../model/userSchema.js"

export  const userSignup = async (request, respond) => {

    try{
        const exist  = User.findOne({
            username: request.body.username
        })
        if(exist) {
            return response.status(401).response('Username already exist')
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save()
        response.status(200).response('User is succesfully registered')
    }catch(error){
        console.log(`Error`, error.message)
    }
} 