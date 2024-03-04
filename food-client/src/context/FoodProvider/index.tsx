"use client";

import axios from "axios";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FoodContext = createContext({} as object);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmEyNWY3ZTc5ZDk5ZDdhYWUxYzE4NSIsImlhdCI6MTcwOTQwMDA5OSwiZXhwIjoxNzA5NDg2NDk5fQ.TBk1ToShB_pveriY6_ypWuRvJ77p_Wy8paUma_mcpj0";

const createReq = async (url: string, foodItem: any) => {
  const { data } = (await axios.post(url, foodItem, {
    headers: { Authorization: `Bearer ${token}` },
  })) as {
    data: any;
  };
  return { basket: data.basket, message: data.message };
};

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setBasket] = useState<{} | null>(null);
  const [refetch, setRefetch] = useState<boolean>(false);

  const getFoods = async () => {
    try {
      const { data } = (await axios.get("http://localhost:8080/foods", {
        headers: { Authorization: `Bearer ${token}` },
      })) as {
        data: any;
      };
      console.log("FOOD-RES", data);
      setBasket(data?.foods);
      // toast.success(data.message);
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        error.message = error.response.data.message;
      }
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        foods,
        getFoods,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
