import React, { useEffect, useState } from 'react';
import Chart from '../../components/extras/Chart';
import { getSensorData, setSensorData } from '../../controller';

const HumidityChart = () => {
	const [humidityData, setHumidityData] = useState([]);

	const [state] = useState({
		series: [
			{
				name: 'Humidity',
				data: humidityData,
			},
		],
		options: {
			chart: {
				id: 'humidity',
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
				min: 0,
				max: 100,
				tickAmount: 4,
				labels: {
					formatter: (value) => {
						return `${value}%`;
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
				ApexCharts.exec('humidity', 'updateSeries', [
					{
						data: sensorData.humidity,
					},
				]);
				setHumidityData(sensorData.humidity);
				setSensorData('humidity', Math.random() * 20 + 60);
			}
		}, 500);

		return () => clearInterval(newIntervalId);
	}, [humidityData]);

	return (
		<Chart
			series={state.series}
			options={state.options}
			type={state.options.chart.type}
			height={state.options.chart.height}
		/>
	);
};

export default HumidityChart;
