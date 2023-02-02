import * as React from "react";
import { _colors } from "./_colors";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Uifryminilogo from "./Uifry Images/Uifry mini logo.png";
import UifryPremium from "./Uifry Images/UifryPremium.png";
import UifryVisa from "./Uifry Images/UifryVisa.png";
import SamiSecond from "./Uifry Images/SamiSecond.png";
import firstbudget from "./Uifry Images/firstbudget.png";
import secondbudget from "./Uifry Images/secondbudget.png";
import thirdbudget from "./Uifry Images/thirdbudget.png";
import SamiThird from "./Uifry Images/SamiThird.png";
import SamiFourth from "./Uifry Images/SamiFourth.png";
import FullyIcon from "./Uifry Images/FullyIcon.png";
import Usersicon from "./Uifry Images/usersicon.png";
import Usersminiicon from "./Uifry Images/usersminiicon.png";
import SamiSeventh from "./Uifry Images/SamiSeventh.png";
import Notifications from "./Uifry Images/Notifications.png";
import { CardMedia, Grid, Stack } from "@mui/material";
import {
  FirstSection,
  FirstSectionHeader,
  FirstSectionBody,
  SecondSection,
  SecondSectionTitle,
  SecondSectionHeader,
  BudgetIntervals,
  SectionSubHeader,
  ThirdSection,
  SectionSubTitle,
  FourthSection,
  FifthSection,
  SixthSection,
  SixthSectionPaper,
  SeventhSection,
} from "./UifryHomePageStyles";

const pages = ["Home", "About Us", "Pricing", "Features"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));
function UifryAppBar() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "white", boxShadow: "none" }}
      >
        <Toolbar disableGutters>
          <img src={Uifryminilogo} />
          <Typography
            className="font-face-gm"
            variant="h5"
            noWrap
            component="a"
            href="/"
            color={_colors.black}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },

              fontWeight: 400,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            uifry
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", sm: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", sm: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            color={_colors.black}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            UIFRY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", color: "black" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            disableElevation
          >
            Download
          </Button>
        </Toolbar>
      </AppBar>
      <FirstSection>
        <Grid item marginTop={16}>
          <FirstSectionHeader>
            make the best financial decisions
          </FirstSectionHeader>
          <FirstSectionBody>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </FirstSectionBody>
          <Grid sx={{ display: "flex", marginTop: "24px " }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "black", marginRight: "40px" }}
              disableElevation
            >
              Get Started
            </Button>

            <Button
              variant="text"
              style={{ backgroundColor: "white", color: "black" }}
              disableElevation
            >
              Wacth Video
            </Button>
          </Grid>
          <Grid sx={{ marginTop: "24px " }}>
            <img src={UifryPremium} />
          </Grid>
        </Grid>
        <Grid item>
          <img src={UifryVisa} />
        </Grid>
      </FirstSection>
      <SecondSection>
        <Grid item>
          <img src={SamiSecond} />
        </Grid>
        <Grid item>
          <SecondSectionTitle>features</SecondSectionTitle>
          <SecondSectionHeader>uifry premium</SecondSectionHeader>
          <Grid>
            <SectionSubHeader>
              <img src={firstbudget} />
              <BudgetIntervals>budgeting intervals</BudgetIntervals>
            </SectionSubHeader>
            <FirstSectionBody sx={{ marginTop: "12px " }}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </FirstSectionBody>
          </Grid>
          <Grid>
            <SectionSubHeader>
              <img src={secondbudget} />
              <BudgetIntervals>budgeting intervals</BudgetIntervals>
            </SectionSubHeader>
            <FirstSectionBody sx={{ marginTop: "12px " }}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </FirstSectionBody>
          </Grid>
          <Grid>
            <SectionSubHeader>
              <img src={thirdbudget} />
              <BudgetIntervals>budgeting intervals</BudgetIntervals>
            </SectionSubHeader>
            <FirstSectionBody sx={{ marginTop: "12px " }}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </FirstSectionBody>
          </Grid>
        </Grid>
      </SecondSection>
      <ThirdSection>
        <Grid item>
          <SecondSectionTitle>advantages</SecondSectionTitle>
          <SecondSectionHeader>why choose uifry?</SecondSectionHeader>
          <Grid>
            <SectionSubHeader
              sx={{ width: "336px", height: "48px", alignItems: "center" }}
            >
              <img src={Notifications} />
              <SectionSubTitle>clever notifications</SectionSubTitle>
            </SectionSubHeader>
            <FirstSectionBody sx={{ marginTop: "12px " }}>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </FirstSectionBody>
          </Grid>
        </Grid>
        <Grid item>
          <img src={SamiThird} />
        </Grid>
      </ThirdSection>
      <FourthSection>
        <Grid item>
          <img src={SamiFourth} />
        </Grid>
        <Grid item>
          <Grid sx={{ marginTop: "301px" }}>
            <SectionSubHeader
              sx={{ width: "336px", height: "48px", alignItems: "center" }}
            >
              <img src={FullyIcon} />
              <SectionSubTitle>fully customizable</SectionSubTitle>
            </SectionSubHeader>
            <FirstSectionBody sx={{ marginTop: "12px " }}>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </FirstSectionBody>
          </Grid>
        </Grid>
      </FourthSection>

      <FifthSection>
        <Stack sx={{ alignItems: "center" }}>
          <SecondSectionTitle sx={{ marginTop: "0px", color: _colors.black }}>
            testimonial
          </SecondSectionTitle>
          <SecondSectionHeader sx={{ textAlign: "center" }}>
            what our users say about us?
          </SecondSectionHeader>
        </Stack>
        <Grid sx={{ display: "flex" }}>
          <Grid item>
            <img src={Usersicon} />
          </Grid>
          <Grid item>
            <Grid sx={{ marginTop: "125px" }}>
              <SectionSubTitle sx={{ width: "442px" }}>
                the best financial accounting app ever!
              </SectionSubTitle>

              <FirstSectionBody sx={{ marginTop: "12px", width: "442px" }}>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </FirstSectionBody>
              <Stack sx={{ marginTop: "24px" }}>
                <img src={Usersminiicon} width="192px" />
                <SecondSectionTitle
                  sx={{ marginTop: "24px", color: _colors.black }}
                >
                  Nick Jonas
                </SecondSectionTitle>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </FifthSection>
      <SixthSection>
        <Stack sx={{ alignItems: "left" }}>
          <SecondSectionTitle
            sx={{ marginTop: "0px", color: _colors.lightRed }}
          >
            faq
          </SecondSectionTitle>
          <SecondSectionHeader sx={{ textAlign: "left" }}>
            Frequently asked questions
          </SecondSectionHeader>
          <Grid sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <Grid item>
              <SixthSectionPaper elevation="0">
                <SectionSubTitle sx={{ width: "442px" }}>
                  the best financial accounting app ever!
                </SectionSubTitle>
                <FirstSectionBody sx={{ color: _colors.white, width : "466px" }}>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </FirstSectionBody>
              </SixthSectionPaper>
              <SixthSectionPaper
                elevation="0"
                sx={{ backgroundColor: _colors.white }}
              >
                <SectionSubTitle sx={{ width: "442px" }}>
                  the best financial accounting app ever!
                </SectionSubTitle>
                <FirstSectionBody sx={{ color: _colors.black, width : "466px" }}>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </FirstSectionBody>
              </SixthSectionPaper>
              <SixthSectionPaper elevation="0">
              <Stack  >
                <SectionSubTitle sx={{ width: "442px" }}>
                  the best financial accounting app ever!
                </SectionSubTitle>
                <FirstSectionBody sx={{ color: _colors.white, width : "466px" }}>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </FirstSectionBody>
                </Stack>
              </SixthSectionPaper>
            </Grid>
            <Grid item>
              <SixthSectionPaper
                elevation="0"
                sx={{ backgroundColor: _colors.white,}}
              >
              <Stack   >
                <SectionSubTitle sx={{ width: "442px" }}>
                  the best financial accounting app ever!
                </SectionSubTitle>
                <FirstSectionBody sx={{ color: _colors.black, width : "466px" }}>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </FirstSectionBody>
                </Stack>
              </SixthSectionPaper>
              <SixthSectionPaper
                elevation="0"
                sx={{ backgroundColor: _colors.lightRed,}}
              >
              <Stack   >
                <SectionSubTitle sx={{ width: "442px" }}>
                  the best financial accounting app ever!
                </SectionSubTitle>
                <FirstSectionBody sx={{ color: _colors.black, mT: "8px", width : "466px"}}>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </FirstSectionBody>
                </Stack>
              </SixthSectionPaper>
              <SixthSectionPaper
              elevation="0"
              sx={{ backgroundColor: _colors.white,}}
            >
            <Stack   >
              <SectionSubTitle sx={{ width: "442px" }}>
                the best financial accounting app ever!
              </SectionSubTitle>
              <FirstSectionBody sx={{ color: _colors.black, width : "466px" }}>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </FirstSectionBody>
              </Stack>
            </SixthSectionPaper>
            </Grid>
          </Grid>
        </Stack>
      </SixthSection>
<SeventhSection>
<Grid item marginTop={16}>
          <FirstSectionHeader sx={{ color: _colors.white}}>
          ready to get started?
          </FirstSectionHeader>
          <FirstSectionBody sx={{ color: _colors.white}} >
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </FirstSectionBody>
            <Button
              variant="contained"
              style={{ backgroundColor: "white", marginRight: "40px", color: _colors.black }}
              disableElevation
            >
              Download
            </Button>
        </Grid>
        <Grid item>
          <img src={SamiSeventh} />
        </Grid>
</SeventhSection>

    </Box>
  );
}
export default UifryAppBar;
