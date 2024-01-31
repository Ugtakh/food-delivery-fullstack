import { Button } from "@/components";
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

interface IFoodProps {
  data: {
    name: string;
    price: number;
    img: string;
  };
}

export const FoodCard = ({ data }: IFoodProps) => {
  return (
    <Card
      sx={{ maxWidth: 282, margin: 5 }}
      style={{ border: "none", boxShadow: "none" }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ p: 0, height: 186 }}
          image={data.img || "/assets/images/food/food3.png"}
        />
        <CardContent
          sx={{
            pt: 1,
          }}
        >
          <Typography fontSize={18} fontWeight={600}>
            {data.name}
          </Typography>
          <Typography color="primary" fontSize={18} fontWeight={600}>
            {data.price}₮
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const FoodCardItem = () => {
  return <Box display="flex" flexWrap="wrap"></Box>;
};
