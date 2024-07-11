import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const userTestimonials = [
  {
    avatar: <Avatar alt="H" src="/static/images/avatar/6.jpg" />,
    name: "HIEA Awards",
    occupation: "Haryana",
    testimonial:
      "The HIEA Awards Show organized by Parindeyy Wings of Imagination (PWOI) in collaboration with Sambharye foundation was outstanding! The meticulous planning, dazzling decor, and flawless execution made the event unforgettable. The performances by Bollywood and Haryanvi actors and singers, especially by Vishwas Chauhan, were mesmerizing. Thank you, PWOI and Sambharye Foundation, for an incredible awards night!",
  },
  {
    avatar: <Avatar alt="A" src="/static/images/avatar/3.jpg" />,
    name: "Aryans Model School",
    occupation: "Charkhi Dadri",
    testimonial:
      "Aryan Model School highly recommends Parindeyy Wings of Imagination (PWOI) for their exceptional organization of our Annual Day function. Their meticulous planning, stunning decor, and flawless execution exceeded our expectations. The captivating performances, especially by Avinash Chauhan, made the event unforgettable. Thank you, PWOI, for a memorable experience!",
  },
  {
    avatar: <Avatar alt="RPS" src="/static/images/avatar/3.jpg" />,
    name: "RPS School",
    occupation: "Charkhi Dadri",
    testimonial:
      "RPS School enthusiastically recommends Parindeyy Wings of Imagination (PWOI) for their superb organization of our Annual Day event. Their meticulous planning, beautiful decor, and seamless execution were outstanding. The performances, particularly by Avinash Chauhan, were captivating and memorable. Thank you, PWOI, for an unforgettable experience!",
  },
  {
    avatar: <Avatar alt="D" src="/static/images/avatar/3.jpg" />,
    name: "Dusshera Event",
    occupation: "Charkhi Dadri",
    testimonial:
      "Parindeyy Wings of Imagination (PWOI) delivered an outstanding Dussehra event. The event's organization was impeccable, with beautiful decorations and flawless execution. Avinash Chauhan's captivating performances were a highlight. Thank you, PWOI, for creating such a memorable and enjoyable Dussehra celebration!",
  },
  {
    avatar: <Avatar alt="S" src="/static/images/avatar/4.jpg" />,
    name: "Sarvodya School of Science",
    occupation: "Charkhi Dadri",
    testimonial:
      "Sarvodaya School of Science highly praises Parindeyy Wings of Imagination (PWOI) for their exceptional organization of our Annual Day function. The event was impeccably planned, beautifully decorated, and flawlessly executed. Avinash Chauhan's performances were particularly impressive. Thank you, PWOI, for a remarkable and memorable event!",
  },
  {
    avatar: <Avatar alt="D" src="/static/images/avatar/5.jpg" />,
    name: "Dandiya Nights",
    occupation: "Charkhi Dadri",
    testimonial:
      "Parindeyy Wings of Imagination (PWOI) hosted an outstanding Dandiya Nights event. The organization was impeccable, with lively decorations and seamless execution. Avinash Chauhan's captivating performances were the highlight of the night. Thank you, PWOI, for creating such a memorable and enjoyable Dandiya celebration!",
  },
];

const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
          component="h2"
          variant="h4"
          color="text.primary"
          data-aos="zoom-in"
        >
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary" data-aos="zoom-out">
          See what our customers love about our Events. Discover how we excel in
          efficiency, and satisfaction. Join us for quality, expert team, and
          reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <p></p>
                {/* <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                /> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
