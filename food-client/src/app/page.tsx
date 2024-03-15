"use client";

import { Grid, Typography } from "@mui/material";
import FoodList from "@/components/pages/FoodList";
import HeroSection from "@/components/Sections/Hero";
import InfoList from "@/components/Sections/InfoList";
import { useContext, useMemo } from "react";
import { FoodContext } from "@/context/FoodProvider";
import { useSession } from "next-auth/react";

export default function Home() {
  const { foods }: any = useContext(FoodContext);
  const { data, status } = useSession();
  console.log("PAGES", data, status);

  if (status === "loading" || status === "unauthenticated")
    return <Typography>Loading or not authenticated</Typography>;

  return (
    <Grid container>
      <Typography>Hello: {data?.user?.name}</Typography>
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
