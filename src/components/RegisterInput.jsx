import React from "react";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [email, onEmailChange] = useInput("");
  const [name, onNameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="flex flex-col">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-600 focus:border-blue-600 border-gray-300 text-gray-900"
          placeholder="Full Name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-600 focus:border-blue-600 border-gray-300 text-gray-900"
          placeholder="johndoe@gmail.com"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-600 focus:border-blue-600 border-gray-300 text-gray-900"
          placeholder="********"
        />
      </div>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          register({ name, email, password });
        }}
        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterInput;
