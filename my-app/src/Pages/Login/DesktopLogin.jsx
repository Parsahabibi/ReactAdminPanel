import React from 'react'
import {Grid} from "@mui/material";
import MobileLogin from "./MobileLogin";
import BannerLogin from "../BannerLogin";

const DesktopLogin = () => {
    return (
        <Grid display={'flex'} alignItems={'flex-start'}>
            <MobileLogin flag={false}/>
            <BannerLogin flag={false}/>
        </Grid>
    )
}
export default DesktopLogin
