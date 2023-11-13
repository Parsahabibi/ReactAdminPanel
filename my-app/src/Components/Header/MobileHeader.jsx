import React, {useEffect, useRef, useState} from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import {Info, MenuIcon, Moon, Notification} from "../Icons";
import {useSpring, animated} from "@react-spring/web";
import {Link} from "react-router-dom";

const MobileHeader = () => {


    const [showOption, setShowOption] = useState(false)

    const IconsData = [
        {id: 1, icon: <Notification/>},
        {id: 2, icon: <Moon/>},
        {id: 3, icon: <Info/>},
    ]

    const theme = useTheme()


    const optionAnimation = useSpring({
        opacity: showOption ? 1 : 0,
    });


    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowOption(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref]);

    return (
        <Grid className={'DesktopHeader'} pt={'6px'} pr={'24px'} pb={'16px'} pl={'12px'}  display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Grid className={'MobileDashboardMenu'} width={'28px'} height={'28px'}>
                <MenuIcon fill={theme.palette.main}/>
            </Grid>
            <Grid className={'ItemsTitle'} py={'10px'} px={'12px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={'15px'}>
                <Grid className={'IconsItemsTitle'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}
                      gap={'16px'}>
                    {
                        IconsData.map(
                            item =>
                                <>
                                    {item.icon}
                                </>
                        )
                    }
                </Grid>
                <Grid width={'41px'} height={'41px'} className={'ProfileItemsTitle'} display={'flex'}
                      alignItems={'center'} justifyContent={'center'}>
                    <img src={'assets/images/User.png'} width={'100%'} height={'100%'} alt={''}
                         style={{borderRadius: '50%'}}/>
                </Grid>
                <Grid className={'OptionItemsTitle'} width={'4px'} height={'16px'} display={'flex'}
                      alignItems={'center'} justifyContent={'center'} position={'relative'} ref={ref}>
                    <img src={'assets/images/HeaderOption.svg'} width={'100%'} height={'100%'} alt={''}
                         onClick={() => {
                             setShowOption(!showOption)
                         }}
                    />
                    <animated.div
                        style={{
                            ...optionAnimation,
                            position: 'absolute',
                            top: '37px',
                            left: 0,
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
                            paddingTop: '35px',
                            paddingBottom: '35px',
                            paddingRight: '40px',
                            paddingLeft: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '16px',
                        }}
                    >
                        <Link to={''}>
                            <Typography variant={'h5'} color={theme.palette.dark} style={{whiteSpace: 'nowrap'}}>
                                تغییر رمز عبور
                            </Typography>
                        </Link>
                        <Link to={''}>
                            <Typography variant={'h5'} color={theme.palette.dark} style={{whiteSpace: 'nowrap'}}>
                                خروج
                            </Typography>
                        </Link>
                        <Link to={''}>
                            <Typography variant={'h5'} color={theme.palette.dark} style={{whiteSpace: 'nowrap'}}>
                                به روز رسانی آمار
                            </Typography>
                        </Link>
                    </animated.div>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default MobileHeader
