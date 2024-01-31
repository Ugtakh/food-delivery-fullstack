import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
} from "@mui/material";
import {
  Schedule,
  ImportContactsOutlined,
  RiceBowl,
  Key,
} from "@mui/icons-material";
import Image from "next/image";
import InfoCard from "./InfoCard";

const infoCards = [
  {
    id: 9,
    icon: <ImportContactsOutlined sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Хүргэлтийн төлөв хянах",
    description: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    id: 10,
    icon: <Schedule sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Шуурхай хүргэлт",
    description: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    id: 11,
    icon: <RiceBowl sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Эрүүл, баталгаат орц",
    description: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    id: 12,
    icon: <ImportContactsOutlined sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Хоолны өргөн сонголт",
    description: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

const InfoList = () => {
  return (
    <Container>
      <Grid container spacing={12}>
        {infoCards.map((card) => (
          <InfoCard key={card.id} data={card} />
        ))}
      </Grid>
    </Container>
  );
};

export default InfoList;
