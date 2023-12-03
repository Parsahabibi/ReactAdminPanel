import React, {useState} from 'react'
import {Grid, useTheme, useMediaQuery, Typography} from "@mui/material";
import Header from "../Components/Header/Header";
import DesktopLayoutHeader from "../Components/Layout/DesktopLayoutHeader";
import HeaderLayout from "../Components/Layout/HeaderLayout";
import {Dollar, File, Income, LeftCircle, MoreHoriz, RightCircle, Tick} from "../Components/Icons";
import MobileNavbarCard from "../Components/NavbarCard/MobileNavbarCard";
import DesktopNavbarCard from "../Components/NavbarCard/DesktopNavbarCard";
import Dashboard from "../Components/Dashboard";
import WeeklyIncomeChart from "../Components/Charts/WeeklyIncomeChart";
import MonthlyIncomeChart from "../Components/Charts/MonthlyIncomeChart";
import CircleChart from "../Components/Charts/CircleChart";
import BarChart from "../Components/Charts/BarChart";
import ChartMoreOption from "../Components/ChartMoreOption";
import CheckTable from "../Components/Tables/CheckTable";
import Calender from "../Components/Calender/Calender";

const Home = () => {

    const theme = useTheme()

    const CheckedColor = theme.palette.dark;

    const dataTask = [
        {id: 1, text: "لورم ایپسوم ", checked: false},
        {id: 2, text: "لورم ایپسوم ", checked: false},
        {id: 3, text: "لورم ایپسوم ", checked: false},
        {id: 4, text: "لورم ایپسوم ", checked: false},
        {id: 5, text: "لورم ایپسوم ", checked: false},
        {id: 6, text: "لورم ایپسوم ", checked: false},
        {id: 7, text: "لورم ایپسوم ", checked: false},
        {id: 8, text: "لورم ایپسوم ", checked: false},
        {id: 9, text: "لورم ایپسوم ", checked: false},
        {id: 10, text: "لورم ایپسوم ", checked: false},
        {id: 11, text: "لورم ایپسوم ", checked: false},
        {id: 12, text: "لورم ایپسوم ", checked: false},
        {id: 13, text: "لورم ایپسوم ", checked: false},
        {id: 14, text: "لورم ایپسوم ", checked: false},
    ];


    const [mainCheckboxTask, setMainCheckboxTask] = useState(false);
    const [taskStates, setTaskStates] = useState(dataTask.map(() => false));

    const handleMainCheckboxChange = () => {
        setMainCheckboxTask(!mainCheckboxTask);
        setTaskStates(dataTask.map(() => !mainCheckboxTask));
    };

    const handleCheckboxChange = (id, checked) => {
        const updatedTaskStates = [...taskStates];
        updatedTaskStates[id - 1] = checked;

        setTaskStates(updatedTaskStates);

        const allChecked = updatedTaskStates.every((isChecked) => isChecked);
        setMainCheckboxTask(allChecked);
    };


    const linearOne = `linear-gradient(180deg, ${theme.palette.main}, ${theme.palette.main} 0%, ${theme.palette.one} 100%)`;


    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'h6';

    let secondVariant = 'subtitle2'

    let ThirdVariant = 'h6'

    let FourthVariant = 'subtitle2'

    let FiveVariant = 'h6'

    let SixVariant = 'h6'

    let sevenVariant = 'h6'

    let width = '14px'


    if (isXs) {
        variant = 'h6';
        secondVariant = 'subtitle2'
        ThirdVariant = 'h6'
        FourthVariant = 'subtitle1'
        FiveVariant = 'h6'
        SixVariant = 'h6'
        sevenVariant = 'h6'
        width = '14px'
    } else if (isMd) {
        variant = 'h2';
        secondVariant = 'h6'
        ThirdVariant = 'h2'
        FourthVariant = 'subtitle2'
        FiveVariant = 'h1'
        SixVariant = 'h4'
        sevenVariant = 'h5'
        width = '20px'
    }


    const BarChartData = [
        {number: 0, value: 50},
        {number: 4, value: 100},
        {number: 8, value: 60},
        {number: 12, value: 80},
        {number: 14, value: 50},
        {number: 16, value: 70},
        {number: 18, value: 30},
    ];


    function toPersianNum(englishNumber) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return englishNumber.toString().split('').map(d => persianDigits[parseInt(d, 10)]).join('');
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
                    <Grid className={'IncomeChart'} sx={{display: {md: 'grid'}, gridTemplateColumns: '1fr 1fr'}}
                          gap={'16px'} pb={'16px'}>
                        <Grid className={'weeklyIncomeChart'} width={'100%'} bgcolor={'white'} borderRadius={'20px'}
                              p={'24px'} height={'345px'} mb={{xs: '24px', md: 0}}>
                            <Grid className={'HeaderWeeklyIncomeChart'} display={'flex'}
                                  alignItems={'center'} justifyContent={'space-between'} pb={'32px'}>
                                <Typography variant={variant} color={theme.palette.dark} fontWeight={700}>درآمد
                                    هفتگی</Typography>
                                <Grid width={{xs: '32px', md: '36px'}} height={{xs: '28px', md: '33px'}}
                                      borderRadius={'10px'} bgcolor={theme.palette.one} display={'flex'}
                                      alignItems={'center'} justifyContent={'center'}>
                                    <Income fill={theme.palette.main}/>
                                </Grid>
                            </Grid>
                            <Grid className={'WeeklyChart'}
                                  width={{xs: '100%', md: '90%'}}
                                  mr={'auto'}>
                                <WeeklyIncomeChart/>
                            </Grid>
                        </Grid>
                        <Grid className="MonthlyIncome" width={'100%'} bgcolor={'white'} borderRadius={'20px'}
                              p={'24px'} height={'345px'} mb={{xs: '24px', md: 0}}>
                            <Grid className="HeaderMonthlyIncome" pb={{xs: '32px', md: '13px'}} display={'flex'}
                                  alignItems={'center'} justifyContent={'space-between'}>
                                <Grid className="month" display={'flex'} alignItems={'flex-start'}
                                      justifyContent={'flex-start'} gap={'6px'} p={'4px 6px'} borderRadius={'7px'}
                                      bgcolor={theme.palette.one}>
                                    <img src="/assets/images/calendarToday.svg" alt=""/>
                                    <Typography color={theme.palette.light} variant={secondVariant} fontWeight={500}
                                                className="secondary">ماه
                                        جاری</Typography>
                                </Grid>
                                <Grid width={{xs: '32px', md: '36px'}} height={{xs: '28px', md: '33px'}}
                                      borderRadius={'10px'} bgcolor={theme.palette.one} display={'flex'}
                                      alignItems={'center'} justifyContent={'center'}>
                                    <Income fill={theme.palette.main}/>
                                </Grid>
                            </Grid>
                            <Grid className="ChartInformation" pr={{xs: '0', md: '24px'}}>
                                <Typography variant={ThirdVariant} fontWeight={700} color={theme.palette.dark}
                                            lineHeight={{xs: '14px', md: '42px'}} pb={{xs: '8px', md: '4px'}}>37 میلیون
                                    تومان</Typography>
                                <Grid className="details" display={'flex'} alignItems={'baseline'}
                                      justifyContent={'flex-start'} gap={'8px'}>
                                    <Typography variant={secondVariant} fontWeight={500} color={theme.palette.lihgt}>جمع
                                        مخارج</Typography>
                                    <Grid className="salary" display={'flex'} alignItems={'center'}
                                          justifyContent={'flex-start'} gap={'4px'}>
                                        <img src="/assets/images/Up.svg" alt=""/>
                                        <Typography variant={FourthVariant} color={'#05CD99'}
                                                    fontWeight={700}>+2.45%</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className="ChartMonthlyIncome" width={{xs: '100%', md: '90%'}}
                                  height={{xs: '190px', md: '180px'}} mr={'auto'}>
                                <MonthlyIncomeChart/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={'CircleChart'} sx={{display: {lg: 'grid'}, gridTemplateColumns: '1fr 1fr'}}
                          gap={'16px'} pb={{md: '16px'}}>
                        <Grid sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}
                              gap={'16px'} pb={'16px'}>
                            <Grid className={'circle'} p={{
                                xs: '19px 12px 21px 8px',
                                md: '27px 21px 36px 32px',
                                lg: ' 27px 19px 36px 19px',
                                xg: '27px 21px 36px 32px'
                            }} height={{lg: '345px'}} width={'100%'} borderRadius={'15px'} bgcolor={'white'}>
                                <Grid className="MobileHeaderCircleChart" display={{xs: 'flex', md: 'none'}}
                                      alignItems={'center'} justifyContent={'space-between'} pb={'13px'}>
                                    <Typography color={theme.palette.dark} variant={'subtitle1'}
                                                display={{xs: 'block', xxs: 'none'}} fontWeight={700}>نمودار
                                        دایره ای</Typography>
                                    <Typography color={theme.palette.dark} variant={'h6'}
                                                display={{xs: 'none', xxs: 'block'}} fontWeight={700}>نمودار
                                        دایره ای</Typography>
                                    <Grid className="DropDown" display={'flex'} alignItems={'center'}
                                          justifyContent={'flex-start'} gap={{xs: '2px', xxs: '8px'}}>
                                        <img src="/assets/images/Arrow.svg" alt=""/>
                                        <Typography color={theme.palette.light} variant={'subtitle2'}
                                                    fontWeight={500}>ماهانه</Typography>
                                    </Grid>
                                </Grid>
                                <Grid className="HeaderCircleChart" display={{xs: 'none', md: 'flex'}}
                                      alignItems={'center'}
                                      justifyContent={'space-between'} pb={'21px'}>
                                    <Typography color={theme.palette.dark} variant={'h5'} fontWeight={700}>نمودار دایره
                                        ای</Typography>
                                    <Grid className="DropDown" display={'flex'} alignItems={'center'}
                                          justifyContent={'flex-start'} gap={'8px'}>
                                        <img src="/assets/images/Arrow.svg" alt=""/>
                                        <Typography color={theme.palette.light} variant={'subtitle1'}
                                                    fontWeight={500}>ماهانه</Typography>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <CircleChart/>
                                </Grid>
                                <Grid className="chartInformation" p={{
                                    xs: '6px',
                                    xxs: '6px 9px',
                                    md: '17px 10px 22px 10px',
                                    lg: '8px',
                                    xg: '17px 57px 22px 40px'
                                }} display={'flex'} alignItems={'center'} justifyContent={'space-between'} boxShadow={5}
                                      borderRadius={{xs: '10px', md: '15px'}}>
                                    <Grid className="System" display={{xs: 'flex', md: 'none'}} alignItems={'center'}
                                          justifyContent={'flex-start'} gap={'2px'}>
                                        <RightCircle fill={theme.palette.main}/>
                                        <Typography color={theme.palette.light} variant={'subtitle2'}>سیستم</Typography>
                                    </Grid>
                                    <Grid className="DesktopSystem" display={{xs: 'none', md: 'flex'}}
                                          flexDirection={'column'} alignItems={'center'}>
                                        <Grid className="percent" display={'flex'} alignItems={'center'}
                                              justifyContent={'flex-start'} flexDirection={'row-reverse'} gap={'5px'}>
                                            <RightCircle fill={theme.palette.main}/>
                                            <Typography color={theme.palette.light}
                                                        variant={'subtitle1'}>سیستم</Typography>
                                        </Grid>
                                        <Typography color={theme.palette.dark} variant={'h5'}
                                                    className="medium">25%</Typography>
                                    </Grid>
                                    <Grid className="File" display={{xs: 'flex', md: 'none'}} alignItems={'center'}
                                          justifyContent={'flex-start'} gap={'2px'}>
                                        <LeftCircle fill={theme.palette.five}/>
                                        <Typography color={theme.palette.light} variant={'subtitle2'}
                                                    whiteSpace={'nowrap'}>فایل های شما</Typography>
                                    </Grid>
                                    <Grid className="DesktopFile" display={{xs: 'none', md: 'flex'}}
                                          flexDirection={'column'} alignItems={'center'}>
                                        <Grid className="percent" display={'flex'} alignItems={'center'}
                                              justifyContent={'flex-start'} flexDirection={'row-reverse'} gap={'5px'}>
                                            <LeftCircle fill={theme.palette.five}/>
                                            <Typography color={theme.palette.light} variant={'subtitle1'}>فایل های
                                                شما</Typography>
                                        </Grid>
                                        <Typography color={theme.palette.dark} variant={'h5'}
                                                    className="medium">63%</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className={'traffic'} p={{
                                xs: '8px 12px',
                                md: '25px 15px 39px 15px',
                                lg: '25px 19px 39px 19px',
                                xg: '25px 37px 39px 37px'
                            }} height={{lg: '345px'}} width={'100%'} borderRadius={'15px'} bgcolor={'white'}>
                                <Grid className="HeaderBarChart" display={'flex'} alignItems={'center'}
                                      justifyContent={'space-between'} pb={{xs: '8px', md: '16px'}}>
                                    <Typography color={theme.palette.light} fontWeight={500} variant={secondVariant}>ترافیک
                                        روزانه</Typography>
                                    <Grid className="Up" display={'flex'} alignItems={'center'} gap={'4px'}>
                                        <Typography variant={FourthVariant} fontWeight={700}
                                                    color={'#05CD99'}>+2.45%</Typography>
                                        <img src="/assets/images/Up.svg" alt=""/>
                                    </Grid>
                                </Grid>
                                <Grid className="InformationBarChart" display={'flex'} alignItems={'center'}
                                      gap={{xs: '8px', md: '16px'}} pb={{xs: '8px', md: '25px'}}>
                                    <Typography variant={FiveVariant} color={theme.palette.dark}
                                                fontWeight={700}>1258</Typography>
                                    <Typography variant={secondVariant} color={theme.palette.light} fontWeight={500}>بازدید
                                        کننده </Typography>
                                </Grid>
                                <Grid className="BarChartSingle" display={'flex'} flexDirection={'row-reverse'}
                                      alignItems={'flex-end'} justifyContent={'center'}
                                      gap={{xs: '3px', xxs: '10px', sm: '25px', lg: '10px', g: '25px', xg: '28px'}}>
                                    {
                                        BarChartData.map(
                                            item =>
                                                <Grid key={item.number} className={'BarCharts'} display={'flex'}
                                                      flexDirection={'column'} alignItems={'center'}
                                                      justifyContent={'center'} gap={{xs: '8px', md: '16px'}}>
                                                    <Grid className={'Bar'} width={{xs: '10px', xxs: '13px'}}
                                                          style={{background: linearOne}} borderRadius={'60px 60px 0 0'}
                                                          height={`${item.value}px`}></Grid>
                                                    <Typography variant={FourthVariant} color={theme.palette.two}
                                                                fontWeight={700}>
                                                        {toPersianNum(item.number)}
                                                    </Typography>
                                                </Grid>
                                        )
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={'CheckTable'}
                              mb={{xs: '16px', md: 0}}
                              p={{xs: '21px 12px', xxs: '21px 24px', xg: '21px 60px 35px 32px'}} height={{lg: '345px'}}
                              bgcolor={'white'} borderRadius={{xs: '15px', md: '20px'}} width={'100%'}>
                            <Grid className={'HeaderCheckTable'} display={'flex'} alignItems={'center'}
                                  justifyContent={'space-between'} pb={{xs: '12px', md: '25px'}}>
                                <Typography variant={ThirdVariant} color={theme.palette.dark}
                                            fontWeight={700}>جدول بررسی</Typography>
                                <ChartMoreOption/>
                            </Grid>
                            <Grid maxHeight={{xs: '126px', md: '232px'}} sx={{
                                overflowY: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }}>
                                <CheckTable/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={'Calender'} sx={{display: {lg: 'grid'}, gridTemplateColumns: '1fr 1fr'}}
                          gap={'16px'}>
                        <Grid className={'CalenderAndTasks'}
                              sx={{display: {md: 'grid'}, gridTemplateColumns: '1fr 1fr'}}
                              gap={'16px'}>
                            <Calender/>
                            <Grid className={'TasksTable'} bgcolor={'white'} borderRadius={'15px'}
                                  p={{
                                      xs: '8px 12px',
                                      md: '25px 15px 39px 15px',
                                      lg: '25px 19px 39px 19px',
                                      xg: '30px 36px 30px 48px'
                                  }}
                                  height={{lg: '345px'}} width={'100%'}
                            >
                                <Grid className="HeaderTasks" display={'flex'} alignItems={'center'}
                                      justifyContent={'space-between'} pb={'32px'}>
                                    <Grid className="CheckTask" display={'flex'} alignItems={'center'}
                                          justifyContent={'center'} gap={{xs: '3px', xxs: '12px'}}>
                                        <Grid className="CheckInput" width={{xs: '38px', xxs: '38px'}}
                                              height={{xs: '38px', xxs: '38px'}} borderRadius={'50%'} display={'flex'}
                                              alignItems={'center'} justifyContent={'center'}
                                              bgcolor={theme.palette.six}>
                                            <label htmlFor="Tasks"></label>
                                            <input type="checkbox" id="Tasks" style={{width: '20px', height: '20px'}}
                                                   checked={mainCheckboxTask}
                                                   onChange={handleMainCheckboxChange}
                                                   color={theme.palette.main}
                                            />
                                        </Grid>
                                        <Typography variant={SixVariant} fontWeight={700} color={theme.palette.dark}
                                                    className="TaskTextMax">تسک ها</Typography>
                                    </Grid>
                                    <ChartMoreOption/>
                                </Grid>
                                <Grid className={'AllTask'} maxHeight={'216px'} sx={{
                                    overflowY: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                                        display: 'none',
                                    },
                                }}>
                                    {
                                        dataTask.map(
                                            (item, index) =>
                                                <Grid key={item.id} pb={'24px'} display={'flex'} alignItems={'center'}
                                                      justifyContent={'space-between'}>
                                                    <Grid display={'flex'} alignItems={'center'}
                                                          justifyContent={'flex-start'} gap={{xs: '8px', xxs: '16px'}}>
                                                        <input type={'checkbox'} id={`input-${item.id}`}
                                                               style={{width: width, height: width}}
                                                               checked={taskStates[index]}
                                                               onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                                                        />
                                                        <label htmlFor={`input-${item.id}`}>
                                                            <Typography variant={sevenVariant}
                                                                        color={taskStates[index] ? theme.palette.dark : theme.palette.three}
                                                                        fontWeight={taskStates[index] ? 700 : 400}
                                                            >
                                                                {item.text}
                                                            </Typography>
                                                        </label>
                                                    </Grid>
                                                    <Grid display={'flex'} alignItems={'center'}
                                                          justifyContent={'center'}>
                                                        <img src={'/assets/images/dragIndicator.svg'}/>
                                                    </Grid>
                                                </Grid>
                                        )
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={'ComplexTable'}></Grid>
                    </Grid>
                    <Grid className={'ButtonNotification'}></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Home
