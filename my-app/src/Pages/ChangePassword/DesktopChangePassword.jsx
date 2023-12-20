import React from 'react'
import {Grid} from "@mui/material";
import MobileLogin from "../Login/MobileLogin";
import BannerLogin from "../BannerLogin";
import MobileChangePassword from "./MobileChangePassword";

const DesktopChangePassword = ({flag}) => {
    return (
        <Grid display={'flex'} alignItems={'flex-start'}>
            <MobileChangePassword flag={flag}/>
            <BannerLogin flag={false}/>
        </Grid>
    )
}
export default DesktopChangePassword
