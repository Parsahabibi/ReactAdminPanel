import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header/Header";

const Shop = () => {

    const theme = useTheme()

    return (
        <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'} display={'flex'}
              alignItems={'flex-start'} justifyContent={'space-between'}>
            <Grid display={{xs: 'none', md: 'block'}}>
                <Dashboard id={2} marginLeft={157}/>
            </Grid>
            <Grid className={'MainDashboard'} width={'100%'}>
                <Header id={2} marginLeft={157} MainTitle={'فروشگاه'} SubTitle={'صفحات / فروشگاه'}/>
            </Grid>
        </Grid>
    )
}
export default Shop
