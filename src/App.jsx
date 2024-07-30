import * as React from "react";
import { Suspense, lazy } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "./components/AppAppBar";
import ShuffleCards from "./components/ShuffleCards";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Team from "./components/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import EventPage from "./components/EventPage/EventPage";
import RecentShows from "./components/RecentShows";
import Aos from "aos";
const DemoVideos = lazy(() => import("./components/DemoVideos"));

export default function LandingPage() {
  React.useEffect(() => {
    Aos.init();
  });
  return (
    <div className=" font-mono overflow-hidden">
      <BrowserRouter>
        <CssBaseline />
        <AppAppBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                {
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <DemoVideos />
                  </Suspense>
                }
                <Divider />
                <Team />
              </>
            }
          />
          <Route path="/feature/:id" element={<EventPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
