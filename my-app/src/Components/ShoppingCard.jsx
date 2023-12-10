import React, {useState} from 'react'
import {Button, Grid, Typography, useTheme} from "@mui/material";

const ShoppingCard = ({price, Title, subTitle, img, count}) => {

    const theme = useTheme()


    return (
        <Grid className={'ShoppingCard'} p={{xs:'17px 16px 27px 16px' , xl:'17px 21px 27px 21px'}} bgcolor={'white'} borderRadius={'20px'}
              width={{xs: '300px', xxs: '350px', sm: '320px', md:'259px' , lg:'252px' , xl: '343px'}}>
            <Grid className={'ShoppingImage'} position={'relative'} width={'100%'}>
                <img className={'ShoppingImages'} width={'100%'} height={'100%'} style={{borderRadius: '20px'}}
                     src={img} alt={''}/>
                <img className={'Favorite'} style={{position: 'absolute', top: '10px', left: '10px', cursor: 'pointer'}}
                     src={'assets/images/Favorite.svg'} alt={''}/>
            </Grid>
            <Grid className={'ShoppingTitle'} pt={'12px'} pb={'25px'} display={'flex'} alignItems={'center'}
                  justifyContent={'space-between'}>
                <Grid className={'title'}>
                    <Typography variant={'h4'} color={theme.palette.dark} fontWeight={700}
                                lineHeight={'30px'}>{Title}</Typography>
                    <Typography variant={'h6'} color={theme.palette.light} fontWeight={500}>{subTitle}</Typography>
                </Grid>
                <Grid className={'users'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}
                      ml={'15px'}>
                    <Grid style={{zIndex: 4}} className="NumberUsers" bgcolor={'white'} p={'4px'} position={'relative'}
                          display={'flex'} alignItems={'center'} justifyContent={'center'} width={'35px'}
                          height={'35px'} borderRadius={'50%'} ml={'-15px'}>
                        <Grid className="Number" width={'100%'} height={'100%'} display={'flex'} alignItems={'center'}
                              justifyContent={'center'} fontSize={'10px'} fontWeight={700} bgcolor={'#E0E5F2'}
                              color={theme.palette.dark} borderRadius={'50%'}>+{count - 3}</Grid>
                    </Grid>
                    <Grid style={{zIndex: 3}} className="user" position={'relative'} bgcolor={'white'} p={'4px'}
                          borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}
                          width={'35px'} height={'35px'} ml={'-15px'}>
                        <img style={{borderRadius: '50%', width: '100%'}} src="assets/images/User.png" alt=""/>
                    </Grid>
                    <Grid style={{zIndex: 2}} className="user" position={'relative'} bgcolor={'white'} p={'4px'}
                          borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}
                          width={'35px'} height={'35px'} ml={'-15px'}>
                        <img style={{borderRadius: '50%', width: '100%'}} src="assets/images/UserThree.png" alt=""/>
                    </Grid>
                    <Grid style={{zIndex: 1}} className="user" position={'relative'} bgcolor={'white'} p={'4px'}
                          borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}
                          width={'35px'} height={'35px'} ml={'-15px'}>
                        <img style={{borderRadius: '50%', width: '100%'}} src="assets/images/UserTwo.png" alt=""/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="ShoppingButton" display={'flex'} alignItems={'center'}
                  justifyContent={'space-between'}>
                <Typography variant={'h6'} color={theme.palette.main} fontWeight={500}>قیمت: {price} تومان</Typography>
                <Grid className="buttonShoppingCard">
                    <button style={{
                        backgroundColor: theme.palette.dark,
                        color: 'white',
                        padding: '5px 40px',
                        borderRadius: '70px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 500,
                        textAlign: 'center'
                    }}>خرید
                    </button>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ShoppingCard
