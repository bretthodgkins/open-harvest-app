import React, { useEffect, useState } from 'react';
import Chart from '../../components/extras/Chart';
import { getSensorData, setSensorData } from '../../controller';

const ECChart = () => {
	const [ecData, setECData] = useState([]);

	const [state] = useState({
		series: [
			{
				name: 'EC',
				data: ecData,
			},
		],
		options: {
			chart: {
				id: 'ec',
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
				min: 1.0,
				max: 2.0,
				tickAmount: 4,
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
				ApexCharts.exec('ec', 'updateSeries', [
					{
						data: sensorData.ec,
					},
				]);
				setECData(sensorData.ec);
				setSensorData('ec', Math.random() * 0.4 + 1.4);
			}
		}, 500);

		return () => clearInterval(newIntervalId);
	}, [ecData]);

	return (
		<Chart
			series={state.series}
			options={state.options}
			type={state.options.chart.type}
			height={state.options.chart.height}
		/>
	);
};

export default ECChart;
