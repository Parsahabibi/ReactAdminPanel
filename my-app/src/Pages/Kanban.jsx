import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header/Header";
import {Link} from "react-router-dom";
import ShoppingCard from "../Components/ShoppingCard";
import TopSellers from "../Components/Tables/TopSellers";
import {KanbanAdd} from "../Components/Icons";
import Users from "../Components/Users";

const Kanban = () => {

    const DoneCardData = [
        {
            id: 1,
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
            des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
            count: 1
        },
        {
            id: 2,
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
            des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
            count: 2
        },
        {
            id: 3,
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
            des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
            count: 3
        },
    ]


    const CreateDashboardData = [
        {
            id: 1,
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
            des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
            count: 1 ,
            buttonColor:'#FFB547',
            buttonTitle:'در انتظار'
        },
        {
            id: 2,
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
            des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
            count: 2 ,
            buttonColor:'#3965FF' ,
            buttonTitle:'بروزرسانی'
        },
        {
            id: 3,
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
            des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
            count: 3 ,
            buttonColor: '#E31A1A' ,
            buttonTitle:'خطاها '
        },
    ]


    const VenusDashboardData = [
        {
            id: 1,
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
            des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
            count: 1 ,
            buttonColor:'#3965FF' ,
            buttonTitle:'بروزرسانی'
        },
        {
            id: 2,
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
            des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
            count: 2 ,
            buttonColor:'#FFB547' ,
            buttonTitle:'در انتظار'
        },
        {
            id: 3,
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
            des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
            count: 3 ,
            buttonColor: '#E31A1A' ,
            buttonTitle:'خطاها '
        },
    ]


    const theme = useTheme()

    const isUp400px = useMediaQuery('(min-width: 400px)');
    const isUpXl = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const isUpLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const isUpG = useMediaQuery((theme) => theme.breakpoints.up('g'));
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    let HeaderTitleCard = 'subtitle2'

    if (isXs) {
        HeaderTitleCard = 'subtitle2'
    }
    if (isUp400px) {
        HeaderTitleCard = 'subtitle1'
    }
    if (isMd) {
        HeaderTitleCard = 'h6'
    }


    let HeaderKanbanVariant = isMd ? 'h3' : 'h6'

    let BorderRadius = isMd ? '10px' : '8px'


    return (
        <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'} display={'flex'}
              alignItems={'flex-start'} justifyContent={'space-between'}>
            <Grid display={{xs: 'none', md: 'block'}}>
                <Dashboard id={4} marginLeft={180}/>
            </Grid>
            <Grid className={'MainDashboard'} width={'100%'}>
                <Header id={4} marginLeft={180} MainTitle={'کنبان'} SubTitle={'صفحات / کنبان'}/>
                <Grid className={'MainTablesPage'} p={'6px 18px 32px 18px'}>
                    <Typography display={{xs: 'block', md: "none"}} variant={'h3'} color={theme.palette.dark}
                                fontWeight={700} pb={'20px'}>کنبان</Typography>
                    <Grid className={'KanbanBody'} display={'flex'} flexDirection={{xs: 'column', lg: 'row-reverse'}}
                          alignItems={'flex-start'} justifyContent={'space-between'} gap={{lg: '20px'}}>
                        <Grid bgcolor={'white'} borderRadius={{xs: '15px', md: '20px'}}
                              p={{xs: '24px 24px 14px 24px', md: '24px 23px 24px 20px'}} mb={{xs: '24px', md: '20px' , lg:'0px'}}
                              width={{xs: '100%', lg: '33.3%'}}>
                            <Grid className={'HeaderKanban'} pb={{xs: '18px', md: '45px'}} display={'flex'}
                                  alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant={HeaderKanbanVariant} fontWeight={700} color={theme.palette.dark}>انجام
                                    شده </Typography>
                                <Grid width={{xs: '28px', md: '91px'}} height={{xs: '28px', md: '35px'}}
                                      borderRadius={{xs: '8px', md: '12px'}} bgcolor={theme.palette.one}
                                      display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <KanbanAdd fill={theme.palette.main}/>
                                </Grid>
                            </Grid>
                            <Grid className={'CardsDoneKanban'} display={'flex'} flexDirection={'column'}
                                  gap={{xs: '16px', md: '20px'}} maxHeight={{xs: 'auto', md: 'none'}}
                                  style={{overflowY: 'auto'}} height={{md: "auto"}}>
                                {
                                    DoneCardData.map(
                                        item =>
                                            <Grid key={item.id} bgcolor={'white'} borderRadius={'15px'} p={{xs:'16px 16px 24px 16px' , md:'18px 21px 23px 23px'}} mx={{xs:'2px' , lg:'5px'}} mt={{xs:'5px'}} mb={item.id === DoneCardData.length ? '5px' : '0px'} boxShadow={1}>
                                                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} pb={{xs:'8px' , md:'14px'}}>
                                                    <Typography variant={HeaderTitleCard} color={theme.palette.dark} fontWeight={700} lineHeight={'22px'}>{item.title}</Typography>
                                                    <img src={'/assets/images/edit.svg'} alt={''}/>
                                                </Grid>
                                                <Grid pb={{xs:'24px' , md:'30px'}}>
                                                    <Typography lineHeight={'20px'} textAlign={'justify'} variant={HeaderTitleCard} color={theme.palette.light} fontWeight={700}>{item.des}</Typography>
                                                </Grid>
                                                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                                    <button style={{backgroundColor:'#01B574' , color:'white' , fontSize:'10px' , fontWeight:700 , padding:'6px 20px' , cursor:'pointer' , border:'none' , borderRadius:BorderRadius}}>انجام شده</button>
                                                    <Users count={item.count}/>
                                                </Grid>
                                            </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                        <Grid bgcolor={'white'} borderRadius={{xs: '15px', md: '20px'}}
                              p={{xs: '24px 24px 14px 24px', md: '24px 24px 24px 20px'}} mb={{xs: '24px', md: '20px' , lg:'0px'}}
                              width={{xs: '100%', lg: '33.3%'}}>
                            <Grid className={'HeaderKanban'} pb={{xs: '18px', md: '45px'}} display={'flex'}
                                  alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant={HeaderKanbanVariant} fontWeight={700} color={theme.palette.dark}>لورم
                                    ایپسوم </Typography>
                                <Grid width={{xs: '28px', md: '91px'}} height={{xs: '28px', md: '35px'}}
                                      borderRadius={{xs: '8px', md: '12px'}} bgcolor={theme.palette.one}
                                      display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <KanbanAdd fill={theme.palette.main}/>
                                </Grid>
                            </Grid>
                            <Grid className={'CardsDoneKanban'} display={'flex'} flexDirection={'column'}
                                  gap={{xs: '16px', md: '20px'}} maxHeight={{xs: 'auto', md: 'none'}}
                                  style={{overflowY: 'auto'}} height={{md: "auto"}}>
                                {
                                    CreateDashboardData.map(
                                        item =>
                                            <Grid key={item.id} bgcolor={'white'} borderRadius={'15px'} p={{xs:'16px 16px 24px 16px' , md:'18px 21px 23px 23px'}} mx={{xs:'2px' , lg:'5px'}} mt={{xs:'5px'}} mb={item.id === DoneCardData.length ? '5px' : '0px'} boxShadow={1}>
                                                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} pb={{xs:'8px' , md:'14px'}}>
                                                    <Typography variant={HeaderTitleCard} color={theme.palette.dark} fontWeight={700} lineHeight={'22px'}>{item.title}</Typography>
                                                    <img src={'/assets/images/edit.svg'} alt={''}/>
                                                </Grid>
                                                <Grid width={'100%'} height={'100%'} pb={'16px'} display={item.id === 3 ? 'block' : 'none'}>
                                                    <img src={'/assets/images/DragDrop.png'} alt={''} width={'100%'} height={'100%'} style={{borderRadius:'15px'}}/>
                                                </Grid>
                                                <Grid pb={{xs:'24px' , md:'30px'}}>
                                                    <Typography lineHeight={'20px'} textAlign={'justify'} variant={HeaderTitleCard} color={theme.palette.light} fontWeight={700}>{item.des}</Typography>
                                                </Grid>
                                                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                                    <button style={{backgroundColor:item.buttonColor , color:'white' , fontSize:'10px' , fontWeight:700 , padding:'6px 20px' , cursor:'pointer' , border:'none' , borderRadius:BorderRadius}}>{item.buttonTitle}</button>
                                                    <Users count={item.count}/>
                                                </Grid>
                                            </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                        <Grid bgcolor={'white'} borderRadius={{xs: '15px', md: '20px'}}
                              p={{xs: '24px 24px 14px 24px', md: '24px 24px 24px 20px'}} mb={{xs: '24px', md: '20px' , lg:'0px'}}
                              width={{xs: '100%', lg: '33.4%'}}>
                            <Grid className={'HeaderKanban'} pb={{xs: '18px', md: '45px'}} display={'flex'}
                                  alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant={HeaderKanbanVariant} fontWeight={700} color={theme.palette.dark}>لورم
                                    ایپسوم </Typography>
                                <Grid width={{xs: '28px', md: '91px'}} height={{xs: '28px', md: '35px'}}
                                      borderRadius={{xs: '8px', md: '12px'}} bgcolor={theme.palette.one}
                                      display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <KanbanAdd fill={theme.palette.main}/>
                                </Grid>
                            </Grid>
                            <Grid className={'CardsDoneKanban'} display={'flex'} flexDirection={'column'}
                                  gap={{xs: '16px', md: '20px'}} maxHeight={{xs: 'auto', md: 'none'}}
                                  style={{overflowY: 'auto'}} height={{md: "auto"}}>
                                {
                                    VenusDashboardData.map(
                                        item =>
                                            <Grid key={item.id} bgcolor={'white'} borderRadius={'15px'} p={{xs:'16px 16px 24px 16px' , md:'18px 21px 23px 23px'}} mx={{xs:'2px' , lg:'5px'}} mt={{xs:'5px'}} mb={item.id === DoneCardData.length ? '5px' : '0px'} boxShadow={1}>
                                                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} pb={{xs:'8px' , md:'14px'}}>
                                                    <Typography variant={HeaderTitleCard} color={theme.palette.dark} fontWeight={700} lineHeight={'22px'}>{item.title}</Typography>
                                                    <img src={'/assets/images/edit.svg'} alt={''}/>
                                                </Grid>
                                                <Grid width={'100%'} height={'100%'} display={item.id === 2 ? 'block' : 'none'}  pb={'16px'}>
                                                    <img src={'/assets/images/Cover.png'} alt={''} width={'100%'} height={'100%'} style={{borderRadius:'15px'}}/>
                                                </Grid>
                                                <Grid pb={{xs:'24px' , md:'30px'}}>
                                                    <Typography lineHeight={'20px'} textAlign={'justify'} variant={HeaderTitleCard} color={theme.palette.light} fontWeight={700}>{item.des}</Typography>
                                                </Grid>
                                                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                                    <button style={{backgroundColor:item.buttonColor , color:'white' , fontSize:'10px' , fontWeight:700 , padding:'6px 20px' , cursor:'pointer' , border:'none' , borderRadius:BorderRadius}}>{item.buttonTitle}</button>
                                                    <Users count={item.count}/>
                                                </Grid>
                                            </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Kanban
