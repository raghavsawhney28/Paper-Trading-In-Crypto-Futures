import classes from "./SignupForm.module.css";
import React from "react";

import { useForm } from "react-hook-form";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import autumnImage from "../assets/image.png";
import axios from "axios";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/v1/users/register", data);
      console.log("Registration successful:", response.data);
      // Handle success: Redirect user or show success message
    } catch (error) {
      console.error("Registration failed:", error.response.data);
      // Handle error: Display error message to the user
    }
  };

  return (
    <div className={classes.signupForm}>
      <div className={classes.signupFormml}>
      <img src={autumnImage} alt="Autumn" className={classes.banner} />
      </div>
      <div className={classes.signupFromr}>
        <div className={classes.formHeader}>
          
          <p className={classes.p}>Create Account</p>
        </div>
        <div>
          <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.formInput}>
              <PersonOutlineOutlinedIcon className={classes.SVG}/>
              
              <label className={classes.label} htmlFor="fullName">
                Full Name
              </label>
              <input
                className={classes.input}
                id="fullName"
                placeholder="Enter Full Name"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullname && (
                <p style={{ color: '#F6465D' }}>{errors.fullname.message}</p>
              )}
            </div>
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
              Sign-Up
            </button>
            <p style={{ fontSize: '16px', color: '#aaa' }}>
              Already have an account? <span style={{ fontSize: '17px', color: 'white' }}>Login</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
