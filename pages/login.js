import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../components/Button";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

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
    }).then((response) => {
      if (response.status === 200) {
        router.push("/dashboard/usuarios");
      }
    });
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
      <Button label={"Ingresar"} />
    </form>
  );
};

export default Login;
