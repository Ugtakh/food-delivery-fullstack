"use client";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { Logo } from "../Logos";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#18BA51",
        width: "100vw",
        position: "relative",
        alignItems: "center",
      }}
      zIndex={0}
    >
      <Container>
        <Box
          color={"white"}
          padding={20}
          sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack gap={3} width={"385px"}>
            <Typography variant="h3" style={{ fontWeight: 600 }}>
              <span style={{ display: "block" }}>Pinecone</span>Food Delivery
            </Typography>
            <Divider sx={{ backgroundColor: "white", borderWidth: "1px" }} />
            <Typography style={{ fontSize: "22px", fontWeight: 500 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Box
            sx={{
              height: "438px",
              width: "588px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src="/assets/hero-image-1.png"
              alt="hero"
              width={100}
              height={100}
              style={{
                position: "absolute",
                left: 0,
                zIndex: 10,
              }}
            />
            <Image
              src="/assets/hero-image-2.png"
              alt="hero"
              width={100}
              height={100}
              style={{ position: "absolute", right: 50, zIndex: 10 }}
            />
          </Box>
        </Box>
      </Container>
      <Box
        zIndex={-999}
        sx={{
          position: "absolute",
          height: "100%",
          width: "99%",
          top: 0,
          backgroundImage: `url(pattern.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
    </Box>
  );
};

export default HeroSection;
