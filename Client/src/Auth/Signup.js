import React, { useState, useContext, useEffect } from "react";
import { useGlobalContext } from "../useContext/GlobalContext";
import { baseURL, baseURL1 } from "../helper/baseURL";
import axios from "axios";
import ImageUpload from "../headers/ImageUpload";
import "./Auth.css";
export default function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [imagePreview, setImagePreview]=useState(null)
  const { Login} = useContext(useGlobalContext);




  const handleOnSubmit = async (ev) => {
    ev.preventDefault();
    
    try {
      if (isLogin) {
        const response = await axios.post(`${baseURL}/user/login`, {
          email,
          password,
        });
        const data = response.data;
        console.log("data :", data);
        if (data && data.existUser) {
          Login(data.existUser, data.token);
          console.log(data.existUser)
        } else {
          console.error("User data not found in response");
        }
      } else {
        if(!image){
          console.log("No file selected");
          return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("image", image);

        const response = await axios.post(`${baseURL}/user/signup`, 
        formData,
         {
         headers:{"Content-Type":"multipart/form-data"}
        });
        const data = response.data;
         if(data && data.user){
          Login(data.user, data.token);
          console.log(data)
         }
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with error status:", error.response.status);
        console.error("Error response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from server. Request made:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
      }
    }
  };
  const handleImage=(ev)=>{
    setImage(ev.target.files[0])
  }
  useEffect(() => {
    if (!image) return;
    const fileReader = new FileReader();
    fileReader.onload = () => setImagePreview(fileReader.result);
    fileReader.readAsDataURL(image);
  }, [image]);
  return (
    <div className="auth">
      <form  className="form-auth"  >
        {!isLogin && (
          <>
            {!image && <input type="file" onChange={handleImage}/>}
            {image && <img src={imagePreview} alt="wrong thing"/>}
            <div className="form-control">
              <input
                type="text"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                placeholder="Your Full Name"
              />
            </div>
          </>
        )}
        <>
          <div className="form-control">
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Your Email Address"
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder=" Your password"
            />
          </div>
          {!isLogin && (
            <div className="form-control">
              <input
                type="password"
                value={ConfirmPassword}
                onChange={(ev) => setConfirmPassword(ev.target.value)}
                placeholder="confirm password"
              />
            </div>
          )}
          <div className="btn-login" onClick={handleOnSubmit}>
            <button > {isLogin ? "Login" : " Sign up"}</button>
          </div>
        </>
      </form>
      <div className="btn-login" onClick={() => setIsLogin(!isLogin)}>
        <button >
          {isLogin ? "Sign Up" : " Login"}
        </button>
      </div>
    </div>
  );
}
