import React, {useEffect, useState} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header/Header";
import {toPadding} from "chart.js/helpers";
import {Link} from "react-router-dom";
import ShoppingCard from "../Components/ShoppingCard";
import TopSellers from "../Components/Tables/TopSellers";

const Shop = () => {


    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };


    const storedActive = localStorage.getItem('active');
    const [active, setActive] = useState(storedActive ? parseInt(storedActive, 10) : 1);


    const [show, setShow] = useState(false)


    const ItemsData = [
        {id: 1, title: 'هنر'},
        {id: 2, title: 'خانواده'},
        {id: 3, title: 'ورزش'},
        {id: 4, title: 'موسیقی'},
        {id: 5, title: 'خانواده'},
        {id: 6, title: 'ورزش'},
    ]


    const HistoryData = [
        {
            id: 1,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        {
            id: 2,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        {
            id: 3,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        {
            id: 4,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        {
            id: 5,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        {
            id: 6,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        {
            id: 7,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        {
            id: 8,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        {
            id: 9,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        {
            id: 10,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم متن',
            price: '120 تومان',
            Time: '30ثانیه قبل',
            image: '/assets/images/HistoryImage.png'
        },
        // {id:11 , title:'لورم ایپسوم' , subTitle:'لورم ایپسوم متن' , price:'120 تومان' , Time:'30ثانیه قبل'},
        // {id:12 , title:'لورم ایپسوم' , subTitle:'لورم ایپسوم متن' , price:'120 تومان' , Time:'30ثانیه قبل'},
        // {id:13 , title:'لورم ایپسوم' , subTitle:'لورم ایپسوم متن' , price:'120 تومان' , Time:'30ثانیه قبل'},
        // {id:14 , title:'لورم ایپسوم' , subTitle:'لورم ایپسوم متن' , price:'120 تومان' , Time:'30ثانیه قبل'},
        // {id:15 , title:'لورم ایپسوم' , subTitle:'لورم ایپسوم متن' , price:'120 تومان' , Time:'30ثانیه قبل'},
    ]


    const ShoppingCardData = [
        {
            id: 1,
            price: 123,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم',
            img: '/assets/images/ShoppingImage.png',
            count: 15
        },
        {
            id: 1,
            price: 321,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم',
            img: '/assets/images/ShoppingImage.png',
            count: 18
        },
        {
            id: 1,
            price: 456,
            title: 'لورم ایپسوم',
            subTitle: 'لورم ایپسوم',
            img: '/assets/images/ShoppingImage.png',
            count: 12
        },
    ]


    const theme = useTheme()

    const isUp400px = useMediaQuery((theme) => theme.breakpoints.up('xxs'));
    const isUpXl = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const isUpLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const isUpG = useMediaQuery((theme) => theme.breakpoints.up('g'));
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let fontSizeTitle = isUp400px ? 'subtitle1' : 'subtitle2'


    let FontSizeTitleLarge = isUpXl ? 'h2' : 'h3'

    let FontSizeDescription = isUpXl ? 'h6' : 'h5'

    let FontSizeTrendOfTheDays = isUpLg ? 'h2' : 'h6'

    let TopSellersVariant = isUpLg ? 'h3' : 'h5';

    let AllButton = isUpLg ? 'h6' : 'subtitle1';

    let TitleHistoryCard = isUpG ? 'h6' : 'subtitle1';

    let SubTitleHistoryCard = isUpG ? 'h6' : 'subtitle2'

    let PriceAndTimeHistoryCard = isUpG ? 'h5' : 'subtitle1'

    let padding = isMd ? '11px 32px' : '4px 10px'

    let fontSize = isMd ? '16px' : '10px'

    let display = isMd ? 'block' : 'none'

    let displayXs = isMd ? 'none' : 'block'

    useEffect(() => {
        localStorage.setItem('active', active.toString());
    }, [active]);

    return (
        <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'} display={'flex'}
              alignItems={'flex-start'} justifyContent={'space-between'}>
            <Grid display={{xs: 'none', md: 'block'}}>
                <Dashboard id={2} marginLeft={157}/>
            </Grid>
            <Grid className={'MainDashboard'} width={'100%'}>
                <Header id={2} marginLeft={157} MainTitle={'فروشگاه'} SubTitle={'صفحات / فروشگاه'}/>
                <Grid className={'MainShop'} width={'100%'} p={'6px 18px 32px 18px'} display={{xs: 'block', lg: 'flex'}}
                      alignItems={'flex-start'} justifyContent={'space-between'} gap={{lg: '20px'}}>
                    <Grid className={'MarketBody'} width={{xs: '100%', g: '68%'}} height={'100%'}
                          mb={{xs: '32px', lg: '0px'}}>
                        <Grid className={'Banner'} height={{xs: '137px', md: '350px'}} width={'100%'}
                              mb={{xs: '20px', lg: '40px'}}
                              position={'relative'}>
                            <img src={'/assets/images/MobileBanner.png'} alt={''}
                                 style={{borderRadius: '25px', display: displayXs, width: '100%', height: '100%'}}/>
                            <img src={'/assets/images/DesktopBanner.png'} alt={''}
                                 style={{borderRadius: '15px', display: display, width: '100%', height: '100%'}}/>
                            <Grid position={'absolute'} top={{xs: '26px', md: '80px' , xl:'45px'}} right={{xs: '15px', g: '45px'}}>
                                <Typography variant={fontSizeTitle} display={{xs: 'block', md: 'none'}}
                                            width={{xs: '143px', xxs: '172px'}} color={'white'} lineHeight={'25px'}
                                            pb={'20px'} fontWeight={700}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                    از</Typography>
                                <Typography variant={FontSizeTitleLarge} display={{xs: 'none', md: 'block'}}
                                            width={{md: '290px'}} color={'white'} lineHeight={'42px'} pb={'18px'}
                                            fontWeight={700}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                    چاپ</Typography>
                                <Typography variant={FontSizeDescription} display={{xs: 'none', md: 'block'}}
                                            width={{md: '332px'}} color={'white'} lineHeight={'28px'}
                                            pb={{md: '24px'}} fontWeight={500}>لورم ایپسوم متن ساختگی با تولید
                                    سادگی نامفهوم از صنعت چاپ، و با استفاده
                                    از</Typography>
                                <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'}
                                      gap={{xs: '16px', md: '38px'}}>
                                    <button style={{
                                        padding: padding,
                                        fontSize: '12px',
                                        backgroundColor: 'white',
                                        border: 'none',
                                        borderRadius: '16px',
                                        cursor: 'pointer',
                                        color: theme.palette.dark
                                    }}>ببین و بگرد!
                                    </button>
                                    <Link to={''}
                                          style={{
                                              textDecoration: 'none',
                                              fontSize: fontSize,
                                              fontWeight: 500,
                                              color: 'white'
                                          }}>ویدیو رو
                                        ببین</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={'trendsOfTheDay'} mb={'47px'}>
                            <Grid display={{lg: 'flex'}} alignItems={'center'} justifyContent={'space-between'}
                                  pb={{lg: '20px'}}>
                                <Typography variant={FontSizeTrendOfTheDays} fontWeight={700}
                                            pb={{xs: '8px', lg: '0px'}}
                                            color={theme.palette.dark}>ترندهای روز</Typography>
                                <Grid display={'flex'} alignItems={'center'}
                                      justifyContent={{xs: 'space-between', lg: 'flex-start'}}
                                      pb={{xs: '16px', lg: '0px'}}
                                      gap={{xs: '6px', lg: '20px'}} sx={{
                                    overflowX: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                                        display: 'none',
                                    },
                                }}>
                                    {
                                        ItemsData.map(
                                            item =>
                                                <Grid key={item.id}
                                                      style={{cursor:'pointer'}}
                                                      bgcolor={active === item.id ? 'white' : 'transparent'}
                                                      borderRadius={'16px'}
                                                      p={{xs: '4px 17px', md: '4px 26px'}}
                                                      display={{
                                                          xs: 'flex',
                                                          lg: item.id === 5 || item.id === 6 ? 'none' : 'flex'
                                                      }}
                                                      alignItems={'center'} justifyContent={'center'} onClick={() => {
                                                    setActive(item.id)
                                                }}>
                                                    <Typography color={theme.palette.main} variant={'h6'}
                                                                fontWeight={500}>{item.title}</Typography>
                                                </Grid>
                                        )
                                    }
                                </Grid>
                            </Grid>
                            <Grid className={'ShoppingCard'} display={'flex'} alignItems={'center'}
                                  justifyContent={{xs: 'center', sm: 'space-between'}} flexWrap={'wrap'} gap={'20px'}>
                                {
                                    ShoppingCardData.map(
                                        item =>
                                            <ShoppingCard count={item.count} price={item.price} img={item.img}
                                                          subTitle={item.subTitle} Title={item.title}/>
                                    )
                                }
                            </Grid>
                        </Grid>
                        <Grid className={'RecentVisits'}>
                            <Grid display={{xs: 'block', md: 'none'}}>
                                {
                                    show ?
                                        <>
                                            <Grid display={{lg: 'flex'}} alignItems={'center'}
                                                  justifyContent={'space-between'}
                                                  pb={{lg: '20px'}}>
                                                <Typography variant={FontSizeTrendOfTheDays} fontWeight={700}
                                                            pb={{xs: '8px', lg: '0px'}}
                                                            color={theme.palette.dark}>بازدیدهای اخیر</Typography>
                                            </Grid>
                                            <Grid className={'ShoppingCard'} display={'flex'} alignItems={'center'}
                                                  justifyContent={{xs: 'center', sm: 'space-between'}} flexWrap={'wrap'}
                                                  gap={'20px'}>
                                                {
                                                    ShoppingCardData.map(
                                                        item =>
                                                            <ShoppingCard count={item.count} price={item.price}
                                                                          img={item.img}
                                                                          subTitle={item.subTitle} Title={item.title}/>
                                                    )
                                                }
                                            </Grid>
                                        </>
                                        :
                                        <Grid className={'showMore'} display={'flex'} alignItems={'center'}
                                              justifyContent={'center'}
                                              onClick={() => {
                                                  setShow(true)
                                              }}
                                        >
                                            <Typography variant={'h6'} color={theme.palette.dark}
                                                        fontWeight={700}>بیشتر</Typography>
                                        </Grid>
                                }
                            </Grid>


                            <Grid display={{xs:'none' , md:'block'}}>
                                <Grid display={{lg: 'flex'}} alignItems={'center'}
                                      justifyContent={'space-between'}
                                      pb={{lg: '20px'}}>
                                    <Typography variant={FontSizeTrendOfTheDays} fontWeight={700}
                                                pb={{xs: '8px', lg: '0px'}}
                                                color={theme.palette.dark}>بازدیدهای اخیر</Typography>
                                </Grid>
                                <Grid className={'ShoppingCard'} display={{xs: 'none', md: 'flex'}} alignItems={'center'}
                                      justifyContent={{xs: 'center', sm: 'space-between'}} flexWrap={'wrap'} gap={'16px'}>
                                    {
                                        ShoppingCardData.map(
                                            item =>
                                                <ShoppingCard count={item.count} price={item.price} img={item.img}
                                                              subTitle={item.subTitle} Title={item.title}/>
                                        )
                                    }
                                </Grid>
                            </Grid>



                        </Grid>
                        <Grid className={'More'}></Grid>
                    </Grid>
                    <Grid className={'SideBarBody'} height={'100%'} width={{g:'32%'}}>
                        <Grid className={'TopSellers'} p={{xs: '16px 21px', md: '18px 32px 62px 21px'}}
                              bgcolor={'white'} borderRadius={'20px'} mb={'20px'} width={{lg: '100%'}}>
                            <Grid className={'HeaderTableTopSellers'} display={'flex'}
                                  alignItems={'flex-start'} justifyContent={'space-between'}
                                  pb={{xs: '24px', lg: '30px'}}>
                                <Typography variant={TopSellersVariant} fontWeight={700} color={theme.palette.dark}>فروشندگان
                                    برتر</Typography>
                                <button style={{
                                    fontSize: AllButton,
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    backgroundColor: theme.palette.one,
                                    color: theme.palette.main,
                                    borderRadius: '70px',
                                    border: 'none',
                                    padding: '4px 29px'
                                }}>همه
                                </button>
                            </Grid>
                            <TopSellers/>
                        </Grid>
                        <Grid className={'History'} p={{xs: '16px 21px', md: '18px 18px 47px 18px'}}
                              bgcolor={'white'} borderRadius={'20px'} mb={'20px'} width={{lg: '100%'}}>
                            <Grid className={'HeaderTableTopSellers'} display={'flex'}
                                  alignItems={'flex-start'} justifyContent={'space-between'}
                                  pb={{xs: '24px', lg: '30px'}}>
                                <Typography variant={TopSellersVariant} fontWeight={700}
                                            color={theme.palette.dark}>تاریخچه</Typography>
                                <button style={{
                                    fontSize: AllButton,
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    backgroundColor: theme.palette.one,
                                    color: theme.palette.main,
                                    borderRadius: '70px',
                                    border: 'none',
                                    padding: '4px 29px'
                                }}>همه
                                </button>
                            </Grid>
                            <Grid className={'HistoryCards'}
                                  maxHeight={{xs: '180px', lg: '586px', g: '497px', xl: '618px'}} sx={{
                                overflowY: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }}>
                                {
                                    HistoryData.map(
                                        item =>
                                            <Grid key={item.id} p={{lg: '21px 7px 21px 7px', xl: '21px 7px 21px 21px'}}
                                                  mx={'5px'} mb={'38px'} borderRadius={'20px'}
                                                  mt={item.id === 1 ? '5px' : '0px'} display={'flex'}
                                                  alignItems={'center'} justifyContent={'space-between'}
                                                  style={{
                                                      cursor: 'pointer',
                                                      boxShadow: hoveredItem === item.id
                                                          ? '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
                                                          : 'none',
                                                  }}
                                                  onMouseEnter={() => handleMouseEnter(item.id)}
                                                  onMouseLeave={handleMouseLeave}>
                                                <Grid display={'flex'} alignItems={'center'}
                                                      justifyContent={'flex-start'} gap={{xs: '8px', xl: '18px'}}>
                                                    <Grid className={'ImageCard'}
                                                          width={{xs: '40px', xxs: '66px', lg: '40px', xl: '66px'}}
                                                          height={{xs: '40px', xxs: '66px', lg: '40px', xl: '66px'}}>
                                                        <img src={item.image} alt={''} width={'100%'} height={'100%'}/>
                                                    </Grid>
                                                    <Grid>
                                                        <Typography variant={TitleHistoryCard} fontWeight={700}
                                                                    color={theme.palette.dark}
                                                                    lineHeight={'20px'}>{item.title}</Typography>
                                                        <Typography variant={SubTitleHistoryCard} fontWeight={500}
                                                                    color={theme.palette.light}>{item.subTitle}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid>
                                                    <Typography variant={PriceAndTimeHistoryCard} fontWeight={700}
                                                                color={theme.palette.dark}>{item.price}</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography variant={PriceAndTimeHistoryCard} fontWeight={500}
                                                                color={theme.palette.light}>{item.Time}</Typography>
                                                </Grid>
                                            </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Shop
