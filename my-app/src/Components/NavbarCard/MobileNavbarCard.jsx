import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";

const MobileNavbarCard = ({icon, MobileTitle, notification, des, imageState, percent, desState}) => {


    const theme = useTheme()


    return (
        <Grid className={'MobileNavbarCard'} bgcolor={'white'} borderRadius={'15px'} p={{xs:'8px 10px 19px 10px' , xxs:'8px 16px 19px 18px'}}
              width={'136px'} height={'90px'}>
            <Grid pb={'12px'} display={'flex'} alignItems={'flex-end'} justifyContent={'flex-start'} gap={'8px'}>
                {imageState ? icon : <></>}
                <Typography variant={'h6'} fontWeight={700} color={theme.palette.light}>{MobileTitle}</Typography>
            </Grid>
            <Grid>
                <Typography variant={'h6'} fontWeight={700} color={theme.palette.dark}>{notification}</Typography>
                <Grid display={desState ? 'flex' : 'none'} alignItems={'center'} justifyContent={'flex-start'}>
                    <Typography variant={'subtitle2'} fontWeight={500} color={'#05CD99'}>{percent}</Typography>
                    <Typography fontSize={'8px'} fontWeight={500} color={theme.palette.light}>{des}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default MobileNavbarCard
