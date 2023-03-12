import React from "react";

const Input = ({ title, type, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="block w-full p-2 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
    />
  );
};

export default Input;
