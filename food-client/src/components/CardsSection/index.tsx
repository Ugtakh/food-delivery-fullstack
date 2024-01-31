import { Box, Container, Stack } from "@mui/material";
import ProductCard from "../ProductCard";

const CardsSection = () => {
  return (
    <Box >
      <Container>
        <Stack paddingY={5}>
          <ProductCard />
        </Stack>
      </Container>
    </Box>
  );
};

export default CardsSection;
