"use client";

import { Button, Input } from "@/components";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import React from "react";

const validationSchema = yup.object({
  name: yup.string().required("Нэрийг заавал бөглөнө үү."),
  email: yup
    .string()
    .max(100, "Имэйл хаяг 100 тэмдэгтээч хэтрэхгүй байна.")
    .required("Имэйл хаягыг заавал бөглөнө үү.")
    .email("Хүчинтэй имэйл хаяг байх ёстой")
    .matches(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@gmail[A-Za-z0-9.-]+$/,
      "Та зөвхөн gmail хаяг оруулна"
    ),
  address: yup.string().required("Хаягийг заавал бөглөнө үү."),
  password: yup
    .string()
    .required("Нууц үгээ заавал бөглөнө үү.")
    .min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой."),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password")], "Нууц үг хоорондоо таарахгүй байна")
    .min(6, "Хамгийн багадаа 6 тэмдэгтээс тогтоно")
    .required("Нууц үгийг заавал оруулна уу"),
});

const SignupPage = () => {
  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      console.log("EMAIL", email);
      console.log("PASS", password);
    },
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      rePassword: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
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
          Бүртгүүлэх
        </Typography>
        <Stack width="100%" sx={{ mb: "1rem" }}>
          <Input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            errorText={formik.errors.name}
            label="Нэр"
          />
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
            label="И-Мэйл"
          />
          <Input
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            errorText={formik.errors.address}
            label="Хаяг"
          />
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            label="Нууц үг"
            showPassword
          />
          <Input
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            errorText={formik.errors.rePassword}
            label="Нууц үг давтах"
            showPassword
          />
        </Stack>

        <Stack sx={{ mb: "1rem" }}>
          <FormControlLabel
            control={<Checkbox onChange={formik.handleChange} name="isAgree" />}
            label="Үйлчилгээний нөхцөл зөвшөөрөх"
          />
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" onClick={formik.handleSubmit} />
        </Stack>
      </Box>
    </Container>
  );
};

export default SignupPage;
