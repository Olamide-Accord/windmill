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
          className="appearance-none w-full px-4 border-0 rounded-md placeholder-gray-500 focus:outline-[#e5e7eb] focus:placeholder-gray-600 bg-[#24262d] text-[#e5e7eb] focus:border-[#cabffd] focus:outline-none placeholder:text-lg text-base focus:shadow-outline-primaryLight py-3.5"
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
