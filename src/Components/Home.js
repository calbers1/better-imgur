import { Button, Card, Grid, Paper } from "@mui/material";

export const Home = () => {
  return (
    <div>
      <Paper
        elevation={1}
        sx={{
          width: "98.5vw",
          height: "98vh",
          backgroundColor: "slategray",
          margin: ".5vw",
          marginTop: "1vh",
        }}
      >
        <Paper elevation={3} sx={{ marginBottom: "2vw" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" color="warning">
                Left
              </Button>
            </Grid>

            <Grid item xs={8}>
              <Card
                sx={{
                  display: "flex",
                  height: "60vw",
                  width: "60vw",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>Center</div>
              </Card>
            </Grid>

            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="warning"
                sx={{ margin: "auto" }}
              >
                Right
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </div>
  );
};
