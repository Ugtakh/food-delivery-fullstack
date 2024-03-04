"use client";

import { Grid } from "@mui/material";
import FoodList from "@/components/pages/FoodList";
import HeroSection from "@/components/Sections/Hero";
import InfoList from "@/components/Sections/InfoList";
import { useContext, useMemo } from "react";
import { FoodContext } from "@/context/FoodProvider";

export default function Home() {
  const { foods }: any = useContext(FoodContext);

  return (
    <Grid container>
      <HeroSection />
      <InfoList />
      <FoodList
        category={{ name: "Үндсэн хоол" }}
        foods={foods
          ?.filter((food: any) => food.category.name === "Үндсэн хоол")
          .slice(0, 4)}
      />
      <FoodList
        category={{ name: "Холимог" }}
        foods={foods
          ?.filter((food: any) => food.category.name !== "Үндсэн хоол")
          .slice(0, 4)}
      />
    </Grid>
  );
}
