import React, { useEffect, useState } from 'react';
import Chart from '../../components/extras/Chart';
import { getSensorData, setSensorData } from '../../controller';

const TemperatureChart = () => {
	const [temperatureData, setTemperatureData] = useState([]);

	const [state] = useState({
		series: [
			{
				name: 'Temperature',
				data: temperatureData,
			},
		],
		options: {
			chart: {
				id: 'temperature',
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
				min: -10,
				max: 35,
				tickAmount: 3,
				labels: {
					formatter: (value) => {
						return `${value}°C`;
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
				ApexCharts.exec('temperature', 'updateSeries', [
					{
						data: sensorData.temperature,
					},
				]);
				setTemperatureData(sensorData.temperature);
				setSensorData('temperature', Math.random() * 5 + 10);
			}
		}, 500);

		return () => clearInterval(newIntervalId);
	}, [temperatureData]);

	return (
		<Chart
			series={state.series}
			options={state.options}
			type={state.options.chart.type}
			height={state.options.chart.height}
		/>
	);
};

export default TemperatureChart;
