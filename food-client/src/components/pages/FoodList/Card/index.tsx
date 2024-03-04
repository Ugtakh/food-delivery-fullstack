"use client";
import { Button } from "@/components";
import { CardModal } from "@/components/Modal";
import StarIcon from "@/components/StarIcon";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  Container,
  Stack,
  Grid,
} from "@mui/material";
import { useState } from "react";

interface IFoodProps {
  food: {
    _id: string;
    name: string;
    price: number;
    image: string;
  };
}

export const FoodCard = ({ food }: IFoodProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} justifyContent="center">
      <Card
        sx={{
          maxWidth: 282,
          margin: "20px auto",
          border: "none",
          boxShadow: "none",
        }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <CardMedia
            sx={{ p: 0, height: 186 }}
            image={food?.image || "/assets/images/food/food3.png"}
          />
          <CardContent
            sx={{
              pt: 1,
            }}
          >
            <Typography fontSize={18} fontWeight={600}>
              {food?.name}
            </Typography>
            <Typography color="primary" fontSize={18} fontWeight={600}>
              {food?.price}₮
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <CardModal open={open} handleClose={handleClose} food={food} />
    </Grid>
  );
};

export const FoodCardItem = () => {
  return <Box display="flex" flexWrap="wrap"></Box>;
};
