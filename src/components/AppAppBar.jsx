import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import { Link, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import LOGO from "../assets/PwoiLogo.png";
function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.8)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <NavHashLink
              to={"/#home"}
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "px",
                px: 0,
              }}
            >
              <img
                src={LOGO}
                className=" h-[80px] ml-1 w-[80px] flex items-center justify-center text-black cursor-pointer rounded-full mr-[10px]"
                alt="PWOI"
              />
            </NavHashLink>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {" "}
              <Box sx={{ py: "6px", px: "12px" }}>
                <NavHashLink to={"/#features"} smoothScroll={true}>
                  <Typography variant="body2" color="text.primary">
                    Services
                  </Typography>{" "}
                </NavHashLink>{" "}
              </Box>
              <Box sx={{ py: "6px", px: "12px" }}>
                <NavHashLink to={"/#recent-shows"} smoothScroll={true}>
                  <Typography variant="body2" color="text.primary">
                    Recent Shows
                  </Typography>{" "}
                </NavHashLink>{" "}
              </Box>
              <Box sx={{ py: "6px", px: "12px" }}>
                <NavHashLink to={"/#testimonials"} smoothScroll={true}>
                  <Typography variant="body2" color="text.primary">
                    Testimonials
                  </Typography>{" "}
                </NavHashLink>{" "}
              </Box>
              <Box sx={{ py: "6px", px: "12px" }}>
                <NavHashLink to={"/#highlights"} smoothScroll={true}>
                  <Typography variant="body2" color="text.primary">
                    Highlights
                  </Typography>{" "}
                </NavHashLink>{" "}
              </Box>
              <Box sx={{ py: "6px", px: "12px" }}>
                <NavHashLink to={"/#watch-now"} smoothScroll={true}>
                  <Typography variant="body2" color="text.primary">
                    Watch-Now
                  </Typography>{" "}
                </NavHashLink>{" "}
              </Box>{" "}
              <Box sx={{ py: "6px", px: "12px" }}>
                <NavHashLink to={"/#team"} smoothScroll={true}>
                  <Typography variant="body2" color="text.primary">
                    Team
                  </Typography>{" "}
                </NavHashLink>{" "}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
              >
                <NavHashLink to={"/#footer"} smoothScroll={true}>
                  Contact{" "}
                </NavHashLink>{" "}
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    {/* <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    /> */}
                  </Box>{" "}
                  <div className="flex flex-col items-start justify-start pl-4 gap-4 pb-4 pt-4">
                    <NavHashLink to={"/#features"} smoothScroll={true}>
                      Services
                    </NavHashLink>{" "}
                    <NavHashLink to={"/#recent-shows"} smoothScroll={true}>
                      Recent Shows
                    </NavHashLink>{" "}
                    <NavHashLink to={"/#testimonials"} smoothScroll={true}>
                      Testimonials
                    </NavHashLink>{" "}
                    <NavHashLink to={"/#highlights"} smoothScroll={true}>
                      Highlights
                    </NavHashLink>{" "}
                    <NavHashLink to={"/#watch-now"} smoothScroll={true}>
                      Watch-Now
                    </NavHashLink>{" "}
                    <NavHashLink to={"/#team"} smoothScroll={true}>
                      Team
                    </NavHashLink>{" "}
                    <Link to={"/feature/gcp"} smoothScroll={true}>
                      GCP Events
                    </Link>{" "}
                    <Link to={"/feature/film-production"} smoothScroll={true}>
                      Film Production
                    </Link>{" "}
                    <Link
                      to={"/feature/schools-colleges-functions"}
                      smoothScroll={true}
                    >
                      School-College Functions
                    </Link>{" "}
                  </div>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: "100%" }}
                    >
                      <NavHashLink
                        to={"/#footer"}
                        className={" w-full"}
                        smoothScroll={true}
                      >
                        Contact
                      </NavHashLink>{" "}
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
