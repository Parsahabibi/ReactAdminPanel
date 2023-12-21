import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";

const CheckTable = () => {

    const dataTable = [
        {name: "لورم ایپسوم1", progress: "15%", count: "3.456", date: "25.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
    ];


    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    let variant = 'subtitle1'


    if (isXs) {
        variant = 'subtitle1';
    } else if (isMd) {
        variant = 'h6';
    }


    return (
        <table>
            <thead style={{paddingBottom: '12px'}}>
            <tr>
                {/*<th className="CheckBox"></th>*/}

                <th className="Name">
                    <Grid pl={{xs: '82px', xxs: '95px', sm: '250px', md:'200px' ,  l: '215px', lg: '100px', g: '210px', xg: '196px'}}
                          pb={{xs: '12px', l: '28px'}}>
                        <Typography textAlign={'right'} variant={variant} fontWeight={500}
                                    color={theme.palette.light}>نام
                        </Typography>
                    </Grid>
                </th>
                <th>
                    <Grid className="Advance"
                          pl={{xs: '7px', xxs: '24px', sm: '110px', md:'80px' ,  l: '115px', lg: '25px', g: '65px', xg: '116px'}}
                          pb={{xs: '12px', l: '28px'}}>
                        <Typography textAlign={'right'} variant={variant} fontWeight={500}
                                    color={theme.palette.light}>پیشرفت
                        </Typography>
                    </Grid>
                </th>
                <th>
                    <Grid className="Count"
                          pl={{xs: '10px', xxs: '35px', sm: '95px', md:'65px' , l: '95px', lg: '40px', g: '80px', xg: '141px'}}
                          pb={{xs: '12px', l: '28px'}}>
                        <Typography textAlign={'right'} variant={variant} fontWeight={500}
                                    color={theme.palette.light}>تعداد
                        </Typography>
                    </Grid>
                </th>
                <th>
                    <Grid className="Date"
                          pb={{xs: '12px', l: '28px'}}>
                        <Typography textAlign={'right'} variant={variant} fontWeight={500}
                                    color={theme.palette.light}>تاریخ
                        </Typography>
                    </Grid>
                </th>

            </tr>
            </thead>
            <tbody style={{height:'88px' , overflowY:'auto'}}>
            {dataTable.map((item, index) => (
                <tr key={index} style={{marginBottom:'16px'}}>
                    <td className="CheckBox"
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start' , paddingBottom:'16px' , gap:isMd? '12px' : '0px' }}>
                        <input type="checkbox"  id={`Check${index}`} style={{width:'20px' , height:'20px' , accentColor:theme.palette.main , cursor:'pointer'}}/>
                        <label htmlFor={`Check${index}`} style={{cursor:'pointer'}}>
                            <Typography variant={'subtitle1'} fontWeight={500} color={theme.palette.three}>{item.name}</Typography>
                        </label>
                    </td>
                    <td style={{ paddingBottom:'16px'}}>
                        <Typography variant={'subtitle1'} fontWeight={700} color={theme.palette.dark}>
                            {item.progress}
                        </Typography>
                    </td>
                    <td style={{ paddingBottom:'16px'}}>
                        <Typography variant={'subtitle1'} fontWeight={700} color={theme.palette.dark}>
                            {item.count}
                        </Typography>
                    </td>
                    <td style={{ paddingBottom:'16px'}}>
                        <Typography variant={'subtitle1'} fontWeight={700} color={theme.palette.dark}>
                            {item.date}
                        </Typography>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default CheckTable
