import React from 'react';
import { useEffect, useState } from 'react';

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

import { getIsGreenLightOn, toggleGreenLight } from '../web3'


const LightControl = () => {
	const [isLightOneOn, setIsLightOneOn] = useState(false);
	const [isLightTwoOn, setIsLightTwoOn] = useState(false);

	const { darkModeStatus } = useDarkMode();

	useEffect(() => {
		fetchAndSetLights();
	}, []);

	const fetchAndSetLights = async () => {
		setIsLightOneOn(await getIsGreenLightOn());
	}

	const toggleLightOne = async () => {
		const rv = await toggleGreenLight();
		setIsLightOneOn(await getIsGreenLightOn());
	}

	const toggleLightTwo = async () => {
		console.log('not yet implemented');
	}

	const allLights = [
		{ 
			name: 'Light #1',
			isLightOn: isLightOneOn,
			setIsLightOn: setIsLightOneOn,
			onClick: toggleLightOne,
		},
		{ 
			name: 'Light #2',
			isLightOn: isLightTwoOn,
			setIsLightOn: setIsLightTwoOn,
			onClick: toggleLightTwo,
		},
	];


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
					{allLights.map((i) => (
						<div key={i.name} className='col-xl-6'>
							<Button
								color={i.isLightOn ? 'warning' : 'dark'}
								icon={i.isLightOn ? 'Light' : 'Bedtime'}
								shadow='none'
								size='lg'
								hoverShadow='lg'
								onClick={i.onClick}
							>
								{i.name}: {i.isLightOn ? 'ON' : 'OFF'}
							</Button>
						</div>
					))}
				</div>
			</CardBody>
		</Card>

	);
};

export default LightControl;