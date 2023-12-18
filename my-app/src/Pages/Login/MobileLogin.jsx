import React from 'react'
import {Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const MobileLogin = () => {
    return (
        <Grid
            sx={{
                backgroundImage: 'url("/assets/images/EnterBanner.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100%',
            }}
            p={{xs: '35px 34px 40px 34px', xxs: '35px 53px 40px 53px'}}
        >
            <Grid className={'Logo'} display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'} pb={'72px'}>
                <Grid width={'140px'} height={'140px'} bgcolor={'white'} borderRadius={'50%'} mb={'22px'}>
                    {/*logo image*/}
                </Grid>
                <Typography variant={'h2'} color={'white'} fontWeight={700}>LOREM IPSUM</Typography>
            </Grid>
            <Grid border={'2px solid #FFFFFF33'} p={'16px 18px'} display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'} borderRadius={'26px'} mb={'139px'}>
                <Typography variant={'subtitle1'} fontWeight={500} color={'white'} lineHeight={'24px'}>لورم ایپسوم متن
                    ساختگی با تولید سادگی</Typography>
                <Typography variant={'h3'} fontWeight={700} color={'white'} lineHeight={'45px'}>lorem
                    ipsum.com</Typography>
            </Grid>
            <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                <Link to={'/'}>
                    <Typography variant={'h3'} fontWeight={700} color={'white'}>ورود</Typography>
                </Link>
            </Grid>
        </Grid>
    )
}
export default MobileLogin
