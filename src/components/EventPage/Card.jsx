import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ img, title, text, dark }) {
  console.log(dark);
  return (
    // <div className={` ${dark ? "bg-black" : "bg-white"}`}>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className=" text-justify"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div className=" line-clamp-5">{text} </div>
        </Typography>
      </CardContent>
    </Card>
    // </div>
  );
}
