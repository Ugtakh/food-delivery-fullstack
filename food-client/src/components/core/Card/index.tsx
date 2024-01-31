import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface AdventageCardProps {
  data: {
    icon: React.ReactNode;
    title: string;
    desc: string;
  };
}

export const AdventageCard = ({ data }: AdventageCardProps) => {
  return (
    <Card sx={{ width: "100%", maxWidth: "full" }}>
      <CardContent>
        <Box sx={{ color: "primary", backgroundColor: "primary" }}>
          {data.icon}
        </Box>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          {data.title}
        </Typography>
        <Typography color="text.secondary">{data.desc}</Typography>
      </CardContent>
    </Card>
  );
};
