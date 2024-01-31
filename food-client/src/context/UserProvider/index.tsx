"use client";

import { PropsWithChildren, createContext, useState } from "react";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
}

interface IUserContext {
  user: IUser;
  login: (name: string, password: string) => void;
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    address: "",
  },
  login: function () {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>({
    name: "Test User",
    email: "",
    address: "",
    password: "",
  });

  const login = (email: string, password: string): void => {
    // axios
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
