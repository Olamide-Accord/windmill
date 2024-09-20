import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({
  id,
  name,
  type,
  passwordToggle = type === "password" ? true : false,
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = React.useState(type === "text");
  return (
    <div className="mb-5 w-full">
      <div className="flex items-center justify-between relative">
        <input
          className="appearance-none border-2 border-all w-full p-2.5 sm:p-3 text-black leading-tight focus:outline-[0.5px] focus:outline-primary rounded-md focus:shadow-outline text-sm xs:text-base placeholder:text-sm xs:placeholder:text-base placeholder:text-all font-medium"
          id={id}
          name={name}
          type={passwordToggle ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
        {type === "password" && (
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <FaRegEye className="w-7" />
            ) : (
              <FaRegEyeSlash className="w-7" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
