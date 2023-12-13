import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header/Header";
import {KanbanAdd} from "../Components/Icons";
import Users from "../Components/Users";

const Profile = () => {

    const theme = useTheme()

    const isUp400px = useMediaQuery('(min-width: 400px)');
    const isUpXl = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const isUpLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const isUpG = useMediaQuery((theme) => theme.breakpoints.up('g'));
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    let titlePersonal = isMd ? 'h3' : 'h5'

    let desPersonal = isMd ? 'h6' : 'subtitle1'

    let Information = isMd ? 'h2' : 'h5'

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

    const containerStyle = {
        transform: 'translate(50%, -50%)',
    };


    let HeaderKanbanVariant = isMd ? 'h3' : 'h6'

    let BorderRadius = isMd ? '10px' : '8px'

    return (
        <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'} display={'flex'}
              alignItems={'flex-start'} justifyContent={'space-between'}>
            <Grid display={{xs: 'none', md: 'block'}}>
                <Dashboard id={5} marginLeft={180}/>
            </Grid>
            <Grid className={'MainDashboard'} width={'100%'}>
                <Header id={5} marginLeft={180} MainTitle={'پروفایل'} SubTitle={'صفحات / پروفایل'}/>
                <Grid className={'MainTablesPage'} p={'6px 18px 32px 18px'}>
                    <Typography display={{xs: 'block', md: "none"}} variant={'h3'} color={theme.palette.dark}
                                fontWeight={700} pb={'20px'}>پروفایل</Typography>
                    <Grid>
                        <Grid>
                            <Grid className={'PersonalProfileInformation'} p={{xs:'16px 12px 24px 12px' , xxs:'16px 24px 24px 24px' , md:'17px 18px 35px 18px'}} bgcolor={'white'} borderRadius={'15px'} mb={'20px'} height={{lg:'365px'}} width={{lg:'35.5%'}}>
                                <Grid className={'BannerProfile'} position={'relative'} top={0} right={0} width={'100%'} mb={{xs:'42px' , md:'56px'}}>
                                    <Grid className={'under'} display={{xs:'block' , md:'none'}}>
                                        <img src={'/assets/images/ProfileBanner.png'} alt={''} width={'100%'} height={'100%'}/>
                                    </Grid>
                                    <Grid className={'over'} display={{xs:'none' , md:'block'}}>
                                        <img src={'/assets/images/DesktopProfileBanner.png'} alt={''} width={'100%'} height={'100%'}/>
                                    </Grid>
                                    <Grid className={'UserImage'} position={'absolute'} right={'50%'} top={'100%'} style={containerStyle} bgcolor={'white'} borderRadius={'50%'} p={'5px'}>
                                        <Grid className={'under'} display={{xs:'flex' , md:'none'}} alignItems={'center'} justifyContent={'center'}>
                                            <img src={'/assets/images/ProfileImage.png'} alt={''} style={{borderRadius:'50%'}}/>
                                        </Grid>
                                        <Grid className={'over'} display={{xs:'none' , md:'flex'}} alignItems={'center'} justifyContent={'center'}>
                                            <img src={'/assets/images/DesktopProfileImage.png'} alt={''} style={{borderRadius:'50%'}}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid className={'NameAndFollowersProfile'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexWrap={'nowrap'} flexDirection={{xs:'row' , md:'column'}} gap={{md:'24px'}}>
                                    <Grid display={'flex'} alignItems={{xs:'flex-start' , md:'center'}} justifyContent={{xs:'flex-start' , md:'center'}} flexDirection={'column'}>
                                        <Typography variant={titlePersonal} color={theme.palette.dark} fontWeight={700}>آناهیتا رجبی</Typography>
                                        <Typography variant={desPersonal} color={theme.palette.light} fontWeight={500}>طراح محصول</Typography>
                                    </Grid>
                                    <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={{xs:'5px' , xxs:'24px' , md:'15px' , g:'55px'}} pl={{md:'6%' , lg:'6%'}}>
                                        <Grid className={'Followers'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                            <Typography variant={Information} color={theme.palette.dark} fontWeight={700}>274</Typography>
                                            <Typography variant={desPersonal} color={theme.palette.light} fontWeight={500}>دنبال شونده</Typography>
                                        </Grid>
                                        <Grid className={'Following'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                            <Typography variant={Information} color={theme.palette.dark} fontWeight={700}>9.7k</Typography>
                                            <Typography variant={desPersonal} color={theme.palette.light} fontWeight={500}>دنبال کننده</Typography>
                                        </Grid>
                                        <Grid className={'Posts'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                            <Typography variant={Information} color={theme.palette.dark} fontWeight={700}>17</Typography>
                                            <Typography variant={desPersonal} color={theme.palette.light} fontWeight={500}>پست ها</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid></Grid>
                            <Grid></Grid>
                        </Grid>
                        <Grid></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Profile
