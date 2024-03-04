"use client";

import axios, { Axios, AxiosError } from "axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { UserContext } from "..";

export const BasketContext = createContext({} as object);

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

export const BasketProvider = ({ children }: PropsWithChildren) => {
  const { user } = useContext(UserContext);
  const [basket, setBasket] = useState<{} | null>(null);

  const addFoodToBasket = async (foodItem: any) => {
    console.log("Food", foodItem);
    try {
      const { basket, message } = await createReq(
        "http://localhost:8080/basket",
        foodItem
      );
      console.log("RES", basket);
      setBasket({ ...basket });
      toast.success(message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const updateFoodToBasket = async (foodItem: any) => {
    console.log("Food", foodItem);
    try {
      const { basket } = await createReq(
        "http://localhost:8080/basket",
        foodItem
      );
      console.log("RES", basket);
      setBasket({ ...basket });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const deleteFoodFromBasket = async (foodId: string) => {
    console.log("Food", foodId);
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/basket/${foodId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("RES", data?.basket);
      // setBasket({ ...data?.basket });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const getFoodBasket = async () => {
    try {
      const { data } = (await axios.get("http://localhost:8080/basket", {
        headers: { Authorization: `Bearer ${token}` },
      })) as {
        data: any;
      };
      console.log("RES", data);
      setBasket({ ...data?.basket });
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
    if (user) {
      getFoodBasket();
    }
  }, [user]);

  return (
    <BasketContext.Provider
      value={{
        basket,
        addFoodToBasket,
        updateFoodToBasket,
        deleteFoodFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
