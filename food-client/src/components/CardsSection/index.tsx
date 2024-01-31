import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ProductCard from "../core/ProductCard";
import StarIcon from "../StarIcon";
import { FaChevronRight } from "react-icons/fa";

interface ICardsSectionProps {
  data: {
    sectionTitle?: string;
    foodData: Array<{
      title: string;
      img: string;
      price: number;
      sale: number;
    }>;
  };
}

const CardsSection = ({
  data: { sectionTitle, foodData },
}: ICardsSectionProps) => {
  return (
    <Box paddingY={5}>
      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"} gap={3}>
            <StarIcon />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {sectionTitle}
            </Typography>
          </Box>
          {foodData && (
            <Button variant="text">
              Бүгдийг харах
              <FaChevronRight />
            </Button>
          )}
        </Stack>
        <Stack paddingY={5}>
          <Grid container spacing={5}>
            {foodData &&
              foodData.map((food, index) => (
                <Grid
                  item
                  xs={3}
                  key={index}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <ProductCard data={food} />
                </Grid>
              ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default CardsSection;
