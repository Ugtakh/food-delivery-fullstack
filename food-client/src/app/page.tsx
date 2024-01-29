"use client";

import { Grid, Button, Typography } from "@mui/material";
import { FoodCard, Header } from "@/components";

export default function Home() {
  return (
    <main>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h3">Welcome Mui Framework</Typography>
        </Grid>
        {/* <Grid item xs={12} md={12}>
          <FoodCard data={{ name: "Cool Food", price: 1000, img: "" }} />
        </Grid> */}
      </Grid>
    </main>
  );
}
