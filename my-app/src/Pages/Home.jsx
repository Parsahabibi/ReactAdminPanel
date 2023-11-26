import React from 'react'
import {Grid, useTheme} from "@mui/material";
import Header from "../Components/Header/Header";
import DesktopLayoutHeader from "../Components/Layout/DesktopLayoutHeader";
import HeaderLayout from "../Components/Layout/HeaderLayout";
import {Dollar, File, Income} from "../Components/Icons";
import MobileNavbarCard from "../Components/NavbarCard/MobileNavbarCard";

const Home = () => {

    const theme = useTheme()

    const NavbarCardDate = [
        {id:1 , title:'درآمد' , notification:'2935 تومان' , icon:<Income fill={theme.palette.main} /> , des:'' , imageState:true  , desState:false , percent:''},
        {id:2 , title:'خرج در ماه' , notification:'2935 تومان' , icon:<Dollar fill={theme.palette.main} /> , des:'' , imageState:true  , desState:false , percent:''},
        {id:3 , title:'فروش' , notification:'2935 تومان' , icon:<></> , des:'نسبت به ماه قبل' , imageState:false  , desState:true , percent:'+23%'},
        {id:4 , title:'موجودی' , notification:'10 م.تومان' , icon:<></> , des:'' , imageState:false  , desState:false , percent:''},
        {id:5 , title:'درخواست جدید' , notification:'154' , icon:<></> , des:'' , imageState:false  , desState:false , percent:''},
        {id:6 , title:'همه پروژه ها' , notification:'2935 ' , icon:<File fill={theme.palette.main}/> , des:'' , imageState: true , desState:false , percent:''},
    ]

    return (
      <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'}>
         <HeaderLayout id={1} title={'داشبورد اصلی'} MainTitle={'داشبورد اصلی'} SubTitle={'منو / داشبورد'} marginLeft={160}/>
          <Grid className={'MainDashboard'} p={{xs:'0 16px 76px 16px' , md:'0 16px 40px 16px'}} mt={{xs:'16px' , md:'33px'}}>
              <Grid className={'MobileNavbarNotification'} container width={'100%'} gap={'16px'}>
                  {
                      NavbarCardDate.map(
                          item =>
                              <MobileNavbarCard item xs={6}  icon={item.icon} MobileTitle={item.title} percent={item.percent} des={item.des} desState={item.desState} imageState={item.imageState} notification={item.notification} />
                      )
                  }
              </Grid>
              <Grid className={'DesktopNavbarNotification'}></Grid>
              <Grid className={'IncomeChart'}></Grid>
              <Grid className={'CircleChart'}></Grid>
              <Grid className={'Calender'}></Grid>
              <Grid className={'ButtonNotification'}></Grid>
          </Grid>
      </Grid>
    )
}
export default Home
