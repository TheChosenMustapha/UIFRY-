// import * as React from "react";
// import { alpha, makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import { Grid, Stack } from "@mui/material";
// import { _colors } from "./_colors";
// import UifryAppBar from "./UifryAppBar";

// import { Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     grow: {
//       flexGrow: 1,
//     }
//   }));

// export default function UifryHomePage() {
//   return (
//     <Grid container maxWidth="lg">
//       <UifryAppBar/>
//       <Grid>
//         <Grid item>
//           <Typography
          
//           >make the best financial decisions</Typography>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

import { Grid, Stack } from "@mui/material";
import { _colors } from "./_colors";
import UifryAppBar from "./UifryAppBar";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FirstSection, FirstSectionHeader } from "./UifryHomePageStyles";
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ bgcolor: 'white', height: '120vh' }}>
        <UifryAppBar/>
        </Box>
      </Container>
    </React.Fragment>
  );
}