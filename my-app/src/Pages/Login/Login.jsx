import React from 'react'
import {Grid, useMediaQuery, useTheme} from "@mui/material";
import MobileLogin from "./MobileLogin";
import DesktopLogin from "./DesktopLogin";

const Login = () => {

    const theme = useTheme()

    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Grid>
            {
                isMd ?
                    <DesktopLogin/>
                    :
                    <MobileLogin/>
            }
        </Grid>
    )
}
export default Login
