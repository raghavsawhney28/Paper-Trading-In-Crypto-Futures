import classes from "./SignupPage.module.css";
import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";

const SignupPage = () => {
  return (
    <div className={classes.signupPage}>
      <SignupForm />
    </div>
  );
};

export default SignupPage;