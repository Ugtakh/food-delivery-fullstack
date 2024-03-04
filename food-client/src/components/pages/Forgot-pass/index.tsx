"use client";

import { ChangeEvent, useState } from "react";
import { Container } from "@mui/material";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MyStepper = () => {
  const [user, setUser] = useState({ email: null, otp: null, password: null });
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = async () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleChangeInput = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  console.log("USER", user);
  return (
    <Container>
      {activeStep === 1 && (
        <StepOne
          email={user.email}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 2 && (
        <StepTwo
          email={user.email}
          otp={user.otp}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 3 && <StepThree email={user.email} />}
    </Container>
  );
};

export default MyStepper;
