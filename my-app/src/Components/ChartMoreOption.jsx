import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Link} from "react-router-dom";

const ChartMoreOption = ({display}) => {

    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'subtitle1';


    if (isXs) {
        variant = 'subtitle1';
    } else if (isMd) {
        variant = 'h5';
    }

    const itemsOptionData = [
        {id: 1, title: 'نمودار دایره ای', link: ''},
        {id: 2, title: 'نمودار ستونی', link: ''},
        {id: 3, title: 'جداول ارزیابی', link: ''}
    ]

    return (
        <Grid className={'itemsOption'}
              p={{xs: '20px 20px 4px 100px', md: '40px 40px 34px 166px'}}
              position={'absolute'} top={{xs: '28px', md: '37px'}} left={0} zIndex={10}
              bgcolor={'white'} borderRadius={'16px'} border={'1px solid #B0BBD5'}
              boxShadow={5}
              display={display === true ? 'block' : 'none'}
        >
            {
                itemsOptionData.map(
                    item =>
                        <Link to={item.link}>
                            <Typography whiteSpace={'nowrap'} variant={variant} pb={item.id === 3 ? '0' : '16px'}
                                        fontWeight={500}>{item.title}</Typography>
                        </Link>
                )
            }
        </Grid>
    )
}
export default ChartMoreOption
