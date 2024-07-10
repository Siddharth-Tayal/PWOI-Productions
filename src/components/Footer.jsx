import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  WhatsApp,
  LocationCity,
} from "@mui/icons-material";
import { NavHashLink } from "react-router-hash-link";
import LOGO from "../assets/PwoiLogo.png";
import { MarkPlot } from "@mui/x-charts";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link to="/copyright">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const [submitted, setSubmitted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "7505ec6a-57f1-40f0-9d4e-374ec24dafd3");
    const object = Object.fromEntries(formData);
    if (object.email === "") {
      alert("Email is required field");
      return;
    }
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .catch((err) => {
        setErrorMessage(true);
        return;
      });
    if (res.success) {
      setSubmitted(true);
      console.log("Success", res);
      return;
    } else {
      setErrorMessage(true);
      return;
    }
  };
  return (
    <Container
      id="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ ml: "-15px" }}>
              <img src={LOGO} style={logoStyle} alt="PWOI Production" />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for updates and stay connected with
              us.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="outlined-basic"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  inputProps={{
                    autoComplete: "off",
                    "aria-label": "Enter your email address",
                  }}
                  required
                  name="email"
                  type="email"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color={
                    submitted ? "success" : errorMessage ? "error" : "primary"
                  }
                  sx={{ flexShrink: 0 }}
                >
                  {submitted
                    ? "Success"
                    : errorMessage
                    ? "Resend E-mail"
                    : "Subscribe"}
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          {" "}
          <Typography variant="body2" fontWeight={600}>
            Quick Links
          </Typography>
          <NavHashLink to={"/#recent-shows"} smoothScroll={true}>
            <Typography variant="body2" color="text.secondary">
              Recent Shows
            </Typography>{" "}
          </NavHashLink>{" "}
          <NavHashLink to={"/#highlights"} smoothScroll={true}>
            <Typography variant="body2" color="text.secondary">
              Highlights
            </Typography>{" "}
          </NavHashLink>{" "}
          <NavHashLink to={"/#testimonials"} smoothScroll={true}>
            <Typography variant="body2" color="text.secondary">
              Testimonial
            </Typography>{" "}
          </NavHashLink>{" "}
          <NavHashLink to={"/#highlights"} smoothScroll={true}>
            <Typography variant="body2" color="text.secondary">
              Highlights
            </Typography>{" "}
          </NavHashLink>{" "}
          <NavHashLink to={"/#team"} smoothScroll={true}>
            <Typography variant="body2" color="text.secondary">
              Team
            </Typography>{" "}
          </NavHashLink>{" "}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Services
          </Typography>
          <Link color="text.secondary" to="/feature/gcp">
            <Typography variant="body2" color="text.secondary">
              Events Org.
            </Typography>{" "}
          </Link>
          <Link color="text.secondary" to="/feature/film-production">
            <Typography variant="body2" color="text.secondary">
              Film Production
            </Typography>{" "}
          </Link>
          <Link color="text.secondary" to="/feature/schools-colleges-functions">
            <Typography variant="body2" color="text.secondary">
              School and College
            </Typography>{" "}
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
          direction: "column",
        }}
      >
        {/* <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div> */}
        <div className=" flex flex-col-reverse gap-8 md:flex-row w-full items-center justify-between">
          <div className="flex items-start justify-start w-[80vw] sm:w-[60vw] text-center md:text-start md:max-w-[30vw]">
            {" "}
            <div>
              <div className=" text-center md:text-start ">
                <Typography variant="body1" color="text.primary">
                  Office Location:
                </Typography>
              </div>
              <Typography variant="body1" color="text.secondary">
                Kathmandi In Front Of Food Supply Office Charkhi Dadri,
                Kathmandi, Charkhi, Charkhi Dadri - 127306 (Charkhi Dadri)
              </Typography>
            </div>
          </div>
          <div>
            <div className=" text-center md:text-start">
              <Typography variant="body1" pl={1} color="text.primary">
                Social Links:
              </Typography>
            </div>
            <Stack
              direction="row"
              justifyContent="left"
              spacing={1}
              useFlexGap
              sx={{
                color: "text.secondary",
              }}
            >
              <IconButton
                color="inherit"
                href="https://www.youtube.com/@parindeyyentertainment2314/videos"
                aria-label="YouTube"
                sx={{ alignSelf: "center" }}
              >
                <YouTube />
              </IconButton>{" "}
              <IconButton
                color="inherit"
                href="https://www.facebook.com/profile.php?id=100086499339260&mibextid=qi2Omg&rdid=vda7O9KMMqeGr0Sn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FrKTqCyo3j6rVvtaw%2F%3Fmibextid%3Dqi2Omg"
                aria-label="Facebook"
                sx={{ alignSelf: "center" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://api.whatsapp.com/send?phone=%2B919728540791&context=ARDe1a4Aivxoly-9UCe1PApPlpePVVN2XlZTN6U_L82yAJcMM-NYvpP7XSsXuoAjsZ43u3TDUdWIapJYCgE0Rbb0xj5IRtZEEXU_6-xvzh09XJHfFzGCxjWM0sim5sVsqbdFa36jh-a4RD338N9cyOA98A&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR1B_D62ns_A6bisBIV5pWKQNBbIDoaxfzrKCka_9a6MFb6u1bh7VEMdTwU_aem_gl3Uvqpwog3dTHE5XP21Cg"
                aria-label="Whatsapp"
                sx={{ alignSelf: "center" }}
              >
                <WhatsApp />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/parindeyydance0715/"
                aria-label="Instagram"
                sx={{ alignSelf: "center" }}
              >
                <Instagram />
              </IconButton>
            </Stack>
          </div>
        </div>
      </Box>
    </Container>
  );
}
