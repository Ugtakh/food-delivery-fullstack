import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IStepProps {
  email: string | null;
  otp: string | null;
  handleNext: () => void;
  handleChangeInput: ({ name, value }: { name: string; value: string }) => void;
}

const validationSchema = Yup.object({
  otp: Yup.string().required("Код хоосон байна"),
});

const StepTwo = ({ email, otp, handleNext, handleChangeInput }: IStepProps) => {
  const formik = useFormik({
    onSubmit: ({ otp }) => {
      console.log("Submit");
      handleChangeInput({ name: "otp", value: otp! });
      handleNext();
      handleSendOtp();
    },
    initialValues: {
      otp,
    },
    validationSchema,
  });

  const handleSendOtp = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/otp", {
        email,
        otp,
      });
      handleNext();
    } catch (error) {
      console.log(error);
      toast.error("OTP илгэээхэд алдаа гарлаа.");
    }
  };

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
          padding: "5rem 0",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Нууц үг сэргээх
        </Typography>
        <Typography>
          Таны <span style={{ color: "#18BA51" }}>{email}</span> хаяг руу
          сэргээх код илгээх болно.
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input
            name="otp"
            label="Нууц үг сэргээх код"
            value={formik.values.otp!}
            errorText={formik.errors.otp}
            onChange={formik.handleChange}
          />
          <Button label={"Үргэлжлүүлэх"} onClick={formik.handleSubmit} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepTwo;
