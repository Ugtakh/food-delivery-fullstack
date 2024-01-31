import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

interface IProductCardProps {
  data: { title: string; img: string; price: number; sale: number };
}

const ProductCard = ({ data }: IProductCardProps) => {
  const saledPrice = data.price - data.price * (data.sale / 100);

  return (
    <Card sx={{ width: "100%", maxWidth: 'full', position: "relative" }}>
      <CardMedia sx={{ height: 186 }} image={data.img} />
      {data.sale > 0 ? (
        <Chip
          color="primary"
          label={`-${data.sale}%`}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            fontSize: 18,
            border: 1,
          }}
        />
      ) : null}
      <CardContent>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          {data.title}
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography color={"primary"}>{saledPrice}₮</Typography>
          <Typography
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          >
            {data.price}₮
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
