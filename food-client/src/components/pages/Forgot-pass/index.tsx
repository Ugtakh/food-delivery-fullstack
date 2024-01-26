"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Input } from "@/components";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";

const MyStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const steps = [
    {
      label: "Нууц үг сэргээх",
      content: <Input label="Имэйл" />,
    },
    {
      label: "Нууц үг сэргээх",
      content: (
        <>
          <Typography>
            Таны <span style={{ color: "#18BA51" }}>example@pinecone.mn</span>{" "}
            хаяг руу сэргээх код илгээх болно.
          </Typography>
          <Stack width="100%" sx={{ mb: "2rem" }}>
            <Input label="Нууц үг сэргээх код" showPassword />
          </Stack>
        </>
      ),
    },
    {
      label: "Шинэ нууц үг зохиох",
      content: (
        <>
          <Stack width="100%" sx={{ mb: "2rem" }}>
            <Input label="Нууц үг" showPassword />
            <Input label="Нууц үг давтах" showPassword />
          </Stack>
        </>
      ),
    },
  ];

  const currentStep = steps[activeStep];

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          height: "calc(100vh - 90px)",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          {currentStep.label}
        </Typography>

        {currentStep.content}

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button
            label={activeStep === steps.length - 1 ? "Дуусгах" : "Үргэлжлүүлэх"}
            onClick={
              activeStep === steps.length - 1
                ? () => alert("Нууц үг амжилттай солигдлоо")
                : handleNext
            }
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default MyStepper;
