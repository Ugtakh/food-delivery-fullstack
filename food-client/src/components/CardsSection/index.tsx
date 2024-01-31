import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ProductCard from "../ProductCard";
import StarIcon from "../StarIcon";
import { FaChevronRight } from "react-icons/fa";

const CardsSection = () => {
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
              Хямдралтай
            </Typography>
          </Box>
          <Button variant="text">
            Бүгдийг харах
            <FaChevronRight />
          </Button>
        </Stack>
        <Stack paddingY={5}>
          <Grid container spacing={5}>
            <Grid item xs={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={3}>
              <ProductCard />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default CardsSection;
