import React, {useEffect} from 'react'
import {Grid} from "@mui/material";
import Chart from 'chart.js/auto';
import theme from "../../Theme/Theme";

const MonthlyIncomeChart = () => {

    Chart.defaults.font.family = "Yekan Bakh";

    useEffect(() => {
        const ctx = document.getElementById('myLineChart').getContext('2d');

        // Create initial chart data
        const initialData = {
            labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
            datasets: [
                {
                    label: 'مخارج',
                    data: [25, 25, 6, 28, 6, 24, 18],
                    borderColor: theme.palette.five,
                    borderWidth: 4,
                    fill: false,
                    tension: 0.4,
                },
                {
                    label: 'درآمد',
                    data: [25, 25, 6, 28, 6, 24, 18],
                    borderColor: theme.palette.main,
                    borderWidth: 4,
                    fill: false,
                    tension: 0.4,
                },
            ],
        };

        // Create or update the chart
        const myChart = new Chart(ctx, {
            type: 'line',
            data: initialData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                dir: 'rtl',
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: function (context) {
                            const tooltipItem = context.tooltip.dataPoints[0];
                            if (context.chart.data.datasets[tooltipItem.datasetIndex].label === 'مخارج') {
                                return theme.palette.five;
                            } else {
                                return theme.palette.main;
                            }
                        },
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.formattedValue + ' میلیون';
                            },
                            title: function () {
                                return [];
                            },
                        },
                        displayColors: false,
                        yAlign: 'bottom',
                        bodyFont: {
                            family: 'Yekan Bakh',
                            weight: 700,
                            color: 'black',
                        },
                        borderColor: 'black',
                        borderWidth: 0,
                        titleFont: {
                            family: 'Yekan Bakh',
                        },
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
                            display: false,
                            fontSize: 14,
                            fontFamily: 'Yekan Bakh',
                        },
                    },
                    x: {
                        stacked: true,
                        barThickness: 17,
                        barPercentage: 0,
                        gridLines: {
                            drawBorder: false,
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                    },
                },
            },
        });

        // Return a cleanup function to destroy the chart when the component unmounts
        return () => {
            myChart.destroy();
        };
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <Grid className="ChartMonthlyIncome"  display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <canvas id="myLineChart" style={{ height: '190px', width: '100%' }} />
        </Grid>
    )
}
export default MonthlyIncomeChart
