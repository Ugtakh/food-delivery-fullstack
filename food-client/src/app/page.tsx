"use client";

import { Grid, Button, Typography } from "@mui/material";
import { FoodCard, Header } from "@/components";
import HeroSection from "@/components/HeroSection";
import CardsSection from "@/components/CardsSection";

export default function Home() {
  return (
    <main>
      {/* <Grid container> */}
        {/* <Grid item xs={12} md={12}>
          <Typography variant="h3">Welcome Mui Framework</Typography>
        </Grid> */}
        <HeroSection />
        <CardsSection />
        {/* <Grid item xs={12} md={12}>
          <FoodCard data={{ name: "Cool Food", price: 1000, img: "" }} />
        </Grid> */}
      {/* </Grid> */}
    </main>
  );
}
