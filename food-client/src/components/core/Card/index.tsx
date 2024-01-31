import { Box, Card, CardContent, Typography } from "@mui/material";

interface IFoodProps {
  data: {
    icon: string;
    title: number;
    desc: string;
  };
}

export const AdventageCard = ({ data }: IFoodProps) => {
  return (
    <Card sx={{ maxWidth: 282 }}>
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
