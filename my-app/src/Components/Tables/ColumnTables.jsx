import React, {useState} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";

const ColumnTables = () => {

    const columnTableData = [
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },
        {
            title: "لورم ایپسوم",
            percent: "17.5%",
            count: "2.458",
            date: "24.فرو.1402"
        },

    ];


    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));

    const isUp400px = useMediaQuery('(min-width: 400px)');

    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const isUpXl = useMediaQuery((theme) => theme.breakpoints.up('xl'));

    let ItemsFont = isUp400px ? 'subtitle1' : 'subtitle2'

    let HeaderTables = isMd ? 'h6' : 'subtitle1'

    let displayArrow = isMd ? 'block' : 'none'

    let paddingRight = isUpXl ? '66px' : '0px'

    let thirdVariant = 'subtitle2'

    if (isXs) {
        thirdVariant = 'subtitle2'
    }
    if (isUp400px) {
        thirdVariant = 'subtitle1'
    }
    if (isMd) {
        thirdVariant = 'h6'
    }

    return (
        <Grid maxHeight={{xs: '346px', md:'300px' ,  lg: '232px'}} sx={{
            overflow: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}>
            <table style={{borderCollapse: 'separate', borderSpacing: '0 16px', paddingRight: paddingRight}}>
                <thead>
                <tr>
                    <th className="TitleMainReviewTable TitleMainDevelopTable">
                        <Grid className="TitleReviewTable TitleDevelopTable" display={'flex'} alignItems={'center'}
                              justifyContent={'flex-start'} gap={'0px'} pl={{
                            xs: '50px',
                            xxs: '75px',
                            sm: '180px',
                            md: '90px',
                            lg: '58px',
                            g: '100px',
                            xl: '137px'
                        }}>
                            <Typography variant={HeaderTables} color={theme.palette.light}
                                        fontWeight={500}>عنوان</Typography>
                            <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                        </Grid>
                    </th>
                    <th className="ProgressMainReviewTable TitleMainReviewTable SystemMainDevelopTable">
                        <Grid className="ProgressReviewTable TitleReviewTable SystemDevelopTable" display={'flex'}
                              alignItems={'center'} justifyContent={'flex-start'} gap={'0px'} pl={{
                            xs: '30px',
                            xxs: '44px',
                            sm: '120px',
                            md: '90px',
                            lg: '40px',
                            g: '85px',
                            xl: '122px'
                        }}>
                            <Typography variant={HeaderTables} color={theme.palette.light}
                                        fontWeight={500}>لورم</Typography>
                            <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                        </Grid>
                    </th>
                    <th className="NumberMainReviewTable TitleMainReviewTable DateMainDevelopTable">
                        <Grid className="NumberReviewTable TitleReviewTable DateDevelopTable" display={'flex'}
                              alignItems={'center'} justifyContent={'flex-start'} gap={'0px'} pl={{
                            xs: '20px',
                            xxs: '45px',
                            sm: '135px',
                            md: '90px',
                            lg: '30px',
                            g: '85px',
                            xl: '122px'
                        }}>
                            <Typography variant={HeaderTables} color={theme.palette.light}
                                        fontWeight={500}> تعداد</Typography>
                            <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                        </Grid>
                    </th>
                    <th className="DateMainReviewTable TitleMainReviewTable">
                        <Grid className="DateReviewTable TitleReviewTable" display={'flex'} alignItems={'center'}
                              justifyContent={'flex-start'} gap={'0px'}>
                            <Typography variant={HeaderTables} color={theme.palette.light}
                                        fontWeight={500}>تاریخ</Typography>
                            <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                        </Grid>
                    </th>
                </tr>
                </thead>
                <tr className="Spacing" style={{width:'100%' ,  height:'5px' , backgroundColor:'transparent'}}></tr>
                <tbody className="Column">
                {columnTableData.map((item, index) => (
                    <tr key={index}>
                        <td className="TitleColumnTable" style={{color: '#6D7175'}}>
                            <Typography variant={thirdVariant} fontWeight={isMd ? 700 : 500} color={theme.palette.dark}>
                                {item.title}
                            </Typography>
                        </td>
                        <td className="PercentColumnTable">
                            <Typography variant={thirdVariant} fontWeight={700} color={theme.palette.dark}>
                                {item.percent}
                            </Typography>
                        </td>
                        <td className="CountColumnTable">
                            <Typography variant={thirdVariant} fontWeight={700} color={theme.palette.dark}>
                                {item.count}
                            </Typography>
                        </td>
                        <td className="DateColumnTable">
                            <Typography variant={thirdVariant} fontWeight={700} color={theme.palette.dark}>
                                {item.date}
                            </Typography>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Grid>
    )
}
export default ColumnTables
