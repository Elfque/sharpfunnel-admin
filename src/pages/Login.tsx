import { ChangeEvent, useState } from "react";
import logo from "../assets/img/logo.jpg";
import LoginInput from "../components/inputs/LoginInput";

const Login = () => {
  const [payload, setPayload] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  return (
    <div className="bg-whiteBg flex justify-center items-center min-h-screen w-screen">
      <div className="w-4/5 max-w-[416px]">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="" className="h-[44px]" />
        </div>
        <div className="text-xl text-blackText text-center mb-6">
          Login with the Admin email address
        </div>

        <div className="mb-5">
          <LoginInput
            placeholder="Email Address"
            type="email"
            value={payload.email}
            handleChange={handleChange}
            name="email"
          />
        </div>

        <div className="mb-5">
          <LoginInput
            placeholder="Password"
            type="password"
            value={payload.password}
            handleChange={handleChange}
            name="password"
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-blackText">
            <input type="checkbox" name="" id="" />
            <div className="text-xs">Remember me?</div>
          </div>

          <div className="text-xs text-purpleColor">Forgot Password</div>
        </div>

        <button className="pink-button mt-14">Login</button>
      </div>
    </div>
  );
};

export default Login;
