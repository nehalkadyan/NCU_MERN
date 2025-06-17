const User = require("../models/User.model");
const bcrypt = require("bcryptjs")

// controller function for signup

const signup = async(req, res) => {
    try{
      const {username, email, password} = req.body;

      // check if user already exists

      const existingUserWithUsername = await User.findOne({username})

      const existingUserWithEmail = await User.findOne({email})


      if(existingUserWithUsername){
        return response.json(400).json({message : "Account already created with this username!"})
      }

      if(existingUserWithEmail){
        return response.json(400).json({message : "Account already created with this Email!"})
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10)

      // create new user

      const user = new User({
         username,
         email,
         password : hashedPassword
      })

      // save the user in db

      await user.save()

      return res.status(201).json({message : "User created successfully", user})


    }catch(err){
        console.log("Error", err);
        return res.status(500).json({message : "Internal Server Error", error : err});
    }
}

module.exports = {signup}