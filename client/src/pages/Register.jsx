import "./Register.css";

import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

import Loading from "../components/common/Loading";
import { useLoginMutation, useSigninMutation } from "../redux/service";

const Register = () => {
  const [login, setLogin] = useState(false);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signinUser, signinData] = useSigninMutation();
  const [loginUser, loginData] = useLoginMutation();

  const toggleLogin = () => setLogin((prev) => !prev);

  const handleRegister = async () => {
    await signinUser({ userName, email, password });
  };

  const handleLogin = async () => {
    await loginUser({ email, password });
  };

  useEffect(() => {
    if (signinData.isSuccess) {
      toast.success(signinData.data.msg, {
        position: "top-center",
        autoClose: 2500,
        transition: Bounce,
        theme: "colored",
      });
    }

    if (signinData.isError) {
      toast.error(signinData.error.data.msg, {
        position: "top-center",
        autoClose: 2500,
        transition: Bounce,
        theme: "colored",
      });
    }
  }, [signinData.isSuccess, signinData.isError]);

  useEffect(() => {
    if (loginData.isSuccess) {
      toast.success(loginData.data.msg, {
        position: "top-center",
        autoClose: 2500,
        transition: Bounce,
        theme: "colored",
      });
    }

    if (loginData.isError) {
      toast.error(loginData.error.data.msg, {
        position: "top-center",
        autoClose: 2500,
        transition: Bounce,
        theme: "colored",
      });
    }
  }, [loginData.isSuccess, loginData.isError]);

  if (signinData.isLoading || loginData.isLoading) {
    return <Loading />;
  }

  return (
    <section className="register-page">
      <div className="leaves">
        <div className="set">
          {[
            "leaf_01.png",
            "leaf_02.png",
            "leaf_03.png",
            "leaf_04.png",
            "leaf_01.png",
            "leaf_02.png",
            "leaf_03.png",
            "leaf_04.png",
          ].map((leaf, index) => (
            <div key={index}>
              <img src={`/${leaf}`} alt="" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>

      <img
        src="/bg.jpg"
        className="bg"
        alt=""
        fetchPriority="high"
        decoding="async"
      />

      <img
        src="/trees.png"
        className="trees"
        alt=""
        loading="eager"
        fetchPriority="high"
      />

      <img
        src="/girl.png"
        className="girl"
        alt=""
        loading="lazy"
        decoding="async"
      />

      <div className="login-card">
        <h2>{login ? "Welcome Back" : "Join PostVibe"}</h2>

        <p className="subtitle">
          {login
            ? "Login to continue sharing moments."
            : "Create your account and start posting."}
        </p>

        {!login && (
          <div className="inputBox">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        )}

        <div className="inputBox">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <button
            className="submit-btn"
            onClick={login ? handleLogin : handleRegister}
          >
            {login ? "Login" : "Sign Up"}
          </button>
        </div>

        <div className="group">
          <span>{login ? "Don't have an account?" : "Already have an account?"}</span>

          <button className="toggle-btn" onClick={toggleLogin}>
            {login ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;