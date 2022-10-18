import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <form onSubmit={login}>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleInputChange}
      />
      <button>Ingresar</button>
    </form>
  );
};

export default Login;
