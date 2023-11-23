import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import MobileHeader from "../Header/MobileHeader";

const MobileLayoutHeader = ({title}) => {

    const theme = useTheme()

    return (
        <Grid>
            <MobileHeader/>
           <Grid pr={'16px'}>
               <Typography variant={'h3'} fontWeight={700} color={theme.palette.dark}>{title}</Typography>
           </Grid>
        </Grid>
    )
}
export default MobileLayoutHeader
