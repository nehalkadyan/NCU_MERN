const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

// controller function for signup

const signup = async(req, res) => {
    try{
      const {username, email, password} = req.body;

      // check if user already exists

      const existingUserWithUsername = await User.findOne({username})

      const existingUserWithEmail = await User.findOne({email})


      if(existingUserWithUsername){
        return res.json(400).json({message : "Account already created with this username!"})
      }

      if(existingUserWithEmail){
        return res.json(400).json({message : "Account already created with this Email!"})
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

const signin = async(req, res) => {
  try{
    const {email, password} = req.body;

    // check whether user exists

    const existingUser = await User.findOne({email});

    if(!existingUser){
      return res.status(404).json({message : "User not found with this email"})
    }

    // compare

    const isValidPassword = await bcrypt.compareSync(password, existingUser.password);

    if(!isValidPassword){
      return res.status(400).json({message : "Password is Invalid"})
    }

    const tokenData = {
      _id : existingUser._id,
      username : existingUser.username,
      email : existingUser.email
    }

    // creating token

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY);

    // store the cookie in the browser
    res.cookie("access_token", token, {
      httpOnly : true
    })

    // extract the data from user

    const {password: pass, ...rest} = existingUser._doc;
    
    // {
    //   username: 
    //   email:
    //   id:
    //   createdAT:
    // }

    return res.status(200).json({message : "User has successfully logged in!", user : rest, token})
  }catch(err){
     console.log("Error signing in", err);
     return res.status(500).json({message : "Internal Server Error", err})
  }
}

module.exports = {signup, signin}