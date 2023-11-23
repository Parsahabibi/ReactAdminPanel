import React, {useEffect, useState} from 'react'
import {useMediaQuery} from "@mui/material";
import DesktopLayoutHeader from "./DesktopLayoutHeader";
import MobileLayoutHeader from "./MobileLayoutHeader";

const HeaderLayout = ({id , marginLeft , MainTitle , SubTitle , title}) => {

    let [ComponentToShow, setComponentToShow] = useState(<></>);
    const matches = useMediaQuery('(min-width:900px)');

    useEffect(() => {
        setComponentToShow(
            matches ? <DesktopLayoutHeader id={id} marginLeft={marginLeft} SubTitle={SubTitle} MainTitle={MainTitle}/> : <MobileLayoutHeader title={title}/>
        )
    }, [matches])

    return (
        <>
            {ComponentToShow}
        </>

    )
}
export default HeaderLayout
