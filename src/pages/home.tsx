import { Box, TextField, Typography } from "@mui/material"
import CheckboxLabels from "../components/Clickbox"

// TODO: Implement useContext to send generated message from checkbox component to text result component

function Home() {
  return (
    <section className="app-container">
      <div className="checkbox-container">
        <CheckboxLabels />
      </div>
      <Box
        sx={{
          width: "100%",
          height: "100%", // You can change this to any specific height
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Typography textAlign={"left"}>
          Result
        </Typography>
        <TextField
          variant="outlined"
          multiline
          minRows={20}
          maxRows={30}
          fullWidth
          sx={{
            height: "100%",
            "& .MuiInputBase-root": {
              height: "100%",
              alignItems: "start",
            },
          }}
        />
      </Box>
    </section>
  )
}

export default Home
