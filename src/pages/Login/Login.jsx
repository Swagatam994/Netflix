import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase";
import loader from "../../assets/netflix_spinner.gif";
const Login = () => {
  const [signstate, setsignstate] = useState("Sign In");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setloading(true);
    if (signstate === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setloading(false);
  };

  return loading ? (
    <div className="login_spinner">
      <img src={loader} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate == "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              type="text"
              placeholder="Your name"
            />
          ) : (
            ""
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signstate}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signstate == "Sign In" ? (
            <p>
              New to Netflix?
              <span onClick={() => setsignstate("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setsignstate("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
