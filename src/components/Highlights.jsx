import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import Video from "../assets/Bg-video.mp4";
import Image from "../assets/BgImageHighlights.jpg";
const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Meticulous Attention to Detail",
    description:
      "PWOI ensures every aspect of your event is handled with the utmost care, guaranteeing a seamless experience.",
    url: "",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Comprehensive Services",
    description:
      "We offer a full range of services including catering, tenting, lighting, and decor to cover all your event needs.",
    url: "",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Creative Solutions",
    description:
      "Our innovative and customized solutions bring your vision to life, creating unique and memorable events.",
    url: "",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Expertise in Diverse Events",
    description:
      "PWOI specializes in government, corporate, private events, and educational functions, providing tailored services for each.",
    url: "",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Commitment to Excellence",
    description:
      "Our dedication to quality and excellence is evident in every detail, ensuring flawless execution of your event.",
    url: "",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "State-of-the-Art Equipment",
    description:
      "We use cutting-edge lighting and sound solutions to enhance the overall experience and create the perfect ambiance.",
    url: "",
  },
  // {
  //   icon: <SettingsSuggestRoundedIcon />,
  //   title: "Innovative Event Planning",
  //   description:
  //     "PWOI’s creative approach transforms any venue into a breathtaking setting, making your event extraordinary.",
  //   url: "",
  // },
  // {
  //   icon: <ConstructionRoundedIcon />,
  //   title: "Lasting Impressions",
  //   description:
  //     "Our thorough planning and execution leave a lasting impression on guests, making your event unforgettable.",
  //   url: "",
  // },
  // {
  //   icon: <ThumbUpAltRoundedIcon />,
  //   title: "Experienced Team",
  //   description:
  //     "Our team of professionals works closely with clients to understand their vision and deliver exceptional results.",
  //   url: "",
  // },
];

export default function Highlights() {
  return (
    <div className="relative h-auto overflow-hidden">
      {/* <video
        // autoPlay
        // loop
        muted
        controls={false}
        className=" h-screen w-screen object-cover
      "
      >
        <source src={Video} type="video/mp4" />
      </video> */}
      <img
        className=" h-[100%] w-screen blur-sm absolute inset-0"
        src={Image}
      />{" "}
      <div className=" block inset-0">
        <Box
          id="highlights"
          sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            color: "white",
          }}
        >
          <Container
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: 3, sm: 6 },
            }}
          >
            <Box
              sx={{
                width: { sm: "100%", md: "60%" },
                textAlign: { sm: "left", md: "center" },
              }}
            >
              <Typography
                color={"white"}
                component="h2"
                variant="h4"
                data-aos="zoom-out"
              >
                Highlights
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "grey.200" }}
                data-aos="zoom-in"
              >
                Parindeyy Wings of Imagination (PWOI) stands out for its
                meticulous attention to detail, creative solutions, and
                unwavering commitment to excellence, ensuring every event is a
                seamless and extraordinary experience.
              </Typography>
            </Box>
            <Grid container spacing={2.5}>
              {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <div
                    aos-duration="2000"
                    className=" cursor-pointer"
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  >
                    <Stack
                      direction="column"
                      color="inherit"
                      component={Card}
                      spacing={1}
                      useFlexGap
                      sx={{
                        p: 3,
                        height: "100%",
                        border: "2px solid",
                        borderColor: "white",
                        background: "transparent",
                        bgcolor: "black",
                      }}
                      className=" bg-blue-600 hover:bg-gray-700"
                    >
                      <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                      <div>
                        <Typography fontWeight="medium" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "grey.400" }}>
                          {item.description}
                        </Typography>
                      </div>
                    </Stack>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}
