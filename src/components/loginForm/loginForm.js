import classes from "./loginForm.module.css";
import React from "react";

import { useForm } from "react-hook-form";


import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import autumnImage from "../assets/image.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/data";
import { useContext } from 'react';


const LoginForm = () => {
    const navigate = useNavigate();
    const a = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/v1/users/login", data);
      console.log("Login successful:", response.data);
      a.setIsLoggedIn(true)
      navigate("/homepage");
      // Handle success: Redirect user or show success message
    } catch (error) {
      console.error("Login failed:");
      // Handle error: Display error message to the user
    }
  };

  return (
    <div className={classes.signupForm}>
      <div className={classes.signupFormml}>
      <video style={{width: '70rem', height: '45rem', objectFit: 'cover', position: 'absolute', marginLeft: '-33.5rem', borderRadius: '1.75rem 0 0 1.75rem'}} autoPlay playsInline loop muted>
        <source type="video/mp4" src="https://storage.googleapis.com/pixelverse-public/hero_video.mp4" />
        {/* Add fallback content here for browsers that do not support HTML5 video */}
        Your browser does not support the video tag.
      </video>
      </div>
      <div className={classes.signupFromr}>
        <div className={classes.formHeader}>
          
          <p className={classes.p}>Login</p>
        </div>
        <div>
          <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            
            <div className={classes.formInput}>
              <EmailOutlinedIcon className={classes.SVG} />
              <label className={classes.label} htmlFor="email">
                Email
              </label>
              <input
                className={classes.input}
                id="email"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && <p style={{ color: '#F6465D' }}>{errors.email.message}</p>}
            </div>
            <div className={classes.formInput}>
              <HttpsOutlinedIcon className={classes.SVG} />
              <label className={classes.label} htmlFor="password">
                Password
              </label>
              <input
                className={classes.input}
                id="password"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p style={{ color: '#F6465D' }}>{errors.password.message}</p>
              )}
            </div>
            <button className={classes.button} type="submit">
              Log-In
            </button>
            <p style={{ fontSize: '16px', color: '#aaa', width: '15rem', padding: '1rem', borderRadius: '1rem', background: '#1b232e' }}>
              Don't have an account? <span style={{ fontSize: '17px', color: 'white', cursor: 'pointer' }} onClick={()=>{navigate("/register")}}>Register</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
