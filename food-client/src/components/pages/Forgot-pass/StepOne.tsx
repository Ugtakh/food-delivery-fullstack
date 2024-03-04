import { Button, Input } from "@/components";
import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { object, string } from "yup";

interface IStepProps {
  email: string | null;
  handleNext: () => void;
  handleChangeInput: ({ name, value }: { name: string; value: string }) => void;
}

const validationSchema = Yup.object({
  email: Yup.string().required("Имэйл хоосон байна"),
});

const StepOne = ({ email, handleNext, handleChangeInput }: IStepProps) => {
  const formik = useFormik({
    onSubmit: ({ email }) => {
      console.log("Submit");
      handleChangeInput({ name: "email", value: email! });
      sendToEmail(email!);
    },
    initialValues: {
      email,
    },
    validationSchema,
  });

  const sendToEmail = async (email: string) => {
    try {
      const data = await axios.post("http://localhost:8080/auth/send-email", {
        email: email,
      });
      handleNext();
    } catch (error) {
      toast.error("Email илгэээхэд алдаа гарлаа.");
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
        ,
        <FormControl fullWidth>
          <Input
            label="Имэйл"
            value={formik.values.email!}
            errorText={formik.errors.email}
            onChange={formik.handleChange}
            name="email"
          />
        </FormControl>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label={"Үргэлжлүүлэх"} onClick={formik.handleSubmit} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepOne;
