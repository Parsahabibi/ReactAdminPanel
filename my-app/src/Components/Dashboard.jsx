import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {BasketIcon, ChartIcon, KanbanIcon, LoginIcon, ProfileIcon, HomeIcon} from "./Icons";

const Dashboard = ({id  , marginLeft}) => {

    const theme = useTheme()


    const DashboardData = [
        {id: 1, image: <HomeIcon fill={id === 1 ? theme.palette.main : theme.palette.light}/>, title: 'داشبورد', link: '/'},
        {id: 2, image: <BasketIcon fill={id === 2 ? theme.palette.main : theme.palette.light}/>, title: 'فروشگاه', link: '/Market'},
        {id: 3, image: <ChartIcon fill={id === 3 ? theme.palette.main : theme.palette.light}/>, title: 'جدول ها ', link: '/Tables'},
        {id: 4, image: <KanbanIcon fill={id === 4 ? theme.palette.main : theme.palette.light}/>, title: 'کنبان', link: '/Kanban'},
        {id: 5, image: <ProfileIcon fill={id === 5 ? theme.palette.main : theme.palette.light} />, title: 'پروفایل', link: '/Profile'},
        {id: 6, image: <LoginIcon />, title: 'ورود', link: '/Login'},
    ]


    console.log( `${marginLeft}-60px`)


    const main = theme.palette.main

    const one = theme.palette.one


    const gradientStyle = {
        background: `linear-gradient(90deg, ${main} , ${main} 0%, ${one} 100%)`,
    };


    return (
        <Grid pt={{xs: '40px'}} pb={{xs: '394px', md: '233px'}} bgcolor={'white'}
              width={{xs: '230px', xxs: '290px'}}>
            <Grid className={'DashboardShoppingLogo'} px={'46px'} pb={'34px'} display={'flex'} alignItems={'center'}
                  justifyContent={'center'} gap={'8px'}>
                <img src={'assets/images/WordMarkSecondary.svg'} alt={''}/>
                <img src={'assets/images/ShoppingLogo.svg'} alt={''}/>
            </Grid>
            <Grid className={'Divider'} width={'100%'} height={'1px'} bgcolor={theme.palette.one}></Grid>
            <Grid className={'DashboardItems'} px={'32px'} pt={'40px'} pb={'200px'} display={'flex'}
                  flexDirection={'column'} alignItems={'flex-start'} gap={'32px'}>
                {
                    DashboardData.map(
                        item =>
                            <Link to={item.link} key={item.id} style={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
                                <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'12px'} ml={{xs:item.id === id ? `${marginLeft - 60}px` : 0 , xxs:item.id === id ?  `${marginLeft}px` : 0}}>
                                    <Grid>
                                        {item.image}
                                    </Grid>
                                    <Typography fontWeight={item.id === id ? 900 : 700}
                                                color={item.id === id ? theme.palette.dark : theme.palette.light}
                                                variant={'h5'} whiteSpace={'nowrap'}>{item.title}</Typography>
                                </Grid>
                                <Grid display={item.id === id ? 'block' : 'none'} className={'ActiveBorder'} width={'4px'} height={'36px'} bgcolor={theme.palette.main} borderRadius={'25px'}></Grid>
                            </Link>
                    )
                }
            </Grid>
            <Grid style={gradientStyle} mx={'31px'} borderRadius={'24px'} position={'relative'}>
                <Grid className={'Logo'} position={'absolute'} width={'94px'} height={'94px'} borderRadius={'50%'} bgcolor={'white'} right={{xs:'22%' , xxs:'30%'}} top={{xs:'-21%' , xxs:'-25%'}}>
                    <Grid position={'absolute'} right={'5%'} top={'5%'} width={'84px'} height={'84px'} borderRadius={'50%'} style={gradientStyle}></Grid>
                </Grid>
                <Grid className={'DescriptionDashboardLogo'} px={'18px'} pt={'72px'} pb={'49px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'9px'}>
                    <Typography fontWeight={700} textAlign={'center'} variant={'h5'} color={'white'}>لورم ایپسوم</Typography>
                    <Typography fontWeight={500} textAlign={'center'} variant={'h6'} color={'white'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Dashboard
