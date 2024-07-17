import classes from "./LoginPage.module.css";
import React from "react";
import LoginForm from "../../components/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={classes.loginPage} >
      
      <LoginForm />
    </div>
  ); 
};

export default LoginPage;