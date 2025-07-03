'use client';

import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SymptomsChart = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const days = Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`);

    const options: Highcharts.Options = {
        chart: {
            type: 'line',
            height: isFullScreen ? 500 : 300,
            spacing: [10, 10, 15, 10],
        },
        title: {
            text: 'Symptoms',
            align: 'left',
            style: {
                color: '#11401C',
                fontWeight: 'bold',
            },
        },
        xAxis: {
            categories: days,
            labels: {
                style: { fontSize: '11px' },
            },
            tickInterval: 2,
        },
        yAxis: {
            title: { text: '' },
            max: 10,
            plotLines: [
                {
                    value: 10,
                    color: '#E53E3E',
                    width: 2,
                    zIndex: 5,
                },
                {
                    value: 7,
                    color: '#11401C',
                    width: 2,
                    zIndex: 5,
                },
                {
                    value: 1,
                    color: '#CBD5E0',
                    width: 1,
                    zIndex: 5,
                },
            ],
            gridLineColor: '#f0f0f0',
        },
        series: [
            {
                type: 'line',
                name: 'Symptoms',
                data: [2, 4, 6, 3, 7, 8, 5, 6, 7, 4, 5, 6, 3, 5, 7, 8, 6, 4, 5, 6, 7, 8, 9, 10, 6, 4, 5, 6, 7, 8, 6],
                showInLegend: false,
            },
        ],
        tooltip: { enabled: false },
        credits: { enabled: false },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { fontWeight: 'normal' },
        },
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        xAxis: {
                            tickInterval: 3,
                        },
                    },
                },
            ],
        },
    };

    return (
        <div
            className={`relative transition-all duration-300 ease-in-out ${isFullScreen ? 'fixed inset-0 z-50 bg-white p-6 overflow-visible' : 'rounded-xl shadow p-4 bg-white w-full'
                }`}
        >
            <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="absolute top-4 right-4 p-2 bg-gray-100 rounded hover:bg-gray-200"
            >
                {isFullScreen ? "Expand" : "Collapse"}
            </button>

            <HighchartsReact highcharts={Highcharts} options={options} />
            <div className="flex justify-center gap-6 text-sm mt-2 overflow-hidden">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#E53E3E] rounded-sm" />
                    High
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#11401C] rounded-sm" />
                    Moderate
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-gray-300 rounded-sm" />
                    Low
                </div>
            </div>
        </div>
    );
};

export default SymptomsChart;