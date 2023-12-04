import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import ChartMoreOption from "../ChartMoreOption";

const ComplexTable = () => {

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

    const dataTableComplex = [
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "assets/images/cancel.svg",
            statusText: "غیرفعال",
            statusSubText: "غیرفعال",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "100%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "assets/images/check_circle.svg",
            statusText: "تایید شده",
            statusSubText: "تایید شده",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "20%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "assets/images/error.svg",
            statusText: "خطا",
            statusSubText: "خطا",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "50%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "assets/images/error.svg",
            statusText: "خطا",
            statusSubText: "خطا",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "50%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "/assets/images/error.svg",
            statusText: "خطا",
            statusSubText: "خطا",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "50%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "assets/images/error.svg",
            statusText: "خطا",
            statusSubText: "خطا",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "50%"
        },
    ];

    return (
        <Grid className={'ComplexTable'} bgcolor={'white'}
              p={{xs: '21px 12px', xxs: '21px 24px'}}
              height={{lg: '345px'}}
              borderRadius={'15px'}
              width={'100%'}
        >
            <Grid className="HeaderTable" display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                  pb={{xs: '12px', md: '25px'}}>
                <Typography variant={variant} color={theme.palette.dark} fontWeight={700}>جدول کمپلکس</Typography>
                <ChartMoreOption/>
            </Grid>
            <Grid className="BodyTable" maxHeight={{xs: '126px', md: '232px'}} sx={{
                overflowY: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}>
                <table>
                    <thead style={{paddingBottom: '12px'}}>
                    <tr>
                        <th className="Name">
                            <Grid pl={{
                                xs: '53px',
                                xxs: '63px',
                                sm: '250px',
                                md: '220px',
                                l: '186px',
                                lg: '250px',
                                g: '161px',
                                xg: '203px'
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
                                      xs: '41px',
                                      xxs: '49px',
                                      sm: '110px',
                                      l: '115px',
                                      lg: '160px',
                                      g: '60px',
                                      xg: '116px'
                                  }}
                                  pb={{xs: '12px', l: '28px'}}>
                                <Typography textAlign={'right'} variant={secondVariant} fontWeight={500}
                                            color={theme.palette.light}>وضعیت
                                </Typography>
                            </Grid>
                        </th>
                        <th>
                            <Grid className="Count"
                                  pl={{
                                      xs: '40px',
                                      xxs: '49px',
                                      sm: '90px',
                                      l: '95px',
                                      lg: '170px',
                                      g: '100px',
                                      xg: '141px'
                                  }}
                                  pb={{xs: '12px', l: '28px'}}>
                                <Typography textAlign={'right'} variant={secondVariant} fontWeight={500}
                                            color={theme.palette.light}>تاریخ
                                </Typography>
                            </Grid>
                        </th>
                        <th>
                            <Grid className="Date"
                                  pb={{xs: '12px', l: '28px'}}>
                                <Typography textAlign={'right'} variant={secondVariant} fontWeight={500}
                                            color={theme.palette.light}>پیشرفت
                                </Typography>
                            </Grid>
                        </th>

                    </tr>
                    </thead>
                    <tbody className="tbody" style={{height:'88px' , overflowY:'auto'}}>
                    {dataTableComplex.map((item, index) => (
                        <tr key={index} className="rowTable">
                            <td className="titleTable" style={{paddingBottom:paddingBottom}}>
                                <Typography variant={secondVariant} fontWeight={700}>{item.title}</Typography>
                            </td>
                            <td className="status" style={{display:'flex' , alignItems:'center' , justifyContent:'flex-start' , gap:'5px' , paddingBottom:paddingBottom}}>
                                <img src={item.statusImage} alt=""/>
                                <Typography variant={secondVariant} className="medium" fontWeight={700}>{item.statusText}</Typography>
                            </td>
                            <td className="DateTable" style={{paddingBottom:paddingBottom}}>
                                <Typography variant={secondVariant} className="medium" fontWeight={700}>{item.dateText}</Typography>
                            </td>
                            <td className="ProgressTable" style={{paddingBottom:paddingBottom}}>
                                <Grid className="background" position={'relative'} width={{xs:'40px' , xxs:'70px' , md:'100px'}} height={'8px'} bgcolor={theme.palette.six} borderRadius={'21px'}>
                                    <Grid className="progress" style={{width: item.progressWidth}} position={'absolute'} top={0} right={0} bgcolor={theme.palette.main} borderRadius={'21px'} height={'8px'}></Grid>
                                </Grid>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>


            </Grid>
        </Grid>
    )
}
export default ComplexTable
