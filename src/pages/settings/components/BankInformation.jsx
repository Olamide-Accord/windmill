import React, { useState } from "react";
import SettingsLayout from "./SettingsLayout";
import InputField from "../../../components/InputField";
import { FaTrashCan } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

const arr = [
  {
    name: "Olaoluwa Uchenna edoja",
    bankName: "OPAY",
    bankNo: "0192009303",
  },
];

const BankInformation = () => {
  const [infoArr, setInfoArr] = useState(arr);
  const [showNewBankForm, setShowNewBankForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleUpdateBank = (index, updatedBankInfo) => {
    const updatedInfoArr = [...infoArr];
    updatedInfoArr[index] = updatedBankInfo;
    setInfoArr(updatedInfoArr);
    setEditingIndex(null);
    setShowNewBankForm(false);
  };

  const handleAddNewBank = (newBankInfo) => {
    setInfoArr([...infoArr, newBankInfo]);
    setShowNewBankForm(false);
  };

  const handleDeleteBank = (index) => {
    const updatedInfoArr = infoArr.filter((_, i) => i !== index);
    setInfoArr(updatedInfoArr);
  };

  const openNewBankForm = () => {
    setShowNewBankForm(true);
  };

  const closeNewBankForm = () => {
    setShowNewBankForm(false);
    setEditingIndex(null);
  };

  return (
    <SettingsLayout>
      <div className="w-full md:w-10/12">
        <h4 className="font-medium text-gray-200 text-2xl mb-7">
          Bank Information
        </h4>
        {infoArr.length === 0 ? (
          <div className="flex bg-main text-gray-200 w-96 justify-center items-center h-20 mx-auto rounded-md p-2">
            No account
          </div>
        ) : (
          <div className="my-3 flex gap-4 items-center">
            {infoArr.map((item, index) => (
              <div
                className="basis-full sm:basis-1/2 shadow-sm bg-main text-gray-200 rounded-xl p-5"
                key={index}
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold uppercase text-purple-800 text-wrap">
                    {item.name}
                  </h4>
                  <div className="flex gap-3 items-center">
                    <button onClick={() => handleDeleteBank(index)}>
                      <FaTrashCan />
                    </button>
                    <button
                      className="border border-[#c0c0c0] rounded px-3 py-0.5"
                      onClick={() => {
                        setEditingIndex(index);
                        setShowNewBankForm(true);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <h5 className="uppercase font-medium mb-2">{item.bankName}</h5>
                <h6 className="font-medium">{item.bankNo}</h6>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center">
          <button
            onClick={openNewBankForm}
            className="bg-primary text-white px-4 py-2 rounded mt-4"
          >
            Add New Bank
          </button>
        </div>

        {showNewBankForm && (
          <NewBank
            initialData={editingIndex !== null ? infoArr[editingIndex] : null}
            closeNewBankForm={closeNewBankForm}
            onAddNewBank={
              editingIndex !== null ? handleUpdateBank : handleAddNewBank
            }
            editingIndex={editingIndex}
          />
        )}
      </div>
    </SettingsLayout>
  );
};

const NewBank = ({
  initialData,
  onAddNewBank,
  closeNewBankForm,
  editingIndex,
}) => {
  const [formInput, setFormInput] = useState(
    initialData || {
      name: "",
      bankName: "",
      bankNo: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!formInput.bankName || !formInput.bankNo || !formInput.name) {
      return;
    }
    onAddNewBank(formInput);
    closeNewBankForm();
  };

  const handleClose = () => {
    closeNewBankForm();
    setFormInput({
      name: "",
      bankName: "",
      bankNo: "",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]">
      <div className="bg-main text-gray-400 p-5 rounded-lg w-96 mx-auto">
        <div className="flex justify-end mb-5">
          <button className="text-2xl" onClick={handleClose}>
            <IoIosCloseCircle />
          </button>
        </div>
        <div className="flex flex-col">
          <InputField
            id="name"
            name="name"
            type="text"
            label="Account Name*"
            placeholder="Enter account name"
            value={formInput.name}
            onChange={handleChange}
          />
          <InputField
            id="bankName"
            name="bankName"
            type="text"
            label="Bank Name*"
            placeholder="Enter bank name"
            value={formInput.bankName}
            onChange={handleChange}
          />
          <InputField
            id="bankNo"
            name="bankNo"
            type="text"
            label="Account Number*"
            placeholder="Enter account number"
            value={formInput.bankNo}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-primary text-white px-4 py-2 rounded mt-4"
          >
            {initialData ? "Update Bank" : "Add Bank"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankInformation;
