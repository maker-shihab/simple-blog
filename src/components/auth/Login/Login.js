import React from "react";
import Title from "../../Global/Title/Title";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="flex items-center justify-between gap-20">
        <div className="logn-illustration">
          <img
            src="https://i.ibb.co/7zF31ZB/login-image.png"
            alt="loginImage"
          />
        </div>
        <div className="login-form">
          <div className="login-user">
            <img src="https://i.ibb.co/VC3nmWN/user.png" alt="user" />
          </div>
          <form className="mb-8">
            <Title
              tiClass={"text-center font-bold text-4xl py-4 mb-4"}
              tiContent={"Admin Login"}
            />
            <div className="form-control mb-6">
              <input
                name="name"
                type="text"
                className="w-full px-2 py-2 rounded border"
                placeholder="User Name"
              />
            </div>
            <div className="form-control mb-6">
              <input
                name="password"
                type="password"
                className="w-full p-2 rounded border"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="py-2 px-4 w-full rounded bg-red text-white" name="login_submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
