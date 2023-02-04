import React, { useState } from "react";

export default function Login(prop) {
  const { loginHandler } = prop;
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("Password: ", password);
  console.log("userName: ", userName);
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input type="text" name="userName" />
        <input type="text" name="password" />
        <button type="submit">Login</button>
        <input type="button" value="Register" />
      </form>
    </div>
  );
}
