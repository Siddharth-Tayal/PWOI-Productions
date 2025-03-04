import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
function DemoVideos() {
  return (
    <Container
      id="watch-now"
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
          data-aos="fade-right"
        >
          Watch Now
        </Typography>
        <Typography variant="body1" color="text.secondary" data-aos="fade-left">
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[50px] pt-[50px]">
          <iframe
            data-aos="fade-right"
            width={"350"}
            height="465"
            src="https://www.youtube.com/embed/1f5JNZ3DMX8?si=5q3gGml0wpR83G6c"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="  md:flex hidden flex-col items-center justify-center gap-[15px]">
            <iframe
              data-aos="fade-down"
              width={"350"}
              height="225"
              src="https://www.youtube.com/embed/7bTgPDq-yiM?si=Ty8irED4BEPEiESJ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              width="350"
              data-aos="fade-up"
              height="225"
              src="https://www.youtube.com/embed/dCX292Fc5UM?si=1cBZoZcdjRXIBNhu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>{" "}
          <div className=" flex flex-wrap  md:hidden items-center justify-center gap-[15px]">
            <iframe
              width={"350"}
              height="225"
              data-aos="fade-left"
              src="https://www.youtube.com/embed/7bTgPDq-yiM?si=Ty8irED4BEPEiESJ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              data-aos="fade-right"
              width="350"
              height="225"
              src="https://www.youtube.com/embed/dCX292Fc5UM?si=1cBZoZcdjRXIBNhu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default DemoVideos;
