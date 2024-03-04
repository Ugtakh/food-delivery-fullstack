"use client";
import { useState, useContext } from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";
import { Button } from "@/components";
import { BasketContext, UserContext } from "@/context";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  food: {
    _id: string;
    name: string;
    price: number;
    image: string;
  };
}

export const CardModal = ({ food, handleClose, open }: IModalProps) => {
  const { addFoodToBasket }: any = useContext(BasketContext);
  const { user }: any = useContext(UserContext);
  const [count, setCount] = useState(1);

  const handleCount = (operation: string) => {
    if (operation === "add") {
      if (count < 10) setCount(count + 1);
    } else {
      if (count) setCount(count - 1);
    }
  };

  const handleSave = () => {
    if (!user) {
      toast.info("Та нэвтэрсний дараа энэ үйдлийг хийх боломжтой");
      return;
    }

    addFoodToBasket({
      foodId: food._id,
      quantity: count,
      totalPrice: count * food.price,
    });
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid container display={"flex"} flexDirection={"row"} gap={10}>
            <Grid item xs={6}>
              <Image
                alt=""
                width={250}
                height={250}
                src="/assets/food-1.jpg"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>

            <Grid
              item
              xs={5}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={3}
            >
              <Grid item xs={1} position={"relative"}>
                <MuiButton
                  onClick={handleClose}
                  sx={{ ml: 65, position: "absolute" }}
                >
                  <Close />
                </MuiButton>
              </Grid>
              <Grid display={"flex"} flexDirection={"column"} gap={2}>
                <Grid>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    fontWeight={600}
                    component="h2"
                  >
                    {food?.name}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ color: "#18BA51" }}
                  >
                    {food?.price}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    fontWeight={600}
                    component="h2"
                  >
                    Орц
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="body2"
                    bgcolor={"#F6F6F6"}
                    p={3}
                    borderRadius={4}
                  >
                    Өндөг, шош, улаан лооль, өргөст хэмт, байцаа, салмон.
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    fontWeight={600}
                    component="h2"
                  >
                    Тоо
                  </Typography>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <MuiButton onClick={() => handleCount("min")}>
                      <Remove
                        sx={{
                          bgcolor: "#18BA51",
                          color: "white",
                          width: "70%",
                          height: "30px",
                          borderRadius: 2,
                        }}
                      />
                    </MuiButton>
                    <input
                      type="text"
                      value={count}
                      style={{
                        width: "100px",
                        border: "none",
                        textAlign: "center",
                        paddingTop: 4,
                        paddingBottom: 4,
                        fontWeight: 600,
                        fontSize: 16,
                      }}
                    />
                    <MuiButton onClick={() => handleCount("add")}>
                      <Add
                        sx={{
                          bgcolor: "#18BA51",
                          color: "white",
                          width: "70%",
                          height: "30px",
                          borderRadius: 2,
                        }}
                      />
                    </MuiButton>
                  </Stack>
                </Grid>

                <Button label={"Сагслах"} onClick={handleSave} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};
