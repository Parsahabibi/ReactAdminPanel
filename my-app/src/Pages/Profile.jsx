import React, {useRef} from 'react'
import {FormControlLabel, Grid, makeStyles, styled, Switch, Typography, useMediaQuery, useTheme} from "@mui/material";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header/Header";
import {Cloud, DesktopUpload, KanbanAdd, Upload} from "../Components/Icons";
import Users from "../Components/Users";
import ChartMoreOption from "../Components/ChartMoreOption";

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


    let LoremTitle = isMd ? 'h5' : 'h6'


    let HeaderKanbanVariant = isMd ? 'h2' : 'h6'

    let BorderRadius = isMd ? '10px' : '8px'

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


    let progressData = {
        usedSpace: 26.5,
        totalSpace: 50
    };


    let widthProcess = (progressData.usedSpace / progressData.totalSpace) * 100


    let display = isUpLg ? 'grid' : 'block'


    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile.type === 'application/pdf') {

                const fileNameDisplay = document.querySelector('.fileNameDisplay');
                const DesktopFileNameDisplay = document.querySelector('.DesktopFileNameDisplay');
                fileNameDisplay.textContent = selectedFile.name;
                DesktopFileNameDisplay.textContent = selectedFile.name;

                // Clear the input value
                fileInputRef.current.value = '';
            } else {
                alert('فایل انتخابی باید با پسوند PDF باشد.');
                fileInputRef.current.value = '';
            }
        } else {
            alert('فایلی انتخاب نشده است.');
        }
    };


    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: '35px',
        height: '18px',
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.main : theme.palette.main,
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: theme.palette.main,
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 14,
            height: 14,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));



    const projectsData = [
        {
            id: 1,
            imageSrc: "/assets/images/shubham.png",
            title: "مورد نیاز، و کاربردهای متنوع با هدف",
            projectDetails: " دیدن جزییات پروژه",
            projectName: 'پروژه #1 '
        },
        {
            id: 2,
            imageSrc: "/assets/images/shubham.png",
            title: "مورد نیاز، و کاربردهای متنوع با هدف",
            projectDetails: " دیدن جزییات پروژه",
            projectName: 'پروژه #1 '
        },
        {
            id: 3,
            imageSrc: "/assets/images/shubham.png",
            title: "مورد نیاز، و کاربردهای متنوع با هدف",
            projectDetails: " دیدن جزییات پروژه",
            projectName: 'پروژه #1 '
        },
        {
            id: 4,
            imageSrc: "/assets/images/shubham.png",
            title: "مورد نیاز، و کاربردهای متنوع با هدف",
            projectDetails: " دیدن جزییات پروژه",
            projectName: 'پروژه #1 '
        },
        {
            id: 5,
            imageSrc: "/assets/images/shubham.png",
            title: "مورد نیاز، و کاربردهای متنوع با هدف",
            projectDetails: " دیدن جزییات پروژه",
            projectName: 'پروژه #1 '
        },
        {
            id: 6,
            imageSrc: "/assets/images/shubham.png",
            title: "مورد نیاز، و کاربردهای متنوع با هدف",
            projectDetails: " دیدن جزییات پروژه",
            projectName: 'پروژه #1 '
        },
        {
            id: 7,
            imageSrc: "/assets/images/shubham.png",
            title: "مورد نیاز، و کاربردهای متنوع با هدف",
            projectDetails: " دیدن جزییات پروژه",
            projectName: 'پروژه #1 '
        },
        {
            id: 8,
            imageSrc: "/assets/images/shubham.png",
            title: "مورد نیاز، و کاربردهای متنوع با هدف",
            projectDetails: " دیدن جزییات پروژه",
            projectName: 'پروژه #1 '
        },
    ];


    const LoremData = [
        {id: 1, title: 'لورم ایپسوم', subTitle: 'لورم ایپسوم متن ساختگی'},
        {id: 2, title: 'لورم ایپسوم', subTitle: 'لورم ایپسوم متن ساختگی'},
        {id: 3, title: 'لورم ایپسوم', subTitle: 'لورم ایپسوم متن ساختگی'},
        {id: 4, title: 'لورم ایپسوم', subTitle: 'لورم ایپسوم متن ساختگی'},
        {id: 5, title: 'لورم ایپسوم', subTitle: 'لورم ایپسوم متن ساختگی'},
        {id: 6, title: 'لورم ایپسوم', subTitle: 'لورم ایپسوم متن ساختگی'},
        {id: 7, title: 'لورم ایپسوم', subTitle: 'لورم ایپسوم متن ساختگی'},
        {id: 8, title: 'لورم ایپسوم', subTitle: 'لورم ایپسوم متن ساختگی'},
        {id: 9, title: 'لورم ایپسوم', subTitle: 'لورم ایپسوم متن ساختگی'},
    ]


    const notificationTexts = [
        {text: 'لورم ایپسوم متن ساختگی', checked: true},
        {text: 'لورم ایپسوم متن ساختگی', checked: true},
        {text: 'لورم ایپسوم متن ساختگی', checked: false},
        {text: 'لورم ایپسوم متن ساختگی', checked: false},
        {text: 'لورم ایپسوم متن ساختگی', checked: false},
        {text: 'لورم ایپسوم متن ساختگی', checked: true},
        {text: 'لورم ایپسوم متن ساختگی', checked: false},
        {text: 'لورم ایپسوم متن ساختگی', checked: true},
        {text: 'لورم ایپسوم متن ساختگی', checked: false},
        {text: 'لورم ایپسوم متن ساختگی', checked: true},
    ];


    return (
        <Grid bgcolor={theme.palette.primary.one} height={'100vh'} width={'100%'} display={'flex'}
              alignItems={'flex-start'} justifyContent={'space-between'}>
            <Grid display={{xs: 'none', md: 'block'}}>
                <Dashboard id={5} marginLeft={160}/>
            </Grid>
            <Grid className={'MainDashboard'} width={'100%'}>
                <Header id={5} marginLeft={160} MainTitle={'پروفایل'} SubTitle={'صفحات / پروفایل'}/>
                <Grid className={'MainTablesPage'} p={'6px 18px 32px 18px'}>
                    <Typography display={{xs: 'block', md: "none"}} variant={'h3'} color={theme.palette.dark}
                                fontWeight={700} pb={'20px'}>پروفایل</Typography>
                    <Grid>
                        <Grid display={{xs: 'block', lg: 'flex'}} alignItems={'flex-start'}
                              justifyContent={'space-between'} gap={{lg: '20px'}}>
                            <Grid className={'PersonalProfileInformation'}
                                  p={{xs: '16px 12px 24px 12px', xxs: '16px 24px 24px 24px', md: '17px 18px 35px 18px'}}
                                  bgcolor={'white'} borderRadius={'15px'} mb={'20px'} height={{lg: '365px'}}
                                  width={{xs: '100%', lg: '35.5%'}}>
                                <Grid className={'BannerProfile'} position={'relative'} top={0} right={0} width={'100%'}
                                      mb={{xs: '42px', md: '56px'}}>
                                    <Grid className={'under'} display={{xs: 'block', md: 'none'}}>
                                        <img src={'/assets/images/ProfileBanner.png'} alt={''} width={'100%'}
                                             height={'100%'}/>
                                    </Grid>
                                    <Grid className={'over'} display={{xs: 'none', md: 'block'}}>
                                        <img src={'/assets/images/DesktopProfileBanner.png'} alt={''} width={'100%'}
                                             height={'100%'}/>
                                    </Grid>
                                    <Grid className={'UserImage'} position={'absolute'} right={'50%'} top={'100%'}
                                          style={containerStyle} bgcolor={'white'} borderRadius={'50%'} p={'5px'}>
                                        <Grid className={'under'} display={{xs: 'flex', md: 'none'}}
                                              alignItems={'center'} justifyContent={'center'}>
                                            <img src={'/assets/images/ProfileImage.png'} alt={''}
                                                 style={{borderRadius: '50%'}}/>
                                        </Grid>
                                        <Grid className={'over'} display={{xs: 'none', md: 'flex'}}
                                              alignItems={'center'} justifyContent={'center'}>
                                            <img src={'/assets/images/DesktopProfileImage.png'} alt={''}
                                                 style={{borderRadius: '50%'}}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid className={'NameAndFollowersProfile'} display={'flex'} alignItems={'center'}
                                      justifyContent={'space-between'} flexWrap={'nowrap'}
                                      flexDirection={{xs: 'row', md: 'column'}} gap={{md: '24px'}}>
                                    <Grid display={'flex'} alignItems={{xs: 'flex-start', md: 'center'}}
                                          justifyContent={{xs: 'flex-start', md: 'center'}} flexDirection={'column'}>
                                        <Typography variant={titlePersonal} color={theme.palette.dark} fontWeight={700}>آناهیتا
                                            رجبی</Typography>
                                        <Typography variant={desPersonal} color={theme.palette.light} fontWeight={500}>طراح
                                            محصول</Typography>
                                    </Grid>
                                    <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                                          gap={{xs: '5px', xxs: '24px', md: '15px', g: '55px'}}
                                          pl={{md: '6%', lg: '6%'}}>
                                        <Grid className={'Followers'} display={'flex'} flexDirection={'column'}
                                              alignItems={'center'} justifyContent={'center'}>
                                            <Typography variant={Information} color={theme.palette.dark}
                                                        fontWeight={700}>274</Typography>
                                            <Typography variant={desPersonal} color={theme.palette.light}
                                                        fontWeight={500}>دنبال شونده</Typography>
                                        </Grid>
                                        <Grid className={'Following'} display={'flex'} flexDirection={'column'}
                                              alignItems={'center'} justifyContent={'center'}>
                                            <Typography variant={Information} color={theme.palette.dark}
                                                        fontWeight={700}>9.7k</Typography>
                                            <Typography variant={desPersonal} color={theme.palette.light}
                                                        fontWeight={500}>دنبال کننده</Typography>
                                        </Grid>
                                        <Grid className={'Posts'} display={'flex'} flexDirection={'column'}
                                              alignItems={'center'} justifyContent={'center'}>
                                            <Typography variant={Information} color={theme.palette.dark}
                                                        fontWeight={700}>17</Typography>
                                            <Typography variant={desPersonal} color={theme.palette.light}
                                                        fontWeight={500}>پست ها</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className={'ProfileFreeSpace'} p={'16px 17px 48px 20px'} mb={'16px'} bgcolor={'white'}
                                  borderRadius={'15px'} width={{xs: '100%', lg: '24.5%'}} height={'365px'}>
                                <Grid className={'backOption'} display={'flex'} alignItems={'center'}
                                      justifyContent={'flex-end'}>
                                    <ChartMoreOption/>
                                </Grid>
                                <Grid className={'FreeSpaceInformation'} display={'flex'} flexDirection={'column'}
                                      alignItems={'center'} justifyContent={'center'} pb={{xs: '5px', md: '53px'}}>
                                    <Grid width={'100px'} height={'100px'} borderRadius={'50%'}
                                          bgcolor={theme.palette.one} display={'flex'} alignItems={'center'}
                                          justifyContent={'center'} mb={'14px'}>
                                        <Cloud fill={theme.palette.main}/>
                                    </Grid>
                                    <Typography variant={Information} color={theme.palette.dark} fontWeight={700}
                                                pb={'6px'}>فضای شما</Typography>
                                    <Typography variant={desPersonal} color={theme.palette.light} fontWeight={700}
                                                width={{xs: '202px'}} textAlign={'center'} lineHeight={'24px'}>لورم
                                        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</Typography>
                                </Grid>
                                <Grid className={'ProgressSpace'}>
                                    <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                                          pb={'5px'}>
                                        <Typography variant={desPersonal} color={theme.palette.light} fontWeight={500}>26.5
                                            گیگابایت</Typography>
                                        <Typography variant={desPersonal} color={theme.palette.light} fontWeight={500}>50
                                            گیگابایت</Typography>
                                    </Grid>
                                    <Grid className={'Process'} width={'100%'} height={'10px'}
                                          bgcolor={theme.palette.one} position={'relative'} borderRadius={'42px'}>
                                        <Grid position={'absolute'} right={0} top={0} height={'10px'}
                                              width={`${widthProcess}%`} borderRadius={'42px'}
                                              bgcolor={theme.palette.main}></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className={'ProfileUpload'}
                                  p={{xs: '15px 24px 24px 21px', lg: '27px', g: '27px 40px 27px 27px'}}
                                  bgcolor={'white'} borderRadius={{xs: '15px', lg: '20px'}} mb={'16px'}
                                  width={{xs: '100%', lg: '40%'}} height={'365px'}>
                                <Grid className={'MobileUpload'} display={{xs: 'block', md: 'none'}}>
                                    <Grid className={'TitleMobileUpload'} pb={'15px'}>
                                        <Typography variant={'h6'} color={theme.palette.dark} fontWeight={700}>لورم
                                            ایپسوم متن </Typography>
                                    </Grid>
                                    <Grid className={'DesMobileUpload'} pb={'21px'}>
                                        <Typography variant={'subtitle1'} color={theme.palette.light} fontWeight={700}
                                                    width={'245px'} textAlign={'justify'}>مورد
                                            نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                                            باشد، کتابهای زیادی در شصن را می طلبد،</Typography>
                                    </Grid>
                                    <Grid className={'InputMobileUpload'} pb={'16px'} display={'flex'}
                                          alignItems={'center'} justifyContent={'center'}>
                                        <Grid className="Input" border={'1px dashed #E0E5F2'} borderRadius={'13px'}
                                              bgcolor={'#FAFCFE'}>
                                            <input
                                                type="file"
                                                style={{display: 'none'}}
                                                accept=".pdf"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                            />
                                            <button id="customFileInputButton" className="Input"
                                                    onClick={handleButtonClick} style={{
                                                padding: '16px 26px 28px 27px',
                                                width: '100%',
                                                height: '100%',
                                                cursor: 'pointer',
                                                border: 'none',
                                                display: "flex",
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '13px',
                                                backgroundColor: 'transparent'
                                            }}>
                                                <Upload fill={theme.palette.main}/>
                                                <Typography variant={'h3'} fontWeight={700} color={theme.palette.main}
                                                            pb={'8px'}>آپلود کنید</Typography>
                                                <Typography variant={'subtitle1'} fontWeight={500}
                                                            color={theme.palette.light}>لورم ایپسوم متن ساختگی با تولید
                                                    سادگی </Typography>
                                                <span style={{fontWeight: 700, color: theme.palette.dark}}
                                                      className="fileNameDisplay "></span>
                                            </button>
                                        </Grid>
                                    </Grid>
                                    <Grid className={'ButtonMobileUpload'} display={'flex'} alignItems={'center'}
                                          justifyContent={'center'}>
                                        <button className={'Publish'} style={{
                                            padding: '6px 28px',
                                            backgroundColor: theme.palette.main,
                                            color: 'white',
                                            borderRadius: '8px',
                                            border: 'none'
                                        }}>انتشار
                                        </button>
                                    </Grid>
                                </Grid>
                                <Grid className={'DesktopUpload'} display={{xs: 'none', md: 'flex'}}
                                      alignItems={'center'} justifyContent={'space-between'} gap={'36px'}>
                                    <Grid className="TitleDesButtonDesktopUpload" width={'50%'}>
                                        <Typography variant={'h6'} color={theme.palette.dark} fontWeight={700}
                                                    pb={'15px'} className="titleUpload">لورم ایپسوم متن </Typography>
                                        <Typography variant={'h6'} color={theme.palette.light} fontWeight={700}
                                                    pb={'77px'} className="desUpload">مورد نیاز، و کاربردهای متنوع با
                                            هدف بهبود ابزارهای
                                            کاربردی می باشد، کتابهای زیادی در شصن را می طلبد،</Typography>
                                        <Grid className="ButtonDesktopUpload" display={'flex'} alignItems={'center'}
                                              justifyContent={'flex-end'}>
                                            <button className="Publish" style={{
                                                padding: '6px 28px',
                                                backgroundColor: theme.palette.main,
                                                color: 'white',
                                                borderRadius: '8px',
                                                border: 'none',
                                                cursor: 'pointer'
                                            }}>انتشار
                                            </button>
                                        </Grid>
                                    </Grid>
                                    <Grid className="InputDesktopUpload" width={'50%'} pb={'16px'} display={'flex'}
                                          alignItems={'center'} justifyContent={'center'}>
                                        <Grid className="Input" border={'1px dashed #E0E5F2'} borderRadius={'13px'}
                                              bgcolor={'#FAFCFE'} height={'300px'}>
                                            <input
                                                type="file"
                                                style={{display: 'none'}}
                                                accept=".pdf"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                            />
                                            <button id="customFileInputButtonDesktop" className="Input"
                                                    onClick={handleButtonClick} style={{
                                                padding: '16px 26px 28px 27px',
                                                width: '100%',
                                                height: '100%',
                                                cursor: 'pointer',
                                                border: 'none',
                                                display: "flex",
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '13px',
                                                backgroundColor: 'transparent'
                                            }}>
                                                <Grid mb={'12px'} display={'flex'} alignItems={'center'}
                                                      justifyContent={'center'}>
                                                    <DesktopUpload fill={theme.palette.main}/>
                                                </Grid>
                                                <Typography variant={'h3'} color={theme.palette.main} fontWeight={700}
                                                            pb={'8px'}>آپلود کنید</Typography>
                                                <Typography variant={'subtitle1'} fontWeight={500}
                                                            color={theme.palette.light}>لورم ایپسوم متن ساختگی با تولید
                                                    سادگی </Typography>
                                                <span className="DesktopFileNameDisplay"
                                                      style={{fontWeight: 700, color: theme.palette.dark}}></span>
                                            </button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid display={{xs: 'block', llg: 'flex'}} alignItems={'flex-start'}
                              justifyContent={'space-between'} gap={{lg: '20px'}}>
                            <Grid className={'AllProjects'} p={{xs: '16px 24px', lg: '23px 31px 31px 31px'}}
                                  borderRadius={{xs: '15px'}} height={{lg: '554px'}} width={{xs: '100%', llg: '33%'}}
                                  mb={'16px'} bgcolor={'white'}>
                                <Typography variant={Information} color={theme.palette.dark} fontWeight={700}
                                            pb={{xs: '13px', md: '16px'}}>همه پروژه ها</Typography>
                                <Typography variant={desPersonal} color={theme.palette.light} fontWeight={700}
                                            pb={{xs: '24px', md: '42px'}}>مورد نیاز، و کاربردهای متنوع با هدف بهبود
                                    ابزارهای کاربردی می
                                    باشد، کتابهای زیادی در شصن را می طلبد،</Typography>
                                <Grid maxHeight={{xs: '266px', lg: '360px'}} sx={{
                                    overflow: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                                        display: 'none',
                                    },
                                }}>
                                    {
                                        projectsData.map(
                                            item =>
                                                <Grid key={item.id} mt={item.id === 1 ? '5px' : '0px'}
                                                      p={{xs: '8px', md: '14px', llg: '14px 7px'}} mb={'16px'}
                                                      borderRadius={'10px'} boxShadow={2} mx={'2px'} display={'flex'}
                                                      alignItems={'center'} justifyContent={'space-between'}>
                                                    <Grid display={'flex'} alignItems={'center'}
                                                          justifyContent={'flex-start'} gap={{
                                                        xs: '4px',
                                                        xxs: '16px',
                                                        llg: '6px',
                                                        g: '12px',
                                                        xl: '16px'
                                                    }}>
                                                        <Grid className={'image'}
                                                              width={{xs: '40px', xxs: '60px', g: '50px', xl: '60px'}}
                                                              height={{xs: '40px', xxs: '60px', g: '50px', xl: '60px'}}>
                                                            <img src={item.imageSrc} alt={''} width={"100%"}
                                                                 height={"100%"} style={{borderRadius: '10px'}}/>
                                                        </Grid>
                                                        <Grid className={'description'}>
                                                            <Typography variant={HeaderTitleCard}
                                                                        color={theme.palette.dark} fontWeight={500}>مورد
                                                                نیاز، و کاربردهای متنوع با هدف</Typography>
                                                            <Grid display={'flex'} alignItems={'center'}
                                                                  justifyContent={'flex-start'} gap={'6px'}>
                                                                <Typography variant={HeaderTitleCard}
                                                                            color={theme.palette.light}
                                                                            fontWeight={500}>{item.projectName}</Typography>
                                                                <Typography variant={'h6'} color={theme.palette.light}
                                                                            fontWeight={500}>•</Typography>
                                                                <a href={'#'}
                                                                   style={{color: theme.palette.main}}><Typography
                                                                    variant={HeaderTitleCard} color={theme.palette.main}
                                                                    fontWeight={500}>{item.projectDetails}</Typography></a>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid className={'pen'} width={'18px'} height={'18px'}>
                                                        <img src={'/assets/images/edit.svg'} alt={''} width={'100%'}
                                                             height={'100%'}/>
                                                    </Grid>
                                                </Grid>
                                        )
                                    }
                                </Grid>
                            </Grid>
                            <Grid className={'LoremProfileProjects'} bgcolor={'white'}
                                  p={{xs: '16px 24px', lg: '27px 31px 31px 31px'}} borderRadius={{xs: '15px'}}
                                  height={{lg: '554px'}} width={{xs: '100%', llg: '44%', g: '40%'}} mb={'16px'}>
                                <Typography variant={Information} color={theme.palette.dark}
                                            fontWeight={700} pb={'10px'}>لورم ایپسوم متن</Typography>
                                <Typography variant={desPersonal} color={theme.palette.light}
                                            fontWeight={500} pb={'20px'} lineHeight={'24px'} textAlign={'justify'}>لورم
                                    ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                                    و مجله در
                                    ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                                    متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته نیاز، و
                                    کاربردهای متنوع با
                                    هدف
                                </Typography>
                                <Grid sx={{
                                    display: display,
                                    gridTemplateColumns: '1fr 1fr',
                                    overflow: 'auto',
                                    scrollbarWidth: 'none',
                                    '&::-webkit-scrollbar': {
                                        display: 'none',
                                    },
                                }} gap={'10px'} maxHeight={{xs: '392px', lg: '311px'}} mx={'auto'}>
                                    {
                                        LoremData.map(
                                            item =>
                                                <Grid p={{
                                                    xs: '14px 35px',
                                                    xxs: '14px 40px 14px 69px',
                                                    lg: '14px 31px 14px 81px',
                                                    llg: '14px 10px',
                                                    xl: '14px 40px 14px 49px'
                                                }} borderRadius={'16px'}
                                                      boxShadow={'0px 18px 40px 0px #7090B01F'}
                                                      mb={item.id === LoremData.length ? '8px' : {xs: '8px', lg: '0px'}}
                                                      width={{xs: '98%', llg: '200px', xl: '268px'}} mx={'auto'}>
                                                    <Typography variant={desPersonal} fontWeight={500}
                                                                color={theme.palette.light}>{item.title}</Typography>
                                                    <Typography variant={LoremTitle} fontWeight={500}
                                                                color={theme.palette.dark}>{item.subTitle}</Typography>
                                                </Grid>
                                        )
                                    }
                                </Grid>
                            </Grid>
                            <Grid p={{
                                xs: '16px 24px',
                                lg: '27px 31px 31px 31px',
                                llg: '27px 15px 31px 15px',
                                g: '27px 31px 31px 31px'
                            }} bgcolor={'white'} borderRadius={{xs: '15px', lg: '20px'}} height={{lg: '554px'}}
                                  width={{xs: '100%', llg: '23%', xl: '27%'}}>
                                <Grid className={'HeaderNotification'} display={'flex'} alignItems={'center'}
                                      justifyContent={'space-between'} pb={{xs:'24px' , md:'30px'}}>
                                    <Typography variant={HeaderKanbanVariant} color={theme.palette.dark}
                                                fontWeight={700}>اعلان ها</Typography>
                                    <ChartMoreOption/>
                                </Grid>
                                <Grid className="AllNotifications" id="notificationContainer"
                                      maxHeight={{xs: '178px', md: '432px'}}
                                      sx={{
                                          overflowY: 'auto',
                                          scrollbarWidth: 'none',
                                          '&::-webkit-scrollbar': {
                                              display: 'none',
                                          },
                                      }}>
                                    {
                                        notificationTexts.map(
                                            item =>
                                                <Grid key={item.id} pb={item.id === notificationTexts.length ? '0px' :'24px'}>
                                                    <FormControlLabel sx={{display:'flex' , alignItems:'center' , justifyContent:'flex-start' , gap:'8px' , marginRight: 0,}}
                                                        control={<IOSSwitch sx={{ my: 1 }} defaultChecked = {item.checked} />}
                                                        label={<Typography  variant={'subtitle1'} color={theme.palette.dark} fontWeight={500}>{item.text}</Typography>}
                                                    />

                                                </Grid>
                                        )
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Profile
