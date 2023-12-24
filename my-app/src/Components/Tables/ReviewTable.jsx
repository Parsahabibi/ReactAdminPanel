import React, {useEffect, useState} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";

const ReviewTable = () => {


    const [rowData, setRowData] = useState(
        [
            {
                isChecked: false,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: false,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: false,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: false,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
            {
                isChecked: true,
                label: "لورم ایپسوم",
                progress: "17.5%",
                count: "2.458",
                date: "24.فرو.1402"
            },
        ]
)
    ;

    useEffect(() => {
        const savedRowData = JSON.parse(localStorage.getItem('rowData'));
        if (savedRowData) {
            setRowData(savedRowData);
        }
    }, []);

    const saveToLocalStorage = (data) => {
        localStorage.setItem('rowData', JSON.stringify(data));
    };

    const handleCheckboxChange = (index) => {
        // Create a shallow copy of the rowData array
        const updatedRowData = [...rowData];
        // Toggle the isChecked property for the specified index
        updatedRowData[index].isChecked = !updatedRowData[index].isChecked;
        // Update the state with the new rowData
        setRowData(updatedRowData);
        // Save to local storage
        saveToLocalStorage(updatedRowData);
    };


    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));

    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const isUp400px = useMediaQuery('(min-width: 400px)');

    const isUpXl = useMediaQuery((theme) => theme.breakpoints.up('xl'));

    let ItemsFont = 'subtitle2'

    if (isXs){
        ItemsFont = 'subtitle2'
    }
    if (isUp400px){
        ItemsFont = 'subtitle1'
    }
    if (isMd){
        ItemsFont = 'h6'
    }

    let HeaderTables = isMd ? 'h6' : 'subtitle1'

    let displayArrow = isMd ? 'block' : 'none'

    let paddingRight = isUpXl ? '66px' : '0px'


    return (
        <Grid maxHeight={{xs: '346px', lg: '430px'}} sx={{
            overflowY: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}>
            <table style={{borderCollapse: 'separate', borderSpacing: '0 16px', paddingRight: paddingRight}}>
                <thead>
                <tr>
                    <th className="TitleMainReviewTable">
                        <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'0px'}
                              className="TitleReviewTable" pl={{
                            xs: '60px',
                            xxs: '95px',
                            sm: '200px',
                            md: '120px',
                            lg: '65px',
                            g: '155px',
                            xl: '160px'
                        }}>
                            <Typography variant={HeaderTables} color={theme.palette.light}
                                        fontWeight={500}>عنوان</Typography>
                            <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                        </Grid>
                    </th>
                    <th className="ProgressMainReviewTable TitleMainReviewTable">
                        <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'0px'}
                              className="ProgressReviewTable TitleReviewTable" pl={{
                            xs: '10px',
                            xxs: '25px',
                            sm: '140px',
                            md: '70px',
                            lg: '20px',
                            g: '70px',
                            xl: '110px'
                        }}>
                            <Typography variant={HeaderTables} color={theme.palette.light}
                                        fontWeight={500}>پیشرفت</Typography>
                            <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                        </Grid>
                    </th>
                    <th className="NumberMainReviewTable TitleMainReviewTable">
                        <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'0px'}
                              className="NumberReviewTable TitleReviewTable" pl={{
                            xs: '10px',
                            xxs: '20px',
                            sm: '100px',
                            md: '60px',
                            lg: '20px',
                            g: '40px',
                            xl: '100px'
                        }}>
                            <Typography variant={HeaderTables} color={theme.palette.light}
                                        fontWeight={500}>تعداد</Typography>
                            <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                        </Grid>
                    </th>
                    <th className="DateMainReviewTable TitleMainReviewTable">
                        <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'0px'}
                              className="DateReviewTable TitleReviewTable">
                            <Typography variant={HeaderTables} color={theme.palette.light}
                                        fontWeight={500}>تاریخ</Typography>
                            <img style={{display: displayArrow}} src="/assets/images/keyboard_arrow_down.svg" alt=""/>
                        </Grid>
                    </th>
                </tr>
                </thead>
                <tr className="Spacing" style={{width:'100%' ,  height:'0px' , backgroundColor:'transparent'}}></tr>
                <tbody>
                <>
                    {rowData.map((item, index) => (
                        <tr key={index} style={{marginBottom: '16px'}}>
                            <td className="Input">
                                <Grid className="InputReviewTable" display={'flex'} alignItems={'center'}
                                      justifyContent={'flex-start'} gap={{xs: '4px', xxs: '11px'}}>
                                    <input
                                        style={{width: '16px', height: '16px' , accentColor:theme.palette.main}}
                                        id={`InputReviewTable${index + 1}`}
                                        type="checkbox"
                                        checked={item.isChecked}
                                        onChange={() => handleCheckboxChange(index)}

                                    />
                                    <label htmlFor={`InputReviewTable${index + 1}`}>
                                        <Typography variant={HeaderTables} fontWeight={isMd ? 700 : 500}
                                                    color={theme.palette.dark}> {item.label}</Typography>
                                    </label>
                                </Grid>
                            </td>
                            <td className="Progress">
                                <Typography variant={ItemsFont} color={theme.palette.dark}
                                            fontWeight={700}>{item.progress}</Typography>
                            </td>
                            <td className="Count">
                                <Typography variant={ItemsFont} color={theme.palette.dark}
                                            fontWeight={700}>{item.count}</Typography>
                            </td>
                            <td className="DateReviewTable">
                                <Typography variant={ItemsFont} color={theme.palette.dark}
                                            fontWeight={700}>{item.date}</Typography>
                            </td>
                        </tr>
                    ))}
                </>
                </tbody>
            </table>
        </Grid>
    )
}
export default ReviewTable
