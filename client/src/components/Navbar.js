import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Container>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/`}
                >
                  PERN Stack
                </Link>
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/tasks/new");
                }}
              >
                New Task
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
