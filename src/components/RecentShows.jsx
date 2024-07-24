import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Marquee from "react-fast-marquee";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
export default function RecentShows() {
  return (
    <Box
      id="recent-shows"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
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
            component="h2"
            variant="h4"
            color={""}
            data-aos="fade-down"
          >
            Recent Shows
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "grey.400" }}
            data-aos="fade-left"
          >
            Our experienced team brings a wealth of creativity and expertise to
            every event , ensuring a unique and memorable experience tailored to
            your needs.
          </Typography>
        </Box>
        <Marquee pauseOnHover={true}>
          <Stack
            direction="column"
            color="inherit"
            component={Card}
            spacing={1}
            data-aos="fade-up"
            useFlexGap
            sx={{
              py: 2,
              px: 2,
              height: "100%",
              border: "1px solid",
              borderColor: "grey.800",
              background: "transparent",
              backgroundColor: "grey.900",
            }}
            className=" hover:bg-gray-700 w-[350px] ml-[15px] mr-[15px]"
          >
            <Box>
              {" "}
              <img
                className=" h-[200px] w-full"
                src="https://i.ytimg.com/vi/JaHT0tWjJJ4/maxresdefault.jpg"
              />{" "}
              <div className=" flex items-center justify-between">
                <Typography fontWeight="bold" gutterBottom>
                  HIEA Awards Shows
                </Typography>{" "}
                <Typography fontWeight="medium" gutterBottom>
                  2023
                </Typography>
              </div>
            </Box>
            <div>
              <Typography
                variant="body2"
                sx={{ color: "grey.400" }}
                className=" text-justify"
              >
                Team PWOI organised a very successfully award shows called
                "HEIA" last year 2023 with collaboration in SAMBHARYE Foundation
                , all production or managment is done by both of us and invited
                Celebrites from BOLLYWOOD and HARYANVI Industry for the event.
              </Typography>
            </div>
          </Stack>
          <Stack
            direction="column"
            color="inherit"
            component={Card}
            spacing={1}
            useFlexGap
            sx={{
              py: 2,
              px: 2,
              height: "100%",
              border: "1px solid",
              borderColor: "grey.800",
              background: "transparent",
              backgroundColor: "grey.900",
            }}
            className=" hover:bg-gray-700 w-[350px] ml-[15px] mr-[15px]"
          >
            <Box>
              {" "}
              <img
                className=" h-[200px] w-full"
                src="https://i.ytimg.com/vi/JaHT0tWjJJ4/maxresdefault.jpg"
              />{" "}
              <div className=" flex items-center justify-between">
                <Typography fontWeight="bold" gutterBottom>
                  DUSSHERA
                </Typography>{" "}
                <Typography fontWeight="medium" gutterBottom>
                  2023
                </Typography>
              </div>
            </Box>
            <div>
              <Typography
                variant="body2"
                sx={{ color: "grey.400" }}
                className=" text-justify"
              >
                We had organized a mega event of DUSSEHRA this year at Aryan
                Model School, Charkhi Dadri. Its production and direction was
                from our team All types of activities took place in it like
                drama, dance, singing performances are under the direction of
                our team.
              </Typography>
            </div>
          </Stack>
          <Stack
            direction="column"
            color="inherit"
            component={Card}
            spacing={1}
            useFlexGap
            sx={{
              py: 2,
              px: 2,
              height: "100%",
              border: "1px solid",
              borderColor: "grey.800",
              background: "transparent",
              backgroundColor: "grey.900",
            }}
            className=" hover:bg-gray-700 w-[350px] ml-[15px] mr-[15px]"
          >
            <Box>
              {" "}
              <img
                className=" h-[200px] w-full"
                src="https://i.ytimg.com/vi/JaHT0tWjJJ4/maxresdefault.jpg"
              />{" "}
              <div className=" flex items-center justify-between">
                <Typography fontWeight="bold" gutterBottom>
                  DANDIYA NIGHTS
                </Typography>{" "}
                <Typography fontWeight="medium" gutterBottom>
                  2023
                </Typography>
              </div>
            </Box>
            <div>
              <Typography
                variant="body2"
                sx={{ color: "grey.400" }}
                className=" text-justify"
              >
                Haryana's biggest Dandiya event was organised last year in
                Charkhi Dadri, which was completely housefull. Recent years ,
                also our event was completely housefull, we invited well-known
                artists , singers and dancers in this event.The whole managment
                is conducted by team PWOI.
              </Typography>
            </div>
          </Stack>
        </Marquee>
      </Container>
    </Box>
  );
}
