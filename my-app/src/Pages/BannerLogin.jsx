import React from 'react'
import {Grid, Typography, useMediaQuery} from "@mui/material";
import {Link} from "react-router-dom";

const BannerLogin = ({flag}) => {

    const isUpG = useMediaQuery((theme) => theme.breakpoints.up('g'));

    let radius = flag ? '0px' : '100px'

    let Lorem = isUpG ? 'h1' : 'h2'

    return (
        <Grid
            width={flag? '100%':'50%'}
            height={'120vh'}
            sx={{
                backgroundImage: 'url("/assets/images/EnterBanner.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            p={flag? {xs: '35px 34px 40px 34px', xxs: '35px 53px 40px 53px'}:{xs: '110px 34px 40px 34px', xxs: '110px 53px 40px 53px' , g:'200px' , xl:'250px'}}
            style={{borderBottomLeftRadius:radius}}
        >
            <Grid className={'Logo'} display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'} pb={'72px'}>
                <Grid width={{xs:'140px' , g:'280px'}} height={{xs:'140px' , g:'280px'}} bgcolor={'white'} borderRadius={'50%'} mb={'22px'}>
                    {/*logo image*/}
                </Grid>
                <Typography variant={Lorem} color={'white'} fontWeight={700}>LOREM IPSUM</Typography>
            </Grid>
            <Grid border={'2px solid #FFFFFF33'} p={'16px 18px'} display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'} borderRadius={'26px'} mb={'139px'}>
                <Typography variant={'subtitle1'} fontWeight={500} color={'white'} lineHeight={'24px'}>لورم ایپسوم متن
                    ساختگی با تولید سادگی</Typography>
                <Typography variant={'h3'} fontWeight={700} color={'white'} lineHeight={'45px'}>lorem
                    ipsum.com</Typography>
            </Grid>
            <Grid display={flag?'flex' : 'none'} alignItems={'center'} justifyContent={'flex-end'}>
                <Link to={'/Login/MobileLogin'}>
                    <Typography variant={'h3'} fontWeight={700} color={'white'}>ورود</Typography>
                </Link>
            </Grid>
        </Grid>
    )
}
export default BannerLogin
