import React from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const submitLogin = (e) => {
    navigate("/dashboard");
  };
  return (
    <div className="bg-all h-screen flex items-center justify-center">
      <div className="bg-main p-6 lg:p-8 w-11/12 xs:w-8/12 sm:w-7/12 md:w-1/2 lg:w-[28rem] text-white rounded-md z-10">
        <h3 className="font-semibold text-2xl mb-6">Login</h3>
        <div>
          <Input type="email" placeholder="johndoe@gmail.com" />
          <Input type="password" placeholder="password" />
          <div className="flex justify-center">
            <button
              onClick={submitLogin}
              className="bg-primary rounded-md text-white font-semibold px-6 py-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
