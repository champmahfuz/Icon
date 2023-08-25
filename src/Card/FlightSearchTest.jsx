import { Paper } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const FlightSearchTest = () => {
  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px", display: "inline-block" }}>
        First Paper Content
      </Paper>
      {/* <Icon fontSize="large" style={{ margin: "0 10px" }}>
        add_circle
      </Icon> */}

      {/* <Icon fontSize="large">add_circle</Icon> */}

      <ArrowCircleRightRoundedIcon className="logo" />

      <Paper elevation={3} style={{ padding: "20px", display: "inline-block" }}>
        Second Paper Content
      </Paper>
    </div>
  );
};

export default FlightSearchTest;
