import React from "react";

export default function Input({ type, name, placeholder, className }) {
  return (
    <input
      name={name}
      className={`p-2.5 bg-gray-300 shadow-md rounded-md  focus:ring-2 active:ring-2 focus:ring-accent-green active:ring-accent-green ${className}`}
      placeholder={placeholder}
      type={type}
    />
  );
}
