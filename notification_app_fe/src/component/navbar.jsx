import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Campus Notifications
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          All Notifications
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/priority"
        >
          Priority Inbox
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;