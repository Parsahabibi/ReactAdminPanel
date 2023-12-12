import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";

const DevelopTables = () => {

    const theme = useTheme()

    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const isUp400px = useMediaQuery((theme) => theme.breakpoints.up('xxs'));

    const isUpXl = useMediaQuery((theme) => theme.breakpoints.up('xl'));

    let ItemsFont = isUp400px ? 'subtitle1' : 'subtitle2'

    let HeaderTables = isMd ? 'h6' : 'subtitle1'

    let displayArrow = isMd ? 'block' : 'none'

    let paddingRight = isUpXl ? '66px' : '0px'

    const DevelopTable = [
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },
        {
            title: "لورم ایپسوم",
            systems: ["/assets/images/Windows.svg", "/assets/images/android.svg", "/assets/images/Apple.svg"],
            date: "24.فرور.1402",
            progressValue: "75.5%",
            progressPercentage: "75.5%"
        },

    ];

    return (
       <Grid maxHeight={{xs: '346px', lg: '430px'}} sx={{
           overflow: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
               display: 'none',
           },
       }}>
           <table style={{borderCollapse: 'separate', borderSpacing: '0 16px', paddingRight: paddingRight}}>
               <thead>
               <tr>
                   <th className="TitleMainReviewTable TitleMainDevelopTable">
                       <Grid className="TitleReviewTable TitleDevelopTable" display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'0px'} pl={{
                           xs: '60px',
                           xxs: '60px',
                           sm: '195px',
                           md: '170px',
                           lg: '45px',
                           g: '130px',
                           xl: '114px'
                       }}>
                           <Typography variant={HeaderTables} color={theme.palette.light}
                                       fontWeight={500}>عنوان</Typography>
                           <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                       </Grid>
                   </th>
                   <th className="ProgressMainReviewTable TitleMainReviewTable SystemMainDevelopTable">
                       <Grid className="ProgressReviewTable TitleReviewTable SystemDevelopTable" display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'0px'}pl={{
                            xs: '65px',
                            xxs: '55px',
                            sm: '140px',
                            md: '100px',
                            lg: '25px',
                            g: '70px',
                            xl: '132px'
                        }}>
                           <Typography variant={HeaderTables} color={theme.palette.light}
                                       fontWeight={500}>لورم</Typography>
                           <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                       </Grid>
                   </th>
                   <th className="NumberMainReviewTable TitleMainReviewTable DateMainDevelopTable">
                       <Grid className="NumberReviewTable TitleReviewTable DateDevelopTable" display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'0px'}pl={{
                            xs: '55px',
                            xxs: '65px',
                            sm: '100px',
                            md: '90px',
                            lg: '40px',
                            g: '55px',
                            xl: '125px'
                        }}>
                           <Typography variant={HeaderTables} color={theme.palette.light}
                                       fontWeight={500}>تاریخ</Typography>
                           <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                       </Grid>
                   </th>
                   <th className="DateMainReviewTable TitleMainReviewTable">
                       <Grid className="DateReviewTable TitleReviewTable" display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'0px'}>
                           <Typography variant={HeaderTables} color={theme.palette.light}
                                       fontWeight={500}>پیشرفت</Typography>
                           <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                       </Grid>
                   </th>
               </tr>
               </thead>
               <tr className="Spacing" style={{width:'100%' ,  height:'0px' , backgroundColor:'transparent'}}></tr>
               <tbody className="Develop">
               <>
                   {DevelopTable.map((item, index) => (
                       <tr key={index}>
                           {/* Title Column */}
                           <td className="TitleDevelopTable">
                               <Typography variant={HeaderTables} color={theme.palette.dark}
                                           fontWeight={700}>{item.title}</Typography>
                           </td>

                           {/* System Icons Column */}
                           <td className="SystemDevelopTable">
                               <Grid className="RowSystem" display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={{xs:'8px' , g:'16px'}}>
                                   {item.systems.map((src, systemIndex) => (
                                       <img key={systemIndex} src={src} alt="" />
                                   ))}
                               </Grid>
                           </td>

                           {/* Date Column */}
                           <td className="DateDevelopTable">
                               <Typography variant={HeaderTables} color={theme.palette.dark}
                                           fontWeight={700}>{item.date}</Typography>
                           </td>

                           {/* Progress Column */}
                           <td className="ProgressDevelopTable" style={{display:'flex' , alignItems:'center' , justifyContent:'flex-start' , gap:'6px'}}>
                               <Typography variant={HeaderTables} color={theme.palette.dark}
                                           fontWeight={700}>{item.progressValue}</Typography>
                               <Grid className="Progress" position={'relative'} bgcolor={theme.palette.six} width={{xs:'48px' , g:'63px'}} borderRadius={'21px'} height={'8px'}>
                                   <Grid className="Complete" style={{ width: item.progressValue }} bgcolor={theme.palette.main} position={'absolute'} top={0} right={0}  borderRadius={'21px'} height={'8px'}>
                                   </Grid>
                               </Grid>
                           </td>
                       </tr>
                   ))}
               </>
               </tbody>
           </table>
       </Grid>
    )
}
export default DevelopTables
