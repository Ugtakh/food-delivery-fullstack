import { Button as MuiButton, Typography, Grid, Divider } from "@mui/material";
import { Remove, Add, Close } from "@mui/icons-material";
import { useContext, useState } from "react";
import { BasketContext } from "@/context";
import Image from "next/image";

interface IBasket {
  selectedFood: {
    food: any;
    qty: number;
  };
}

const FoodCard = ({ selectedFood }: IBasket) => {
  const { food } = selectedFood;
  const { updateFoodToBasket, deleteFoodFromBasket }: any =
    useContext(BasketContext);
  console.log(food.image);
  const [quantity, setQuantity] = useState(selectedFood.qty);

  const handleQuantity = (operation: string, foodId: string) => {
    console.log("FoodId", operation, foodId);
    if (operation === "PLUS") {
      quantity < 10 && setQuantity(quantity + 1);
    } else {
      quantity !== 1 && setQuantity(quantity - 1);
    }

    updateFoodToBasket({
      foodId: food._id,
      quantity: operation === "PLUS" ? quantity + 1 : quantity - 1,
      totalPrice:
        operation === "PLUS"
          ? (quantity + 1) * food.price
          : (quantity - 1) * food.price,
    });
  };

  const handleRemove = () => {
    console.log("remove basket", food?._id);
    deleteFoodFromBasket(food?._id);
  };

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      gap={10}
      px={10}
      py={5}
      my={1}
    >
      <Grid
        item
        xs={5}
        style={{
          backgroundImage: `url(${food?.image || "/assets/food-1.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px",
        }}
      >
        {/* <Image
          src={food?.image || 'url("/assets/food-1.jpg")'}
          alt="photo"
          width={100}
          height={100}
        /> */}
      </Grid>
      <Grid
        item
        xs={5}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
      >
        <Grid item xs={1} position={"relative"}>
          <MuiButton
            sx={{ ml: 50, position: "absolute" }}
            onClick={handleRemove}
          >
            <Close />
          </MuiButton>
        </Grid>
        <Grid display={"flex"} flexDirection={"column"}>
          <Typography fontWeight={600}>{food?.name}</Typography>
          <Typography sx={{ color: "#18BA51" }} fontWeight={600}>
            {food?.price}
          </Typography>

          <Typography color={"gray"}>
            Өндөг, шош, улаан лооль, өргөст хэмт, байцаа, салмон.
          </Typography>

          <Grid>
            <MuiButton onClick={() => handleQuantity("MINUS", food._id)}>
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
              value={quantity}
              style={{
                width: "60px",
                border: "none",
                textAlign: "center",
                paddingTop: 4,
                paddingBottom: 4,
                fontWeight: 600,
                fontSize: 16,
              }}
            />
            <MuiButton onClick={() => handleQuantity("PLUS", food._id)}>
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
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
};

export default FoodCard;
