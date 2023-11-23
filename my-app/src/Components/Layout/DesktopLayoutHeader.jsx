import React from 'react'
import {Grid} from "@mui/material";
import Dashboard from "../Dashboard";
import DesktopHeader from "../Header/DesktopHeader";

const DesktopLayoutHeader = ({id , marginLeft , MainTitle , SubTitle}) => {
    return (
        <Grid display={'flex'} alignItems={'flex-start'}>
            <Dashboard id={id} marginLeft={marginLeft} />
            <DesktopHeader MainTitle={MainTitle} SubTitle={SubTitle}/>
        </Grid>
    )
}
export default DesktopLayoutHeader
