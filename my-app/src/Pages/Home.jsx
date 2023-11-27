import React from 'react'
import {Grid, useTheme} from "@mui/material";
import Header from "../Components/Header/Header";
import DesktopLayoutHeader from "../Components/Layout/DesktopLayoutHeader";
import HeaderLayout from "../Components/Layout/HeaderLayout";
import {Dollar, File, Income, Tick} from "../Components/Icons";
import MobileNavbarCard from "../Components/NavbarCard/MobileNavbarCard";
import DesktopNavbarCard from "../Components/NavbarCard/DesktopNavbarCard";
import Dashboard from "../Components/Dashboard";
import WeeklyIncomeChart from "../Components/Charts/weeklyIncomeChart";

const Home = () => {

    const theme = useTheme()

    const NavbarCardDate = [
        {
            id: 1,
            title: 'درآمد',
            notification: '2935 تومان',
            icon: <Income fill={theme.palette.main}/>,
            des: '',
            imageState: true,
            desState: false,
            percent: ''
        },
        {
            id: 2,
            title: 'خرج در ماه',
            notification: '2935 تومان',
            icon: <Dollar fill={theme.palette.main}/>,
            des: '',
            imageState: true,
            desState: false,
            percent: ''
        },
        {
            id: 3,
            title: 'فروش',
            notification: '2935 تومان',
            icon: <></>,
            des: 'نسبت به ماه قبل',
            imageState: false,
            desState: true,
            percent: '+23%'
        },
        {
            id: 4,
            title: 'موجودی',
            notification: '10 م.تومان',
            icon: <></>,
            des: '',
            imageState: false,
            desState: false,
            percent: ''
        },
        {
            id: 5,
            title: 'درخواست جدید',
            notification: '154',
            icon: <></>,
            des: '',
            imageState: false,
            desState: false,
            percent: ''
        },
        {
            id: 6,
            title: 'همه پروژه ها',
            notification: '2935 ',
            icon: <File fill={theme.palette.main}/>,
            des: '',
            imageState: true,
            desState: false,
            percent: ''
        },
    ]


    const DesktopNavbarCardData = [
        {
            id: 1,
            title: 'درآمد',
            Notification: '12345  تومان',
            flag: false,
            icon: <Income fill={theme.palette.main}/>,
            linearState: false,
            percentState: false,
            percent: ''
        },
        {
            id: 2,
            title: 'خرج در ماه',
            Notification: '12345 تومان',
            flag: false,
            icon: <Dollar fill={theme.palette.main}/>,
            linearState: false,
            percentState: false,
            percent: ''
        },
        {
            id: 3,
            title: 'فروش ماهانه',
            Notification: '12345 تومان',
            flag: false,
            icon: <></>,
            linearState: false,
            percentState: true,
            percent: '+23%'
        },
        {
            id: 4,
            title: 'موجودی',
            Notification: '10 م.تومان',
            flag: true,
            icon: 'assets/images/UsaFlag.svg',
            linearState: false,
            percentState: false,
            percent: ''
        },
        {
            id: 5,
            title: 'درخواست های جدید',
            Notification: '154',
            flag: false,
            icon: <Tick fill={'white'}/>,
            linearState: true,
            percentState: false,
            percent: ''
        },
        {
            id: 6,
            title: 'همه پروژه ها',
            Notification: '2935',
            flag: false,
            icon: <File fill={theme.palette.main}/>,
            linearState: false,
            percentState: false,
            percent: ''
        },
    ]

    return (
        // <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'} display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'}>
        //     <Grid display={{xs:'none' , md:'block'}}>
        //         <Dashboard id={1} marginLeft={160}/>
        //     </Grid>
        //     <Grid className={'MainDashboard'} width={'100%'}>
        //         <Header id={1} marginLeft={160} MainTitle={'داشبورد اصلی'} SubTitle={'منو / داشبورد'}/>
        //         <Grid className={'Main'} p={{xs: '0 16px 76px 16px', md: '0 16px 40px 16px'}} >
        //             <Grid display={{xs:'grid' , md:'none'}} container style={{ gridTemplateColumns: '1fr 1fr' }} gap={'16px'}>
        //                 {
        //                     NavbarCardDate.map(
        //                         item =>
        //                             <MobileNavbarCard item xs={6} icon={item.icon} MobileTitle={item.title}
        //                                               percent={item.percent} des={item.des} desState={item.desState}
        //                                               imageState={item.imageState} notification={item.notification}/>
        //                     )
        //                 }
        //             </Grid>
        //             <Grid className={'DesktopNavbarNotification'} display={{xs:'none' , md:'flex'}} alignItems={'center'}
        //                   justifyContent={'space-between'} flexWrap={'wrap'} gap={'16px'}>
        //                 {
        //                     DesktopNavbarCardData.map(
        //                         item =>
        //                             <DesktopNavbarCard icon={item.icon} percent={item.percent} flag={item.flag}
        //                                                percentState={item.percentState} linearState={item.linearState}
        //                                                DesktopNotification={item.Notification} DesktopTitle={item.title}/>
        //                     )
        //                 }
        //             </Grid>
        //             <Grid className={'IncomeChart'}></Grid>
        //             <Grid className={'CircleChart'}></Grid>
        //             <Grid className={'Calender'}></Grid>
        //             <Grid className={'ButtonNotification'}></Grid>
        //         </Grid>
        //     </Grid>
        // </Grid>
        <WeeklyIncomeChart />
    )
}
export default Home
