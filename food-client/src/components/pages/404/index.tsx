import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const EmptyPage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "70vh",
          }}
        >
          <Image
            width={133}
            height={133}
            src={"/assets/404.png"}
            alt={"empty"}
          />
          <Typography color="text.secondary">
            Уучлаарай илэрц олдсонгүй.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default EmptyPage;
