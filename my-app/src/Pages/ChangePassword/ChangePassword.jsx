import React from 'react'
import {useMediaQuery, useTheme} from "@mui/material";
import MobileChangePassword from "./MobileChangePassword";
import DesktopChangePassword from "./DesktopChangePassword";

const ChangePassword = () => {

    const theme = useTheme()

    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            {
                isMd ?
                    <DesktopChangePassword flag={false}/>
                    :
                    <MobileChangePassword flag={true} />
            }
        </>
    )
}
export default ChangePassword
