import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 282, position: "relative" }}>
      <CardMedia sx={{ height: 186 }} image="/assets/food-1.jpg" />
      <Chip color="primary" label="-20%" sx={{ position: "absolute", top: 10, right: 10, color: 'white', fontSize:18, border:1 }} />
      <CardContent>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          Өглөөний хоол
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography color={"primary"}>14,800₮</Typography>
          <Typography
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          >
            16,800₮
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
