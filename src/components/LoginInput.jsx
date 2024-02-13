import React from "react";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <form className="flex flex-col">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-600 focus:border-blue-600 border-gray-300 text-gray-900"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={onEmailChange}
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
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-600 focus:border-blue-600 border-gray-300 text-gray-900"
          placeholder="********"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <button
        type="submit"
        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
        onClick={(e) => {
          e.preventDefault();
          login({ email, password });
        }}
      >
        Login
      </button>
    </form>
  );
}

export default LoginInput;
