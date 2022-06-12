import React from 'react';
import moment from 'moment';
import useDarkMode from '../hooks/useDarkMode';

import { priceFormat } from '../helpers/helpers';

import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../components/bootstrap/Card';
import Icon from '../components/icon/Icon';


const Stats = () => {
	const { darkModeStatus } = useDarkMode();
	return (
		<Card>
			<CardHeader>
				<CardLabel icon='StackedLineChart'>
					<CardTitle>Quick Stats</CardTitle>
				</CardLabel>
				<CardActions>
					Last updated <strong>June 12</strong>
				</CardActions>
			</CardHeader>
			<CardBody>
				<div className='row g-4 align-items-center'>
					<div className='col-xl-6'>
						<div
							className={`d-flex align-items-center bg-l${darkModeStatus ? 'o25' : '10'
								}-warning rounded-2 p-3`}>
							<div className='flex-shrink-0'>
								<Icon icon='Thermostat' size='3x' color='warning' />
							</div>
							<div className='flex-grow-1 ms-3'>
								<div className='fw-bold fs-3 mb-0'>17°C</div>
								<div className='text-muted mt-n2 truncate-line-1'>
									Temperature
								</div>
							</div>
						</div>
					</div>
					<div className='col-xl-6'>
						<div
							className={`d-flex align-items-center bg-l${darkModeStatus ? 'o25' : '10'
								}-info rounded-2 p-3`}>
							<div className='flex-shrink-0'>
								<Icon icon='WaterDrop' size='3x' color='info' />
							</div>
							<div className='flex-grow-1 ms-3'>
								<div className='fw-bold fs-3 mb-0'>6%</div>
								<div className='text-muted mt-n2 truncate-line-1'>
									Humidity
								</div>
							</div>
						</div>
					</div>
					<div className='col-xl-6'>
						<div
							className={`d-flex align-items-center bg-l${darkModeStatus ? 'o25' : '10'
								}-primary rounded-2 p-3`}>
							<div className='flex-shrink-0'>
								<Icon icon='Water' size='3x' color='primary' />
							</div>
							<div className='flex-grow-1 ms-3'>
								<div className='fw-bold fs-3 mb-0'>39.47L</div>
								<div className='text-muted mt-n2 truncate-line-1'>
									Water Remaining
								</div>
							</div>
						</div>
					</div>
					<div className='col-xl-6'>
						<div
							className={`d-flex align-items-center bg-l${darkModeStatus ? 'o25' : '10'
								}-success rounded-2 p-3`}>
							<div className='flex-shrink-0'>
								<Icon icon='CalendarToday' size='3x' color='success' />
							</div>
							<div className='flex-grow-1 ms-3'>
								<div className='fw-bold fs-3 mb-0'>21 days</div>
								<div className='text-muted mt-n2'>Since Harvest</div>
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>

	);
};

export default Stats;