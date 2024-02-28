"use client";

import { Grid } from "@mui/material";
import FoodList from "@/components/pages/FoodList";
import HeroSection from "@/components/Sections/Hero";
import InfoList from "@/components/Sections/InfoList";
import axios from "axios";

export default function Home() {
  return (
    <Grid container>
      <HeroSection />
      <InfoList />
      <FoodList
        category={{ name: "Үндсэн хоол" }}
        foods={[
          { _id: "1", name: "Main Food", price: 3000, img: "" },
          { _id: "2", name: "Salad Food", price: 4000, img: "" },
          { _id: "3", name: "Drink Food", price: 5000, img: "" },
          { _id: "4", name: "Sale Food", price: 9000, img: "" },
        ]}
      />
      <FoodList category={{ name: "Зууш" }} />
    </Grid>
  );
}
