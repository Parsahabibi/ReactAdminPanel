import React, {useEffect, useRef} from 'react'
import { Pie } from 'react-chartjs-2';
import {Grid, useTheme} from "@mui/material";
import Chart from 'chart.js/auto';

const CircleChart = () => {

    const theme = useTheme()
    const chartContainer = useRef(null);

    useEffect(() => {
        const ctx = document.getElementById('myPieChart').getContext('2d');

        const dataValues = [63, 25, 12];

        const myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['فایل های شما', 'سیستم', 'سایر'],
                datasets: [
                    {
                        data: dataValues,
                        backgroundColor: [theme.palette.main, theme.palette.five, theme.palette.six], // Replace with your actual colors
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        rtl: true,
                        callbacks: {
                            label: function (tooltipItem) {
                                const persianValue = tooltipItem.formattedValue.replace(/\d/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1728));
                                return persianValue + ' درصد';
                            },
                        },
                        displayColors: false,
                        titleFont: {
                            family: 'Yekan Bakh',
                            size: 14,
                        },
                        bodyFont: {
                            family: 'Yekan Bakh',
                            size: 14,
                        },
                    },
                },
            },
        });

        // Return a cleanup function to destroy the chart when the component unmounts
        return () => {
            myPieChart.destroy();
        };
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <Grid ref={chartContainer} width={{xs:'92px' , sm:'140px' , md:'144px'}} mx={'auto'} pb={{ xs: '5px', md: '21px' }}>
            <canvas id="myPieChart" style={{width:'100%' , height:'144px'}}/>
        </Grid>

    )
}
export default CircleChart
