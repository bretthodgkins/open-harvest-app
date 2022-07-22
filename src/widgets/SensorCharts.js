import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../components/bootstrap/Card';
import Carousel from '../components/bootstrap/Carousel';
import CarouselSlide from '../components/bootstrap/CarouselSlide';
import TemperatureChart from './charts/TemperatureChart';
import HumidityChart from './charts/HumidityChart';
import PHChart from './charts/PHChart';
import ECChart from './charts/ECChart';

const SensorCharts = () => {
	const { darkModeStatus } = useDarkMode();

	return (
		<Carousel rounded={3} interval={20000} isHoverPause isDark={!darkModeStatus}>
			<CarouselSlide className='carousel-bg-dark'>
				<CardHeader className='carousel-bg-dark'>
					<CardLabel icon='StackedLineChart'>
						<CardTitle>Temperature</CardTitle>
					</CardLabel>
					<CardActions>
						Last updated <strong>June 12</strong>
					</CardActions>
				</CardHeader>
				<CardBody className='carousel-bg-dark'>
					<div className='row g-4 align-items-center'>
						<div className='col-xl-9 offset-xl-1'>
							<TemperatureChart />
						</div>
					</div>
				</CardBody>
			</CarouselSlide>
			<CarouselSlide className='carousel-bg-dark'>
				<CardHeader className='carousel-bg-dark'>
					<CardLabel icon='StackedLineChart'>
						<CardTitle>Humidity</CardTitle>
					</CardLabel>
					<CardActions>
						Last updated <strong>June 12</strong>
					</CardActions>
				</CardHeader>
				<CardBody className='carousel-bg-dark'>
					<div className='row g-4 align-items-center'>
						<div className='col-xl-9 offset-xl-1'>
							<HumidityChart />
						</div>
					</div>
				</CardBody>
			</CarouselSlide>
			<CarouselSlide className='carousel-bg-dark'>
				<CardHeader className='carousel-bg-dark'>
					<CardLabel icon='StackedLineChart'>
						<CardTitle>pH</CardTitle>
					</CardLabel>
					<CardActions>
						Last updated <strong>June 12</strong>
					</CardActions>
				</CardHeader>
				<CardBody className='carousel-bg-dark'>
					<div className='row g-4 align-items-center'>
						<div className='col-xl-9 offset-xl-1'>
							<PHChart />
						</div>
					</div>
				</CardBody>
			</CarouselSlide>
			<CarouselSlide className='carousel-bg-dark'>
				<CardHeader className='carousel-bg-dark'>
					<CardLabel icon='StackedLineChart'>
						<CardTitle>EC</CardTitle>
					</CardLabel>
					<CardActions>
						Last updated <strong>June 12</strong>
					</CardActions>
				</CardHeader>
				<CardBody className='carousel-bg-dark'>
					<div className='row g-4 align-items-center'>
						<div className='col-xl-9 offset-xl-1'>
							<ECChart />
						</div>
					</div>
				</CardBody>
			</CarouselSlide>
		</Carousel>
	);
};

export default SensorCharts;
