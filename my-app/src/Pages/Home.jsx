import React from 'react'
import {Grid, useTheme} from "@mui/material";
import Header from "../Components/Header/Header";

const Home = () => {

    const theme = useTheme()

    return (
      <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'}>
          <Header SubTitle={'منو / داشبورد'} MainTitle={'داشبورد اصلی'} />
      </Grid>
    )
}
export default Home
