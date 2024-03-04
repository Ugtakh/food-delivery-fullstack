"use client";

import axios from "axios";
import { PropsWithChildren, createContext, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

interface IUser {
  name: string;
  email: string;
  address?: string;
  avatarUrl?: string;
}

interface IUserContext {
  user: IUser | null;
  login: (name: string, password: string) => void;
  createOrder: (basket: any, address: any) => void;
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    address: "",
  },
  login: function () {},
  createOrder: async function () {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  const login = async (email: string, password: string) => {
    try {
      console.log("Login", email, password);
      const { data } = await axios.post("http://localhost:8080/auth/login", {
        userEmail: email,
        userPassword: password,
      });
      console.log("data", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      setToken(data.user);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const createOrder = async (basket: any, address: any) => {
    console.log("food", basket);

    try {
      await axios.post(
        "http://localhost:8080/order",
        {
          address,
          basket,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
      toast.error("Захиалга үүсгэхэд алдаа гарлаа");
    }
  };

  return (
    <UserContext.Provider value={{ user, login, createOrder }}>
      {children}
    </UserContext.Provider>
  );
};
