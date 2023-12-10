import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header/Header";

const Tables = () => {

    const theme = useTheme()

    return (
        <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'} display={'flex'}
              alignItems={'flex-start'} justifyContent={'space-between'}>
            <Grid display={{xs: 'none', md: 'block'}}>
                <Dashboard id={3} marginLeft={154}/>
            </Grid>
            <Grid className={'MainDashboard'} width={'100%'}>
                <Header id={3} marginLeft={154} MainTitle={'جداول'} SubTitle={'صفحات / جداوله'}/>
            </Grid>
        </Grid>
    )
}
export default Tables
