import { Box, Container, Grid, Stack } from "@mui/material";
import { AdventageCard } from "..";
import { IoMdBook, IoMdTime } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";

type Adventage = {
  icon: string;
  title: string;
  desc: string;
};

const adventages: Adventage[] = [
  {
    icon: "IoMdBook",
    title: "Хүргэлтийн төлөв хянах",
    desc: "Захиалга бэлтгэлийн явц хянах",
  },
  {
    icon: "IoMdTime",
    title: "Шуурхай хүргэлт",
    desc: "Захиалга бэлтгэлийн явц хянах",
  },
  {
    icon: "IoMdTime",
    title: "Эрүүл, баталгаат орц",
    desc: "Захиалга бэлтгэлийн явц хянах",
  },
  {
    icon: "IoMdBook",
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
              <Grid
                item
                xs={3}
                key={index}
                display={"flex"}
                justifyContent={"center"}
              >
                <AdventageCard
                  data={{
                    icon:
                      adventage.icon === "IoMdBook" ? (
                        <IoMdBook size={24} color="#18BA51" />
                      ) : adventage.icon === "IoMdTime" ? (
                        <IoMdTime size={24} color="#18BA51" />
                      ) : null,
                    title: adventage.title,
                    desc: adventage.desc,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default AdventagesSection;
