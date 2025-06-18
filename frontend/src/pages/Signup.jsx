import React, {useState} from "react";
import axios from "axios"
import "./signup.css";

const Signup = () => {

    // states for username, email, password

    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    //  OR

    const [formData, setFormData] = useState({
        username : "",
        email : "",
        password : ""
    })

    console.log("formData", formData)

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    // function to handle user signup

    const handleSignup = async(e) => {

        e.preventDefault()

        try{
          const response = await axios.post("http://localhost:5000/auth/signup", formData)

          console.log(response.data)
        }catch(error){
           console.log("Error signing up", error)
        }
    }

  return (
    <div className="signup_section">
      <form onSubmit={handleSignup} className="form">
        <h1>Signup Page</h1>

        <input name = "username" type="text" placeholder="Enter username" onChange={handleFormDataChange} />

        <input name = "email" type="email" placeholder="Enter email" onChange={handleFormDataChange}/>

        <input name = "password" type="password" placeholder="Enter Password" onChange={handleFormDataChange}/>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
