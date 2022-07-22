import React, { useEffect, useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../components/bootstrap/Card';
import Chart from '../components/extras/Chart';
import { getSensorData, setSensorData } from '../controller';

const Temperature = () => {
	const { darkModeStatus } = useDarkMode();
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
				id: 'realtime',
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
				ApexCharts.exec('realtime', 'updateSeries', [
					{
						data: sensorData.temperature,
					},
				]);
				setTemperatureData(sensorData.temperature);
				setSensorData('temperature', Math.random() * 5 + 10);
			}
		}, 100);

		return () => clearInterval(newIntervalId);
	}, [temperatureData]);

	return (
		<Card>
			<CardHeader>
				<CardLabel icon='StackedLineChart'>
					<CardTitle>Temperature</CardTitle>
				</CardLabel>
				<CardActions>
					Last updated <strong>June 12</strong>
				</CardActions>
			</CardHeader>
			<CardBody>
				<Chart
					series={state.series}
					options={state.options}
					type={state.options.chart.type}
					height={state.options.chart.height}
				/>
			</CardBody>
		</Card>
	);
};

export default Temperature;
