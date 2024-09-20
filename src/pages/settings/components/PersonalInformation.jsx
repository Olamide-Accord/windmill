import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../../components/InputField";
import checkers from "../../../assets/checkers.png";
import { FaRegTrashAlt } from "react-icons/fa";

const PersonalInformation = () => {
  const [formInput, setFormInput] = useState({
    name: "Tolu Araba Landed Property",
    phoneNo: "08143490329",
    email: "olaleyesusan03@gmail.com",
    address: "8 Olalusi Street, Owode Onirin Ikorodu Bus Stop,",
    state: "Lagos",
    city: "Ikorodu",
    idProof: "BVN",
    idNo: "20/09/1992",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  return (
    <div className="bg-main py-8 px-9 text-gray-200 rounded-xl">
      <h4 className="font-medium text-2xl">Personal Information</h4>
      <div className="w-full md:w-10/12 my-5">
        <div className="flex gap-8 mb-6">
          <ProfilePicture />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="name"
            name="name"
            label="Name"
            placeholder="Tolu Araba Landed Property"
            value={formInput.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="phoneNo"
            name="phoneNo"
            label="Phone Number"
            placeholder="081-4534-45762"
            value={formInput.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="email"
            name="email"
            label="Email Address"
            placeholder="olaleyesusan03@gmail.com"
            value={formInput.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="address"
            name="address"
            label="House Address"
            placeholder="8 Olalusi Street, Owode Onirin Ikorodu Bus Stop, Lagos Nigeria"
            value={formInput.address}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="state"
            name="state"
            label="State"
            placeholder=""
            value={formInput.state}
            onChange={handleChange}
          />
          <InputField
            id="city"
            name="city"
            label="City"
            placeholder=""
            value={formInput.city}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="idProof"
            name="idProof"
            label="Proof of Identification"
            placeholder=""
            value={formInput.idProof}
            onChange={handleChange}
          />
          <InputField
            id="idNo"
            name="idNo"
            type="text"
            label="Identity Number*"
            placeholder="20/06/1992"
            value={formInput.idNo}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-primary text-white rounded-md px-6 py-1.5">
          Edit Information
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;

const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState(checkers);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(checkers);
  };

  return (
    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 text-gray-400">
      <div className="flex items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-20 h-20 xs:h-24 xs:w-24 rounded-full object-cover"
        />

        <label
          htmlFor="image-upload"
          className="ml-3 xs:ml-5 cursor-pointer border border-[#C0C0C0] py-0.5 px-2.5 rounded"
        >
          Choose
        </label>

        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

        <button
          onClick={handleDeleteImage}
          className="ml-3 xs:ml-6 flex items-center gap-1.5 xs:gap-2.5 text-red-500"
        >
          <span className="font-semibold xs:text-lg">
            <FaRegTrashAlt />
          </span>
          <span>Delete</span>
        </button>
      </div>
      <p className="text-sm xs:text-base">JPG,GIF or PNG. 3MB Max</p>
    </div>
  );
};
