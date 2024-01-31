import { Box, Container, Grid, Stack } from "@mui/material";
import { AdventageCard } from "..";
import { IoMdBook, IoMdTime } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";

const adventages = [
  {
    icon: <IoMdBook size={24} color="#18BA51" />,
    title: "Хүргэлтийн төлөв хянах",
    desc: "Захиалга бэлтгэлийн явц хянах",
  },
  {
    icon: <IoMdTime size={24} color="#18BA51" />,
    title: "Шуурхай хүргэлт",
    desc: "Захиалга бэлтгэлийн явц хянах",
  },
  {
    icon: <IoFastFoodOutline size={24} color="#18BA51" />,
    title: "Эрүүл, баталгаат орц",
    desc: "Захиалга бэлтгэлийн явц хянах",
  },
  {
    icon: <IoMdBook size={24} color="#18BA51" />,
    title: "Хоолны өргөн сонголт",
    desc: "Захиалга бэлтгэлийн явц хянах",
  },
];

const AdventagesSection = () => {
  return (
    <Box paddingY={5}>
      <Container maxWidth="xl">
        <Stack paddingY={5}>
          <Grid container spacing={5}>
            {adventages.map((adventage, index) => (
              <Grid item xs={3} key={index}>
                <AdventageCard data={adventage} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default AdventagesSection;
