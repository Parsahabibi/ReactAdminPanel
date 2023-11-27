import React from 'react'
import {Grid, useTheme, useMediaQuery, Typography} from "@mui/material";
import Header from "../Components/Header/Header";
import DesktopLayoutHeader from "../Components/Layout/DesktopLayoutHeader";
import HeaderLayout from "../Components/Layout/HeaderLayout";
import {Dollar, File, Income, Tick} from "../Components/Icons";
import MobileNavbarCard from "../Components/NavbarCard/MobileNavbarCard";
import DesktopNavbarCard from "../Components/NavbarCard/DesktopNavbarCard";
import Dashboard from "../Components/Dashboard";
import WeeklyIncomeChart from "../Components/Charts/WeeklyIncomeChart";

const Home = () => {

    const theme = useTheme()


    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'h6';


    if (isXs) {
        variant = 'h6';
    } else if (isMd) {
        variant = 'h2';
    }


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
        <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'} display={'flex'}
              alignItems={'flex-start'} justifyContent={'space-between'}>
            <Grid display={{xs: 'none', md: 'block'}}>
                <Dashboard id={1} marginLeft={160}/>
            </Grid>
            <Grid className={'MainDashboard'} width={'100%'}>
                <Header id={1} marginLeft={160} MainTitle={'داشبورد اصلی'} SubTitle={'منو / داشبورد'}/>
                <Grid className={'Main'} p={{xs: '0 16px 76px 16px', md: '0 16px 40px 16px'}}>
                    <Grid display={{xs: 'grid', md: 'none'}} container style={{gridTemplateColumns: '1fr 1fr'}}
                          gap={'16px'} pb={'24px'}>
                        {
                            NavbarCardDate.map(
                                item =>
                                    <MobileNavbarCard item xs={6} icon={item.icon} MobileTitle={item.title}
                                                      percent={item.percent} des={item.des} desState={item.desState}
                                                      imageState={item.imageState} notification={item.notification}/>
                            )
                        }
                    </Grid>
                    <Grid className={'DesktopNavbarNotification'} display={{xs: 'none', md: 'flex'}}
                          alignItems={'center'}
                          justifyContent={'space-between'} flexWrap={'wrap'} gap={'16px'} pb={'24px'}>
                        {
                            DesktopNavbarCardData.map(
                                item =>
                                    <DesktopNavbarCard icon={item.icon} percent={item.percent} flag={item.flag}
                                                       percentState={item.percentState} linearState={item.linearState}
                                                       DesktopNotification={item.Notification}
                                                       DesktopTitle={item.title}/>
                            )
                        }
                    </Grid>
                    <Grid className={'IncomeChart'} style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                        <Grid className={'weeklyIncomeChart'} width={'100%'} bgcolor={'white'} borderRadius={'20px'}
                              p={'24px'} height={'345px'} mb={{xs: '24px', md: 0}}>
                            <Grid className={'HeaderWeeklyIncomeChart'} display={'flex'}
                                  alignItems={'center'} justifyContent={'space-between'} pb={'32px'}>
                                <Typography variant={variant} color={theme.palette.dark} fontWeight={700}>درآمد هفتگی</Typography>
                                <Grid width={{xs: '32px', md: '36px'}} height={{xs: '28px', md: '33px'}}
                                      borderRadius={'10px'} bgcolor={theme.palette.one} display={'flex'}
                                      alignItems={'center'} justifyContent={'center'}>
                                    <Income fill={theme.palette.main}/>
                                </Grid>
                            </Grid>
                            <Grid className={'WeeklyChart'} width={{xs:'250px' , xxs:'300px' , sm:'335px' , md:'223px' , l:'90%'}} margin={'0 auto'}>
                                <WeeklyIncomeChart />
                            </Grid>
                        </Grid>
                        <Grid className={'MonthlyIncomeChart'}></Grid>
                    </Grid>
                    <Grid className={'CircleChart'}></Grid>
                    <Grid className={'Calender'}></Grid>
                    <Grid className={'ButtonNotification'}></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Home
