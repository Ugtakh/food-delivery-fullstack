"use client";

import { Grid } from "@mui/material";

import FoodList from "@/components/pages/FoodList";
import Image from "next/image";
import HeroSection from "@/components/Sections/Hero";
import InfoList from "@/components/Sections/InfoList";

export default function Home() {
  return (
    <Grid container>
      <HeroSection />
      <InfoList />
      <FoodList />
    </Grid>
  );
}
