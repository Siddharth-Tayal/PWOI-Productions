import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AppAppBar from "./components/AppAppBar";
import ShuffleCards from "./components/ShuffleCards";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import getLPTheme from "./getLPTheme";
import DemoVideos from "./components/DemoVideos";
import Hero from "./components/Hero";
import Team from "./components/Team";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Error from "./components/Error/Error";
import EventPage from "./components/EventPage/EventPage";
import RecentShows from "./components/RecentShows";
import Aos from "aos";
function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: "background.default",
          "& .Mui-selected": {
            pointerEvents: "none",
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: "20px", mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage() {
  const [mode, setMode] = React.useState("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(false);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  React.useEffect(() => {
    Aos.init();
  });
  return (
    <div className=" font-mono">
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <BrowserRouter>
          <CssBaseline />
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
          <Routes>
            <Route
              path="/"
              element={
                <Box sx={{ bgcolor: "background.default" }}>
                  {" "}
                  {/* <Hero /> */}
                  <ShuffleCards />
                  <Divider />
                  <Features />
                  <Divider />
                  <RecentShows />
                  <Divider />
                  <Testimonials />
                  <Divider />
                  <Highlights />
                  <Divider />
                  <DemoVideos />
                  <Divider />
                  <Team />
                  <Divider />
                </Box>
              }
            />
            <Route path="/feature/:id" element={<EventPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
