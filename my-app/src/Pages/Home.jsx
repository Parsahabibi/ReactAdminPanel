import React from 'react'
import {Grid, useTheme} from "@mui/material";
import Dashboard from "../Components/Dashboard";
import DesktopHeader from "../Components/DesktopHeader";

const Home = () => {

    const theme = useTheme()

    return (
      <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'}>
          {/*<Dashboard />*/}
          <DesktopHeader />
      </Grid>
    )
}
export default Home
