import React, {useEffect, useState} from 'react'
import {Grid, useMediaQuery} from "@mui/material";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = ({MainTitle , SubTitle}) => {

    let [ComponentToShow, setComponentToShow] = useState(<></>);
    const matches = useMediaQuery('(min-width:900px)');

    useEffect(() => {
        setComponentToShow(
            matches ? <DesktopHeader MainTitle={MainTitle} SubTitle={SubTitle}/> : <MobileHeader/>
        )
    }, [matches])

    return (
        <Grid>
            {ComponentToShow}
        </Grid>
    )
}
export default Header
