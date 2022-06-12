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
import Button from '../components/bootstrap/Button';


const AirControl = () => {
	const { darkModeStatus } = useDarkMode();
	return (
		<Card>
			<CardHeader>
				<CardLabel icon='Air' iconColor='light'>
					<CardTitle>Air Quality Control</CardTitle>
				</CardLabel>
				<CardActions>
					Last updated <strong>June 12</strong>
				</CardActions>
			</CardHeader>
			<CardBody>
				<div className='row g-4 align-items-center'>
					<div className='col-xl-6'>
						<Button
							color='success'
							isOutline='true'
							icon='Air'
							shadow='none'
							size='lg'
							hoverShadow='lg'>
							Fan #1: ON
						</Button>
					</div>
					<div className='col-xl-6'>
						<Button
							color='success'
							isOutline='true'
							icon='Air'
							shadow='none'
							size='lg'
							hoverShadow='lg'>
							Fan #2: ON
						</Button>
					</div>
					<div className='col-xl-6'>
						<Button
							color='light'
							isOutline='true'
							icon='WaterDrop'
							shadow='none'
							size='lg'
							hoverShadow='lg'>
							Water Pump: ON
						</Button>
					</div>
					<div className='col-xl-6'>
						<Button
							color='light'
							isOutline='true'
							icon='WaterDrop'
							shadow='none'
							size='lg'
							hoverShadow='lg'>
							Humdifier: ON
						</Button>
					</div>
				</div>
			</CardBody>
		</Card>

	);
};

export default AirControl;