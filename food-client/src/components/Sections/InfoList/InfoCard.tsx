import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IInfoProps {
  data: {
    id: number;
    name: string;
    icon: ReactNode;
    description: string;
  };
}

const InfoCard = ({ data }: IInfoProps) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card
        key={data.id}
        sx={{
          width: "100%",
          borderRadius: 3,
          boxShadow: 3,
          contain: "content",
          minWidth: "264px",
        }}
      >
        <CardContent>
          {data.icon}
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            {data.name}
          </Typography>
          <Typography>{data.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InfoCard;
