import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";

const TopSellers = () => {

    const theme = useTheme()

    let variant = 'h6';

    let secondVariant = 'subtitle1'


    let paddingBottom = '16px'


    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    if (isXs) {
        variant = 'h6';
        secondVariant = 'subtitle1'
        let paddingBottom = '16px'

    } else if (isMd) {
        variant = 'h2';
        secondVariant = 'h6'
        let paddingBottom = '24px'


    }

    const TopSellersData = [
        {id:1 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'30%'},
        {id:2 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'30%'},
        {id:3 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'30%'},
        {id:4 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'30%'},
        {id:5 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'30%'},
        {id:6 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'30%'},
        {id:7 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'70%'},
        {id:7 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'70%'},
        {id:7 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'70%'},
        {id:7 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'70%'},
        {id:7 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'70%'},
        {id:7 , name:'البرز سیستم' , image:'/assets/images/TopSellers.png' , lorem:'9821' , grade:'70%'},
    ]

    return (
        <Grid className="BodyTable" maxHeight={{xs: '300px', lg: '392px'}} sx={{
            overflowY: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}>
            <table>
                <thead style={{paddingBottom: '12px'}}>
                <tr>
                    <th className="Name">
                        <Grid pl={{
                            xs: '108px',
                            xxs: '150px',
                            sm: '350px',
                            md: '220px',
                            l: '290px',
                            lg: '105px',
                            g: '135px',
                            xg: '190px' ,
                            xl:'210px'
                        }}
                              pb={{xs: '12px', l: '28px'}}>
                            <Typography textAlign={'right'} variant={secondVariant} fontWeight={500}
                                        color={theme.palette.light}>نام
                            </Typography>
                        </Grid>
                    </th>
                    <th>
                        <Grid className="Advance"
                              pl={{
                                  xs: '39px',
                                  xxs: '49px',
                                  sm: '150px',
                                  l: '165px',
                                  lg: '17px',
                                  g: '55px',
                                  xg: '76px' ,
                                  xl:'85px'
                              }}
                              pb={{xs: '12px', l: '28px'}}>
                            <Typography textAlign={'right'} variant={secondVariant} fontWeight={500}
                                        color={theme.palette.light}>لورم
                            </Typography>
                        </Grid>
                    </th>
                    <th>
                        <Grid className="Date"
                              pb={{xs: '12px', l: '28px'}}>
                            <Typography textAlign={'right'} variant={secondVariant} fontWeight={500}
                                        color={theme.palette.light}>رتبه بندی
                            </Typography>
                        </Grid>
                    </th>

                </tr>
                </thead>
                <tbody className="tbody" style={{height:'88px' , overflowY:'auto'}}>
                {TopSellersData.map((item, index) => (
                    <tr key={index} className="rowTable">
                        <td className="titleTable" style={{display:'flex' , alignItems:'center' , justifyContent:'flex-start' , gap:'8px' , paddingBottom:paddingBottom}}>
                            <img src={item.image} alt=""/>
                            <Typography variant={secondVariant} fontWeight={700}>{item.name}</Typography>
                        </td>
                        <td className="DateTable" style={{paddingBottom:paddingBottom}}>
                            <Typography color={theme.palette.light} variant={secondVariant} className="medium" fontWeight={700}>{item.lorem}</Typography>
                        </td>
                        <td className="ProgressTable" style={{paddingBottom:paddingBottom}}>
                            <Grid className="background" position={'relative'} width={{xs:'40px' , xxs:'70px' , md:'100px' , lg:'64px'}} height={'8px'} bgcolor={theme.palette.six} borderRadius={'21px'}>
                                <Grid className="progress" style={{width: item.grade}} position={'absolute'} top={0} right={0} bgcolor={theme.palette.main} borderRadius={'21px'} height={'8px'}></Grid>
                            </Grid>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Grid>
    )
}
export default TopSellers
