import React from 'react'
import {Grid, useTheme} from "@mui/material";
import Header from "../Components/Header/Header";
import DesktopLayoutHeader from "../Components/Layout/DesktopLayoutHeader";
import HeaderLayout from "../Components/Layout/HeaderLayout";

const Home = () => {

    const theme = useTheme()

    return (
      <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'}>
         <HeaderLayout id={1} title={'داشبورد اصلی'} MainTitle={'داشبورد اصلی'} SubTitle={'منو / داشبورد'} marginLeft={164}/>
      </Grid>
    )
}
export default Home
