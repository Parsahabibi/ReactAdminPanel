import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";

const DesktopNavbarCard = ({icon , DesktopTitle , DesktopNotification , percentState , percent , linearState , flag }) => {

    const theme = useTheme()

    const gradient =linearState? `linear-gradient(90deg, ${theme.palette.dark}, ${theme.palette.two} 0%,  ${theme.palette.five} 100%)`:theme.palette.one


    return (
        <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'16px'} p={'21px 16px'} borderRadius={'20px'} bgcolor={'white'} width={'219px'} height={'98px'}>
            <Grid bgcolor={theme.palette.one} width={'44px'} height={'44px'} borderRadius={'50%'} display={percentState?'flex':'none'} alignItems={'center'} justifyContent={'center'}>
                <Typography variant={'h6'} fontWeight={700} color={'#05CD99'}>{percent}</Typography>
            </Grid>
            <Grid style={{background:gradient}} width={'44px'} height={'44px'} borderRadius={'50%'} display={percentState?'none':'flex'} alignItems={'center'} justifyContent={'center'}>
                {
                    flag ?
                        <img src={icon} alt={''}/>
                        :
                        icon
                }
            </Grid>
            <Grid>
                <Typography color={theme.palette.light} fontWeight={500} variant={'h6'}>{DesktopTitle}</Typography>
                <Typography color={theme.palette.dark} fontWeight={700} variant={'h4'}>{DesktopNotification}</Typography>
            </Grid>
        </Grid>
    )
}
export default DesktopNavbarCard
