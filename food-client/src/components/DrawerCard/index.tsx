import { useContext } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import FoodCard from "./FoodCard";
import { Button } from "..";

export const DrawerCard = ({ basket, handleOrder }: any) => {
  return (
    <Stack
      direction={"column"}
      height={"93%"}
      width={"100%"}
      justifyContent={"space-between"}
    >
      <Box
        alignSelf={"center"}
        height={"100%"}
        width={"100%"}
        overflow={"auto"}
      >
        {basket?.foods.map((food: any) => (
          <FoodCard key={food._id} selectedFood={food} />
        ))}
      </Box>
      <Divider />
      <Grid
        width={"100%"}
        container
        bottom={0}
        boxShadow={3}
        bgcolor={"white"}
        py={10}
        px={5}
      >
        <Grid
          item
          xs={6}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          pl={5}
        >
          <Typography variant="body1">Нийт төлөх дүн</Typography>
          <Typography variant="h6" fontWeight={600}>
            {basket?.totalPrice.toLocaleString()}₮
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button label={"Захиалах"} onClick={handleOrder} />
        </Grid>
      </Grid>
    </Stack>
  );
};
