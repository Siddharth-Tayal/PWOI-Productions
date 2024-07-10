import * as React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";

export default function Hero() {
  const imgGallery = [
    "https://scontent.fixc8-3.fna.fbcdn.net/v/t39.30808-6/340493515_754314172998715_2875583965403777976_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wd2V3Px88n0Q7kNvgH9DkPS&_nc_ht=scontent.fixc8-3.fna&oh=00_AYDNp2WVjYWoV37WsCab2FwhmPx0ipBut_mhlUD0OFRBOg&oe=66917043",
    "https://scontent.fixc8-2.fna.fbcdn.net/v/t39.30808-6/340850466_647178040552393_1542722046604605622_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SluDlE68WZ4Q7kNvgGf5jAg&_nc_ht=scontent.fixc8-2.fna&oh=00_AYBddxkKALpoYPpDx9eFekrKhI0jBKpHVRsxUcf3Heks3w&oe=6692EC2C",
    "https://scontent.fixc8-2.fna.fbcdn.net/v/t39.30808-6/311804037_110170078542970_7268188369955630843_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=9Mb1_7u2jnkQ7kNvgEaaSpf&_nc_ht=scontent.fixc8-2.fna&oh=00_AYCzCl_zVT0d5jcL5j7bK0nBopNFcpBhk65U-qlbQBDpVg&oe=6692ED3B",
    "https://scontent.fixc8-3.fna.fbcdn.net/v/t39.30808-6/340520152_3388299211410574_5547759540453076686_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KXi49Hwjt_wQ7kNvgHMbEmv&_nc_ht=scontent.fixc8-3.fna&oh=00_AYC5wI-yi50DYyniDE1G-p9FqSf83KWGif2G8QDgghvUbg&oe=669194ED",
  ];
  return (
    <Box
      id="hero"
      sx={{
        width: "100vw",
        backgroundRepeat: "no-repeat",
        height: "100%",
        position: "relative",
      }}
    >
      <Carousel
        className="h-fit w-screen"
        interval={3000}
        stopAutoPlayOnHover={false}
        animation="fade"
        swipe="true"
        indicators={false}
      >
        {imgGallery.map((item, i) => (
          <img
            className=" w-screen h-[50vh] md:h-screen object-cover object-center mx-auto bg-black"
            key={i}
            src={item}
          />
        ))}
      </Carousel>
    </Box>
  );
}
