import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import ChartMoreOption from "../ChartMoreOption";

const ComplexTable = ({paddingLeftName , paddingLeftStatus , paddingLeftDate , flag}) => {


    const theme = useTheme()


    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isUp400px = useMediaQuery('(min-width: 400px)');
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isUpXl = useMediaQuery((theme) => theme.breakpoints.up('xl'));


    let variant = 'h6';

    let secondVariant = 'subtitle1'

    let paddingBottom = '16px'

    let gap = isUp400px ? '4px' : '2px'

    let thirdVariant = 'subtitle2'

    let paddingRight = isUpXl && flag ? '66px' : '0px'

    if (isXs){
        thirdVariant = 'subtitle2'
    }
    if (isUp400px){
        thirdVariant = 'subtitle1'
    }
    if (isMd){
        thirdVariant = 'h6'
    }



    if (isXs) {
        variant = 'h6';
        secondVariant = 'subtitle1'
         paddingBottom = '16px'
    } else if (isMd) {
        variant = 'h2';
        secondVariant = 'h6'
         paddingBottom = '24px'
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
              height={{xs:'195px' , md: '345px'}}
              borderRadius={'15px'}
              width={'100%'}
        >
            <Grid className="HeaderTable" display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                  pb={{xs: '12px', md: '25px'}}>
                <Typography variant={variant} color={theme.palette.dark} fontWeight={700}>جدول کمپلکس</Typography>
                <ChartMoreOption/>
            </Grid>
            <Grid className="BodyTable" maxHeight={{xs: '126px', md: '232px'}} sx={{
                overflow: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}>
                <table style={{paddingRight:paddingRight}}>
                    <thead style={{paddingBottom: '12px'}}>
                    <tr>
                        <th className="Name">
                            <Grid pl={paddingLeftName}
                                  pb={{xs: '12px', l: '28px'}}>
                                <Typography textAlign={'right'} variant={secondVariant} fontWeight={500}
                                            color={theme.palette.light}>نام
                                </Typography>
                            </Grid>
                        </th>
                        <th>
                            <Grid className="Advance"
                                  pl={paddingLeftStatus}
                                  pb={{xs: '12px', l: '28px'}}>
                                <Typography textAlign={'right'} variant={secondVariant} fontWeight={500}
                                            color={theme.palette.light}>وضعیت
                                </Typography>
                            </Grid>
                        </th>
                        <th>
                            <Grid className="Count"
                                  pl={paddingLeftDate}
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
                                <Typography variant={thirdVariant} fontWeight={700}>{item.title}</Typography>
                            </td>
                            <td className="status" style={{display:'flex' , alignItems:'center' , justifyContent:'flex-start' , gap:gap , paddingBottom:paddingBottom}}>
                                <img src={item.statusImage} alt=""/>
                                <Typography variant={thirdVariant} className="medium" fontWeight={700}>{item.statusText}</Typography>
                            </td>
                            <td className="DateTable" style={{paddingBottom:paddingBottom}}>
                                <Typography variant={thirdVariant} className="medium" fontWeight={700}>{item.dateText}</Typography>
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
