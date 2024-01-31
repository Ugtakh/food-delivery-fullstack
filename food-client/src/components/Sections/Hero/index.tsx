import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Grid
      container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor="#18BA51"
      my={5}
      gap={20}
      py={15}
      sx={{ backgroundImage: `url(${"/logo_svg/footer.svg"})` }}
    >
      <Grid item>
        <Typography variant="h4" fontWeight={800} color={"white"}>
          Pinecone
        </Typography>
        <Typography
          variant="h4"
          fontWeight={800}
          color={"white"}
          borderBottom={1}
          pb={4}
        >
          Food delivery
        </Typography>
        <Typography color={"white"} pt={4}>
          Хүссэн газраасаа хоолоо захиал
        </Typography>
        <Typography color={"white"}>
          Амтлаг шинээрээ бүх төрлийн хоол
        </Typography>
      </Grid>
      <Grid item>
        <Image
          alt="hero banner"
          width={588}
          height={438}
          src="/assets/images/food/heroBanner.png"
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
