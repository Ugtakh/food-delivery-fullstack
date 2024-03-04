import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { object, string, ref } from "yup";
import axios from "axios";

interface IStepProps {
  email: string | null;
}

const validationSchema = object({
  password: string()
    .min(6, "Хамгийн багадаа 6 тэмдэгтээс тогтоно")
    .required("Нууц үгийг заавал оруулна уу"),
  rePassword: string()
    .oneOf([ref("password")], "Нууц үг хоорондоо таарахгүй байна")
    .min(6, "Хамгийн багадаа 6 тэмдэгтээс тогтоно")
    .required("Нууц үгийг заавал оруулна уу"),
});

const StepThree = ({ email }: IStepProps) => {
  const router = useRouter();

  const formik = useFormik({
    onSubmit: async ({ password, rePassword }) => {
      savePassword(email!, password);
    },
    initialValues: { password: "test", rePassword: "retest" },
    validateOnChange: false,
    validationSchema,
    validateOnBlur: false,
  });

  const savePassword = async (email: string, password: string) => {
    const res = await axios.post(
      "http://localhost:8080/verify/reset-password/",
      {
        email,
        password,
      }
    );
    console.log("RES");
    await Swal.fire({
      title: "Таны нууц үг амжилттай солигдлоо",
      text: "та шинэ нууц үгээ ашиглан нэвтэрнэ үү",
      icon: "success",
    });
    router.replace("/login");
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
          Шинэ нууц үг cэргээх
        </Typography>

        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input
            value={formik.values.password}
            errorText={formik.errors.password}
            name="password"
            label="Нууц үг"
            showPassword
            onChange={formik.handleChange}
          />
          <Input
            value={formik.values.rePassword}
            errorText={formik.errors.rePassword}
            name="rePassword"
            label="Нууц үг давтах"
            showPassword
            onChange={formik.handleChange}
          />
          <Button label={"Сэргээх"} onClick={formik.handleSubmit} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepThree;
