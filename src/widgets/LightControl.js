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


const LightControl = () => {
	const { darkModeStatus } = useDarkMode();
	return (
		<Card>
			<CardHeader>
				<CardLabel icon='Lightbulb' iconColor='warning'>
					<CardTitle>Light Control</CardTitle>
				</CardLabel>
				<CardActions>
					Last updated <strong>June 12</strong>
				</CardActions>
			</CardHeader>
			<CardBody>
				<div className='row g-4 align-items-center'>
					<div className='col-xl-6'>
						<Button
							color='warning'
							icon='Light'
							shadow='none'
							size='lg'
							hoverShadow='lg'>
							Light #1: ON
						</Button>
					</div>
					<div className='col-xl-6'>
						<Button
							color='warning'
							icon='Light'
							shadow='none'
							size='lg'
							hoverShadow='lg'>
							Light #2: ON
						</Button>
					</div>
					<div className='col-xl-6'>
						<Button
							color='dark'
							icon='Bedtime'
							shadow='none'
							size='lg'
							hoverShadow='lg'>
							Light #3: OFF
						</Button>
					</div>
					<div className='col-xl-6'>
						<Button
							color='warning'
							icon='Light'
							shadow='none'
							size='lg'
							hoverShadow='lg'>
							Light #4: ON
						</Button>
					</div>
				</div>
			</CardBody>
		</Card>

	);
};

export default LightControl;