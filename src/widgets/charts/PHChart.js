import React, { useEffect, useState } from 'react';
import Chart from '../../components/extras/Chart';
import { getSensorData, setSensorData } from '../../controller';

const PHChart = () => {
	const [phData, setPHData] = useState([]);

	const [state] = useState({
		series: [
			{
				name: 'PH',
				data: phData,
			},
		],
		options: {
			chart: {
				id: 'ph',
				height: 150,
				type: 'line',
				animations: {
					enabled: false,
					easing: 'linear',
					dynamicAnimation: {
						speed: 1000,
					},
				},
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			markers: {
				size: 0,
			},
			stroke: {
				curve: 'smooth',
			},
			tooltip: {
				enabled: false,
			},
			xaxis: {
				labels: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
			yaxis: {
				min: 5,
				max: 6.5,
				tickAmount: 3,
				labels: {
					formatter: (value) => {
						return `${value}`;
					},
				},
			},
		},
	});

	useEffect(() => {
		const newIntervalId = setInterval(async () => {
			const sensorData = await getSensorData();
			if (sensorData) {
				// eslint-disable-next-line no-undef
				ApexCharts.exec('ph', 'updateSeries', [
					{
						data: sensorData.ph,
					},
				]);
				setPHData(sensorData.ph);
				setSensorData('ph', Math.random() * 0.5 + 5.5);
			}
		}, 500);

		return () => clearInterval(newIntervalId);
	}, [phData]);

	return (
		<Chart
			series={state.series}
			options={state.options}
			type={state.options.chart.type}
			height={state.options.chart.height}
		/>
	);
};

export default PHChart;
