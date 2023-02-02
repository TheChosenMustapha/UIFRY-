import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { _colors } from "./_colors";
import { Button, Paper } from "@mui/material";

export const FirstSection = styled(Grid)((props) => ({
  display: "flex",
  minHeight: "120vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  [props.theme.breakpoints.down("sm")]: {
    minHeight: "476px",
  },
}));

export const FirstSectionHeader = styled(Typography)((props) => ({
  fontWeight: "700px",
  lineHeight: "64px",
  fontFamily: "ClashDisplay-Bold",
  fontSize: "64px",
  letterSpacing: "0em",
  textAlign: "left",
  textTransform: "capitalize",
  width: "618px",
  color: props.color || _colors.black,
}));

export const FirstSectionBody = styled(Typography)((props) => ({
  fontWeight: "500px",
  lineHeight: "28px",
  fontFamily: "ClashDisplay-Bold",
  fontSize: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  textTransform: "capitalize",
  width: props.width || "618px",
  marginTop: props.marginTop || "24px",
  color: props.color || _colors.black,
}));

export const SecondSection = styled(Grid)((props) => ({
  display: "flex",
  minHeight: "120vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  [props.theme.breakpoints.down("sm")]: {
    minHeight: "476px",
  },
}));

export const SecondSectionTitle = styled(Typography)((props) => ({
  fontWeight: "500px",
  lineHeight: "28px",
  fontFamily: "ClashDisplay-Bold",
  fontSize: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  textTransform: "uppercase",
  width: "116px",
  marginTop: props.marginTop || "170px",
  color: props.color || _colors.lightRed,
}));

export const SecondSectionHeader = styled(Typography)((props) => ({
  fontWeight: "700px",
  lineHeight: "48px",
  fontFamily: "ClashDisplay-Bold",
  fontSize: "48px",
  letterSpacing: "0em",
  textAlign: props.textAlign || "left",
  textTransform: "capitalize",
  maxWidth: "470px",
  marginTop: props.marginTop || "0px",
  color: props.color || _colors.black,
}));

export const BudgetIntervals = styled(Typography)((props) => ({
  fontWeight: "600px",
  lineHeight: "28px",
  fontFamily: "ClashDisplay-Bold",
  fontSize: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  textTransform: "capitalize",
  width: "175px",
  marginTop: props.marginTop || "0px",
  color: props.color || _colors.black,
}));
export const SectionSubHeader = styled(Grid)((props) => ({
  display: "flex",
  marginTop: "32px",
  width: props.width || "207px",

  justifyContent: "space-between",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  [props.theme.breakpoints.down("sm")]: {
    minHeight: "476px",
  },
}));

export const ThirdSection = styled(Grid)((props) => ({
  display: "flex",
  minHeight: "120vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  [props.theme.breakpoints.down("sm")]: {
    minHeight: "476px",
  },
}));

export const SectionSubTitle = styled(Typography)((props) => ({
  fontWeight: "600px",
  lineHeight: "28px",
  fontFamily: "ClashDisplay-Bold",
  fontSize: "28px",
  letterSpacing: "0em",
  textAlign: "left",
  width: props.width || "273px",
  textTransform: "capitalize",
  marginTop: props.marginTop || "0px",
  color: props.color || _colors.black,
}));

export const FourthSection = styled(Grid)((props) => ({
  display: "flex",
  minHeight: "120vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  [props.theme.breakpoints.down("sm")]: {
    minHeight: "476px",
  },
}));

export const FifthSection = styled(Grid)((props) => ({
  minHeight: "120vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  [props.theme.breakpoints.down("sm")]: {
    minHeight: "476px",
  },
}));

export const SixthSection = styled(Grid)((props) => ({
  minHeight: "120vh",
  
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  [props.theme.breakpoints.down("sm")]: {
    minHeight: "476px",
  },
}));

export const SixthSectionPaper = styled(Paper)((props) => ({
  height: "181px",
  width: "100%",
  padding: "31px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundColor: props.color || _colors.lightRed,
}));

export const SeventhSection = styled(Grid)((props) => ({
    display: "flex",
    minHeight: "120vh",
    backgroundRepeat: "no-repeat",
    backgroundColor: _colors.black,
    backgroundPosition: "center center",
    [props.theme.breakpoints.down("sm")]: {
      minHeight: "476px",
    },
  }));