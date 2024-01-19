import { Grid, Button, Typography } from "@mui/material";
import { Header } from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">Welcome Mui Framework</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" color="secondary">
            Click
          </Button>
        </Grid>
      </Grid>
    </main>
  );
}
