import React from 'react'
import {Typography, useTheme} from "@mui/material";

const Home = () => {

    const theme = useTheme()

    return (
        <Typography variant={'h1'} color={theme.palette.primary.main}>hello</Typography>
    )
}
export default Home
