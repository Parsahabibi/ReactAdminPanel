import React, {useEffect, useState} from 'react'
import {Grid, useTheme} from "@mui/material";
import theme from "../../Theme/Theme";
import './Calender.css'

const Calender = () => {

    const theme = useTheme()

    const [selectedYear, setSelectedYear] = useState(1402);
    const [selectedMonth, setSelectedMonth] = useState(0); // January is 0 in JavaScript Date
    const [monthDays, setMonthDays] = useState([31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]);

    const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    const weekDays = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];


    useEffect(() => {
        updateMonthDays();
    }, [selectedYear, selectedMonth]);


    const handleDayClick = (event) => {
        event.currentTarget.classList.toggle('daySelected');
    };

    const getFirstDayOfMonth = (year, monthIndex) => {
        let totalDays = 0;

        for (let y = 1402; y < year; y++) {
            totalDays += isLeapYear(y) ? 366 : 365;
        }

        for (let m = 0; m < monthIndex; m++) {
            totalDays += monthDays[m];
        }

        return (3 + totalDays) % 7;
    };

    const isLeapYear = (year) => {
        return year === 1403 || year === 1407 || year === 1411;
    };


    const updateMonthDays = () => {
        const daysContainer = document.getElementById('monthsContainer');
        daysContainer.innerHTML = '';

        if (isLeapYear(selectedYear) && selectedMonth === 11) {
            monthDays[11] = 30;
        } else {
            monthDays[11] = 29;
        }

        for (let w = 0; w < 7; w++) {
            const weekDayDiv = document.createElement('div');
            weekDayDiv.className = 'weekday-container';

            const weekDayName = document.createElement('p');
            weekDayName.innerText = weekDays[w];
            weekDayDiv.appendChild(weekDayName);

            const daysDiv = document.createElement('div');
            daysDiv.className = 'month-days';

            let currentDayOfWeek = getFirstDayOfMonth(selectedYear, selectedMonth);

            if (w < currentDayOfWeek) {
                daysDiv.classList.add('first-day-offset');
            }

            for (let d = 1; d <= monthDays[selectedMonth]; d++) {
                if (currentDayOfWeek === w) {
                    const dayDiv = document.createElement('div');
                    dayDiv.className = 'day';
                    dayDiv.style.cursor = 'pointer';

                    if (currentDayOfWeek === 6 || (selectedMonth === 0 && (d === 1 || d === 2 || d === 3 || d === 4 || d === 12 || d === 13))) {
                        dayDiv.classList.add('day-special');
                    }

                    if ((selectedMonth === 0 && (d === 22 || d === 24))) {
                        const styleTag = document.createElement('style');
                        styleTag.innerHTML = `.daySelected { background-color:${theme.palette.main} ; }`;
                        document.head.appendChild(styleTag);
                        dayDiv.classList.add('daySelected');
                    }

                    dayDiv.innerText = d.toString();
                    dayDiv.addEventListener('click', handleDayClick);
                    daysDiv.appendChild(dayDiv);
                }
                currentDayOfWeek = (currentDayOfWeek + 1) % 7;
            }

            weekDayDiv.appendChild(daysDiv);
            daysContainer.appendChild(weekDayDiv);
        }
    };


    const updateCalendar = () => {
        updateMonthDays();
    };


    return (
        <Grid className={'Calender'}
              p={{xs: '16px 13px', md: '16px 0', lg: '16px 13px', g: '16px 4px', xg: '16px 13px'}}
              mb={{xs: '16px', md: '0'}} bgcolor={'white'} borderRadius={'20px'} height={{lg: '345px'}}>
            <Grid className={'select'} display={'flex'} alignItems={'baseline'} justifyContent={'center'}
                  flexWrap={'nowrap'} gap={'16px'}>
                <label htmlFor="yearSelector"></label>
                <select
                    id="yearSelector"
                    className="yearSelector custom-select"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
                    style={{
                        border: "none !important",
                        padding: '8px 30px 8px 10px',
                        width: '100px',
                        borderRadius: '40px',
                        cursor: 'pointer',
                        background: 'transparent',
                        color: theme.palette.dark,
                        fontWeight: 700,
                        backgroundImage: 'url(/assets/images/ChevronDown.svg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '95% center',
                        backgroundSize: '24px',
                        appearance: 'none',
                        direction: "rtl",
                        textAlignLast: 'right',
                        marginBottom: '21px',
                        '&:focus, &:active': {
                            outline: 'none',
                            border: 'none',
                            boxShadow: 'none',
                        },
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                    }}
                >
                    {Array.from({length: 10}, (_, i) => (
                        <option key={1402 + i} value={1402 + i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '0 auto'
                        }}>
                            {1402 + i}
                        </option>
                    ))}
                </select>
                <label htmlFor="monthSelector"></label>
                <select
                    id="monthSelector"
                    className="monthSelector custom-select"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
                    style={{
                        border: "none !important",
                        padding: '8px 30px 8px 10px',
                        width: '100px',
                        borderRadius: '40px',
                        cursor: 'pointer',
                        background: 'transparent',
                        backgroundColor: theme.palette.one,
                        color: theme.palette.main,
                        fontWeight: 700,
                        backgroundImage: 'url(/assets/images/ChevronDownBlue.svg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '95% center',
                        backgroundSize: '24px',
                        appearance: 'none',
                        direction: 'rtl',
                        textAlignLast: 'right',
                        marginBottom: '21px',
                        '&:focus': {
                            borderColor: 'red',
                            outline: 'none',
                        },
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                    }}
                >
                    {monthNames.map((month, index) => (
                        <option key={index} value={index}>
                            {month}
                        </option>
                    ))}
                </select>
            </Grid>
            <Grid id="monthsContainer" className="monthsContainer" display={'flex'} justifyContent={'center'} gap={0}>
            </Grid>
        </Grid>
    )
}
export default Calender
