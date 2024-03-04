import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";
import Lottie from "lottie-react";
import React, { useContext } from "react";
import { DrawerCard } from "../DrawerCard";
import { BasketContext, UserContext } from "@/context";

import emptyBasketData from "@/../../public/assets/images/lottie/emptyBasket.json";

interface IDrawerProps {
  open: boolean;
  handleClose: () => void;
}

const MyDrawer = ({ handleClose, open }: IDrawerProps) => {
  const { createOrder, user } = useContext(UserContext);
  const { basket }: any = useContext(BasketContext);

  const handleOrder = () => {
    if (user) {
    }

    createOrder(basket, {
      khoroo: "10 Khoroo",
      district: "SBD",
      info: "This is a info",
    });
  };

  return (
    <>
      <Drawer open={open} onClose={handleClose} anchor="right">
        <Box width={584} height={"100%"}>
          <Box
            p={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton onClick={handleClose}>
              <FaChevronLeft />
            </IconButton>
            <Typography variant="h6" fontWeight={600}>
              Таны сагс
            </Typography>
            <Typography></Typography>
          </Box>
          <Divider />
          {!basket && (
            <Stack
              height={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                width={200}
                height={200}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Lottie animationData={emptyBasketData} loop />
              </Box>
              <Typography variant="h6" align="center">
                Хоосон байна
              </Typography>
            </Stack>
          )}
          {basket && <DrawerCard basket={basket} handleOrder={handleOrder} />}
        </Box>
      </Drawer>
    </>
  );
};

export default MyDrawer;
