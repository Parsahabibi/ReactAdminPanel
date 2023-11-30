import React, {useEffect, useRef, useState} from 'react'
import {Grid, Typography, useMediaQuery, useTheme, styled, keyframes} from "@mui/material";
import {Link} from "react-router-dom";
import {MoreHoriz} from "./Icons";

const ChartMoreOption = () => {


    const [option, setOption] = useState(false)

    const [closing, setClosing] = useState(false);

    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'subtitle1';


    const fadeIn = keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `;

    const fadeOut = keyframes`
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    `;


    const AnimatedGrid = styled(Grid)(({isClosing}) => ({
        animation: isClosing ? `${fadeOut} 0.25s forwards` : `${fadeIn} 0.4s`,
    }));


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
                setClosing(false) ;
                setOption(!option)
            }} style={{paddingTop: '5px'}}>
                 <MoreHoriz fill={theme.palette.main}/>
            </span>

            {
                option ?
                    <AnimatedGrid className={'itemsOption'}
                                  p={{xs: '20px 20px 20px 100px', md: '40px 40px 34px 166px'}}
                                  position={'absolute'} top={{xs: '28px', md: '37px'}} left={0} zIndex={10}
                                  bgcolor={'white'} borderRadius={'16px'} border={'1px solid #B0BBD5'}
                                  boxShadow={5}
                                  ref={menuRef}
                                  isClosing={closing}
                    >
                        {
                            itemsOptionData.map(
                                item =>
                                    <Link to={item.link}>
                                        <Typography whiteSpace={'nowrap'} variant={variant}
                                                    pb={item.id === 3 ? '0' : '16px'}
                                                    fontWeight={500}>{item.title}</Typography>
                                    </Link>
                            )
                        }
                    </AnimatedGrid>
                    :
                    <></>
            }


        </Grid>


    )
}
export default ChartMoreOption
