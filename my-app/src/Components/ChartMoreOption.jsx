import React, {useEffect, useRef, useState} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {MoreHoriz} from "./Icons";
import {useSpring , animated} from "@react-spring/web";

const ChartMoreOption = () => {


    const [option, setOption] = useState(false)


    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'subtitle1';

    const padding = isXs ? '20px 20px 20px 100px' : '40px 40px 34px 166px';
    const positionTop = isXs ? '28px' : '37px';

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


    const containerRef = useRef(null);

    const menuRef = useRef(null);


    const optionAnimation = useSpring({
        opacity: option ? 1 : 0,
    });

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setOption(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <Grid className={'option'} position={'relative'} bgcolor={theme.palette.one}
              display={'flex'} alignItems={'center'} justifyContent={'center'}
              style={{cursor: 'pointer'}} width={{xs: '32px', md: '37px'}} borderRadius={'12px'}
              height={{xs: '28px', md: '37px'}}
              ref={containerRef}
        >
            <span onClick={() => {
                setOption(!option)
            }} style={{paddingTop: '5px'}}>
                 <MoreHoriz fill={theme.palette.main}/>
            </span>

            <animated.div
                className={'itemsOption'}
                style={{
                    opacity: optionAnimation.opacity,
                    transformOrigin: 'top center',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    border: '1px solid #B0BBD5',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
                    position: 'absolute',
                    top: positionTop,
                    left: 0,
                    padding,
                    zIndex: 20,
                }}
                ref={menuRef}
            >
                {itemsOptionData.map((item) => (
                    <Link key={item.id} to={item.link}>
                        <Typography
                            whiteSpace={'nowrap'}
                            variant={variant}
                            pb={item.id === 3 ? '0' : '16px'}
                            fontWeight={500}
                        >
                            {item.title}
                        </Typography>
                    </Link>
                ))}
            </animated.div>
        </Grid>


    )
}
export default ChartMoreOption
