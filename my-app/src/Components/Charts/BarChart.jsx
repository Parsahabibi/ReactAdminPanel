import React, {useEffect} from 'react'
import {Grid} from "@mui/material";

const BarChart = () => {


    function toPersianNum(englishNumber) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return englishNumber.toString().split('').map(d => persianDigits[parseInt(d, 10)]).join('');
    }


    const data = [
        { number: 0, value: 50 },
        { number: 4, value: 100 },
        { number: 8, value: 60 },
        { number: 12, value: 80 },
        { number: 14, value: 50 },
        { number: 16, value: 70 },
        { number: 18, value: 30 },
    ];


    useEffect(() => {
        const container = document.querySelector('.BarChartSingle');

        data.forEach((item) => {
            const barChartDiv = document.createElement('div');
            barChartDiv.style.display = 'flex';
            barChartDiv.style.flexDirection = 'column';
            barChartDiv.style.alignItems = 'center';
            barChartDiv.style.gap = '8px';

            const barDiv = document.createElement('div');
            barDiv.style.background = 'linear-gradient(to top, #4318FF, #5E4AE6)';
            barDiv.style.width = '10px';
            barDiv.style.height = `${item.value / 1}px`; // Setting the height based on value
            barChartDiv.appendChild(barDiv);

            const desktopLabelP = document.createElement('p');
            desktopLabelP.style.display = 'none';
            desktopLabelP.style.color = '#4318FF';
            desktopLabelP.textContent = toPersianNum(item.number < 10 ? '0' + item.number : item.number);
            barChartDiv.appendChild(desktopLabelP);

            const mobileLabelSpan = document.createElement('span');
            mobileLabelSpan.style.display = 'block';
            mobileLabelSpan.style.color = '#4318FF';
            mobileLabelSpan.textContent = toPersianNum(item.number < 10 ? '0' + item.number : item.number);
            barChartDiv.appendChild(mobileLabelSpan);

            container.appendChild(barChartDiv);
        });
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <Grid className="BarChartSingle" style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end', gap: '3px' }} />
    )
}
export default BarChart
