import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import theme from "../../Theme/Theme";
import {Grid, useTheme} from "@mui/material";

const WeeklyIncomeChart = () => {

    Chart.defaults.font.family = "Yekan Bakh";

    // Function to convert Arabic/Persian numerals to Western numerals

    const convertToPersianNumber = (input) => {
        const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
        const inputString = String(input);
        return inputString.replace(/\d/g, d => persianDigits[d]);
    };

    const theme = useTheme()


    useEffect(() => {
        // Chart.js initialization code
        let ctx = document.getElementById('myBarChart').getContext('2d');
        let myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['19', '20', '21', '22', '23', '24', '25'].map(item => convertToPersianNumber(item)),
                datasets: [
                    {
                        label:convertToPersianNumber('بخش 1'),
                        data: [5, 10, 15, 20, 25, 30, 35],
                        backgroundColor:  theme.palette.four,
                    },
                    {
                        label:convertToPersianNumber('بخش 2'),
                        data: [3, 6, 9, 12, 15, 18, 21],
                        backgroundColor:  theme.palette.five,
                    },
                    {
                        label:convertToPersianNumber('بخش 3'),
                        data: [2, 4, 6, 8, 10, 12, 14],
                        backgroundColor: theme.palette.six,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            dir:'rtl',
                            label: (context) => {
                                let label = context.dataset.label;
                                label += ' : ';
                                label += convertToPersianNumber(context.parsed.y);
                                return label;
                            },
                        },
                        align: 'right',              // Set the alignment
                        textDirection: 'rtl',
                        dir:'rtl'// Set the text direction to right-to-left
                    },
                },

                scales: {
                    y: {
                        beginAtZero: true,
                        stacked: true,
                        gridLines: {
                            drawBorder: false,
                            display: false,
                            drawOnChartArea: false,
                        },
                        grid: {
                            display: false,
                        },
                        ticks: {
                            callback: (value) => convertToPersianNumber(value),
                            display: false,
                            fontSize: 14,
                            fontWeight: '900'
                        },
                    },
                    x: {
                        stacked: true,
                        barPercentage: 0.7, // Adjust the width of every bar (percentage)
                        categoryPercentage: 1, // Adjust the space between categories
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                        ticks: {
                            fontSize: 14,
                            fontWeight: '900',
                            style: {
                                fontWeight: '900', // Set the font weight for the labels
                            },
                            // callback: (value) => convertToPersianNumber(value), // Convert X-axis ticks to Persian numbers
                        },
                    },
                },
            },
        });

        // Clean up function (optional)
        return () => {
            myBarChart.destroy();
        };
    }, []); // Empty dependency array means this effect will run once on component mount

    return (
        <Grid className="weeklyIncome">
            <div className="chartWeeklyIncome">
                <canvas id="myBarChart" className="myBarChart" style={{width:'100%' , height:'200px'}}></canvas>
            </div>
        </Grid>
    );
};

export default WeeklyIncomeChart;
