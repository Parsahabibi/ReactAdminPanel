import React from 'react'
import {Grid, useTheme} from "@mui/material";

const Dashboard = () => {

    const theme = useTheme()


    return (
        <Grid pt={{xs:'' , md:'40px'}} pb={{xs:'' , md:'233px'}} bgcolor={'white'} width={{xs:'230px' , xxs:'290px'}}>
            <Grid className={'DashboardShoppingLogo'} px={'46px'} pb={'34px'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'8px'}>
                <img src={'assets/images/WordMarkSecondary.svg'} alt={''}/>
                <img src={'assets/images/ShoppingLogo.svg'} alt={''}/>
            </Grid>
            <Grid className={'Divider'} width={'100%'} height={'1px'} bgcolor={theme.palette.primary.one}></Grid>
            <Grid className={'DashboardItems'}></Grid>
            <Grid className={'DashboardLogo'}></Grid>
        </Grid>
    )
}
export default Dashboard
