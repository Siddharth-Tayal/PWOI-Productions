import * as React from "react";
import { Link as LinkRoute } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import { DesignServices, Language, Psychology } from "@mui/icons-material";

const items = [
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Government, Corporate and Private Events",

    url: "feature/gcp",
    description:
      "Parindeyy Wings of Imagination (PWOI) is a leading provider of comprehensive event management services, catering to government, corporate, and private events. ",
    imageLight:
      'url("https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z292dCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D")',
    imageDark:
      'url("https://plus.unsplash.com/premium_photo-1661353245572-5e41f6208de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaW8lMjB2aXN1YWxzfGVufDB8fDB8fHww")',
  },
  {
    icon: <Psychology />,
    title: "Film Production",
    url: "feature/film-production",
    description:
      "Parindeyy Wings of Imagination (PWOI) excels in film and song production, offering comprehensive services from conceptualization to distribution. ",
    imageLight:
      'url("https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpbG0lMjBwcm9kdWN0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D")',
    imageDark:
      'url("https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpbG0lMjBwcm9kdWN0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D")',
  },
  {
    icon: <DesignServices />,
    title: "School and College Functions",
    url: "feature/schools-colleges-functions",
    description:
      "Parindeyy Wings of Imagination (PWOI) excels in managing and organizing school and college functions, offering a full suite of services to ensure a seamless and memorable experience.",
    imageLight: `url("https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGolMjBuaWdodCUyMHB1cnBsZSUyMGxpZ2h0fGVufDB8fDB8fHww")`,
    imageDark: `url("https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGolMjBuaWdodCUyMHB1cnBsZSUyMGxpZ2h0fGVufDB8fDB8fHww")`,
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              component="h2"
              variant="h4"
              color="text.primary"
              data-aos="fade-right"
            >
              Services
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
              data-aos="fade-left"
            >
              Here is overview of the key Services provided by the Parindeyy
              Studios. Our main services includes Event planning and Organising
              , Film Production and School/College Function organising.
            </Typography>
          </div>
          <Grid
            container
            item
            data-aos="zoom-out"
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "primary.light" : "";
                    }
                    return selectedItemIndex === index ? "primary.light" : "";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : "";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor:
                    selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : "",
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            data-aos="flip-right"
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: "cover",
                backgroundPosition: "left",
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                data-aos="zoom-out"
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
                className=" line-clamp-4"
                data-aos="zoom-right"
              >
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                data-aos="zoom-out"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
              >
                <LinkRoute to={`${selectedFeature.url}`}>
                  <span>Learn more</span>
                  <ChevronRightRoundedIcon
                    fontSize="small"
                    sx={{ mt: "1px", ml: "2px" }}
                  />
                </LinkRoute>
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title, description, url }, index) => (
              <Card
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index
                        ? "primary.light"
                        : "grey.200";
                    }
                    return selectedItemIndex === index
                      ? "primary.dark"
                      : "grey.800";
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.300";
                        }
                        return selectedItemIndex === index
                          ? "primary.main"
                          : "grey.700";
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                    >
                      <LinkRoute to={`${url}`}>
                        <span>Read more</span>
                        <ChevronRightRoundedIcon
                          fontSize="small"
                          sx={{ mt: "1px", ml: "2px" }}
                        />
                      </LinkRoute>
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <Card
            data-aos="zoom-out"
            variant="outlined"
            className="flex items-center justify-center"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              className={` bg-[${items[selectedItemIndex].imageDark}] h-[90%] w-[80%] flex items-center justify-center `}
              sx={{
                m: "auto",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: items[selectedItemIndex].imageLight,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
