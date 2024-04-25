import LoginForm from "../components/LoginForm";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
const LoginPage = () => {
  const [onLogin, setOnLogIn] = useState(true);
  const handleSignupClick = () => {
    if (onLogin) {
      setOnLogIn(false);
    } else {
      setOnLogIn(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#E9E9E9] flex justify-end p-8 px-0">
      <div className="flex justify-center items-center flex-2">
        <img
          src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1200x900&vertical=center"
          alt=""
          width={900}
          height={900}
        />
      </div>
      <div className=" bg-white w-[40%] min-h-[90vh] mx-5 rounded-xl flex flex-col items-center flex-0">
        <div className=" h-[40%]  flex flex-col justify-center ">
          <AutoAwesomeIcon className="mx-auto mb-3" fontSize="large" />

          <h1 className=" text-5xl  font-bold text-center z-10 ">
            {onLogin ? "Welcome back!" : "Let's fkin sign you up"}
          </h1>
          <p className="text-center text-gray-800">Please enter your details</p>
        </div>
        <div className=" bg-white flex  justify-center items-center w-[70%]">
          {onLogin ? <LoginForm /> : <SignUpForm setOnLogIn={setOnLogIn} />}
        </div>
        <p className="mt-auto p-2">
          {onLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            className="font-bold inline underline"
            onClick={handleSignupClick}
          >
            {onLogin ? "Sign UP" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
