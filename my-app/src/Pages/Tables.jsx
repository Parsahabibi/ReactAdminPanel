import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header/Header";
import ChartMoreOption from "../Components/ChartMoreOption";
import ReviewTable from "../Components/Tables/ReviewTable";
import DevelopTables from "../Components/Tables/DevelopTables";

const Tables = () => {

    const theme = useTheme()


    const isUp400px = useMediaQuery((theme) => theme.breakpoints.up('xxs'));
    const isUpXl = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const isUpLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const isUpG = useMediaQuery((theme) => theme.breakpoints.up('g'));
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let fontSizeTitle = isUp400px ? 'subtitle1' : 'subtitle2'


    // let FontSizeTitleLarge = isUpXl ? 'h2' : 'h3'
    //
    // let FontSizeDescription = isUpXl ? 'h6' : 'h5'

    let HeaderTables = isMd ? 'h2' : 'h6'

    // let TopSellersVariant = isUpLg ? 'h3' : 'h5';
    //
    // let AllButton = isUpLg ? 'h6' : 'subtitle1';
    //
    // let TitleHistoryCard = isUpG ? 'h6' : 'subtitle1';
    //
    // let SubTitleHistoryCard = isUpG ? 'h6' : 'subtitle2'
    //
    // let PriceAndTimeHistoryCard = isUpG ? 'h5' : 'subtitle1'
    //
    // let padding = isMd ? '11px 32px' : '4px 10px'
    //
    // let fontSize = isMd ? '16px' : '10px'
    //
    // let display = isMd ? 'block' : 'none'
    //
    // let displayXs = isMd ? 'none' : 'block'

    return (
        <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'} display={'flex'}
              alignItems={'flex-start'} justifyContent={'space-between'}>
            <Grid display={{xs: 'none', md: 'block'}}>
                <Dashboard id={3} marginLeft={154}/>
            </Grid>
            <Grid className={'MainDashboard'} width={'100%'}>
                <Header id={3} marginLeft={154} MainTitle={'جداول'} SubTitle={'صفحات / جداوله'}/>
                <Grid className={'MainTablesPage'} p={'0px 18px 32px 18px'}>
                    <Typography display={{xs: 'block', md: "none"}} variant={'h3'} color={theme.palette.dark}
                                fontWeight={700} pb={'20px'}>جداول</Typography>
                    <Grid className={'tables'}>
                        <Grid className={'DevelopmentAndReviewTable'} display={'flex'} alignItems={'flex-start'}
                              justifyContent={'space-between'} flexDirection={{xs: 'column', lg: 'row'}} gap={'20px'}
                              pb={{lg: '20px'}}>
                            <Grid className={'ReviewTable'} p={{xs: '16px 21px 24px 21px', xxs: '16px 30px 24px 21px'}}
                                  bgcolor={'white'} borderRadius={'20px'} width={{xs: '100%', lg: '49%', g: '50%'}}
                                  height={{xs: '420px', lg: '579px'}}>
                                <Grid className={'HeaderReviewTable'} display={'flex'} alignItems={'center'}
                                      justifyContent={'space-between'} pb={'16px'}>
                                    <Typography variant={HeaderTables} fontWeight={700} color={theme.palette.dark}>جدول
                                        بررسی</Typography>
                                    <ChartMoreOption/>
                                </Grid>
                                <ReviewTable/>
                            </Grid>
                            <Grid className={'DevelopmentTable'} mb={{xs:'20px' , md:'0px'}}
                                  p={{xs: '16px 21px 24px 21px', xxs: '16px 30px 24px 21px'}} bgcolor={'white'}
                                  borderRadius={'20px'} width={{xs: '100%', lg: '49%', g: '50%'}}
                                  height={{xs: '420px', lg: '579px'}}>
                                <Grid className={'HeaderDevelopmentTable'} display={'flex'} alignItems={'center'}
                                      justifyContent={'space-between'} pb={'16px'}>
                                    <Typography variant={HeaderTables} fontWeight={700} color={theme.palette.dark}>جدول
                                        توسعه</Typography>
                                    <ChartMoreOption/>
                                </Grid>
                                <DevelopTables />
                            </Grid>
                        </Grid>
                        <Grid className={'ComplexAndColumnTable'} display={'flex'} alignItems={'flex-start'}
                              justifyContent={'space-between'} flexDirection={{xs: 'column', lg: 'row'}} gap={'20px'}>
                            <Grid className={'ComplexTable'} p={{xs: '16px 21px 24px 21px', xxs: '16px 30px 24px 21px'}}
                                  bgcolor={'white'} borderRadius={'20px'} width={{xs: '100%', lg: '49%', g: '50%'}}
                                  height={{xs: '250px', md: '280px', lg: '345px'}}>
                                <Grid className={'HeaderComplexTable'} display={'flex'} alignItems={'center'}
                                      justifyContent={'space-between'}>
                                    <Typography variant={HeaderTables} fontWeight={700} color={theme.palette.dark}> جدول
                                        کمپلکس</Typography>
                                    <ChartMoreOption/>
                                </Grid>
                                <Grid className={'TableComplex'}></Grid>
                            </Grid>
                            <Grid className={'ColumnTable'} p={{xs: '16px 21px 24px 21px', xxs: '16px 30px 24px 21px'}}
                                  bgcolor={'white'} borderRadius={'20px'} width={{xs: '100%', lg: '49%', g: '50%'}}
                                  height={{xs: '250px', md: '280px', lg: '345px'}}>
                                <Grid className={'HeaderColumnTable'} display={'flex'} alignItems={'center'}
                                      justifyContent={'space-between'}>
                                    <Typography variant={HeaderTables} fontWeight={700} color={theme.palette.dark}>جدول
                                        ستونی</Typography>
                                    <ChartMoreOption/>
                                </Grid>
                                <Grid className={'TableColumn'}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Tables
