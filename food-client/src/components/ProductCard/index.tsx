import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

const ProductCard = () => {
  return (
    <Card sx={{ width: 282 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 186, width: 'full' }}
          image="/assets/food-1.png"
        />
        {/* <CardMedia sx={{height:186, width:282}}>
         <Image src="/assets/food-1.png" alt="card" width={100} height={100}/>
        </CardMedia> */}
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
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
