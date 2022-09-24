import React, { useEffect, useState } from 'react';

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

import { getIsGreenLightOn, toggleGreenLight, getUserTokenBalance } from '../web3';
import { setDeviceState } from '../controller';

const LightControl = () => {
	const [isLightOneOn, setIsLightOneOn] = useState(false);
	const [isLightTwoOn, setIsLightTwoOn] = useState(false);
	const [isLightThreeOn, setIsLightThreeOn] = useState(false);
	const [isLightFourOn, setIsLightFourOn] = useState(false);
	const [isLEDStripOn, setIsLEDStripOn] = useState(false);

	const { darkModeStatus } = useDarkMode();

	useEffect(() => {
		fetchAndSetLights();
	}, []);

	const fetchAndSetLights = async () => {
		setIsLightOneOn(await getIsGreenLightOn());
	};

	const toggleLightOne = async () => {
		// const rv = await toggleGreenLight();
		// setIsLightOneOn(await getIsGreenLightOn());
		const rv = await setDeviceState('Light 1', !isLightOneOn);
		setIsLightOneOn(!isLightOneOn);
		getUserTokenBalance();
	};

	const toggleLightTwo = async () => {
		// const rv = await toggleGreenLight();
		// setIsLightOneOn(await getIsGreenLightOn());
		const rv = await setDeviceState('Light 2', !isLightTwoOn);
		setIsLightTwoOn(!isLightTwoOn);
		getUserTokenBalance();
	};

	const toggleLightThree = async () => {
		// const rv = await toggleGreenLight();
		// setIsLightOneOn(await getIsGreenLightOn());
		const rv = await setDeviceState('Light 3', !isLightThreeOn);
		setIsLightThreeOn(!isLightThreeOn);
		getUserTokenBalance();
	};

	const toggleLightFour = async () => {
		// const rv = await toggleGreenLight();
		// setIsLightOneOn(await getIsGreenLightOn());
		const rv = await setDeviceState('Light 4', !isLightFourOn);
		setIsLightFourOn(!isLightFourOn);
		getUserTokenBalance();
	};

	const toggleLEDStrip = async () => {
		// const rv = await toggleGreenLight();
		// setIsLightOneOn(await getIsGreenLightOn());
		const rv = await setDeviceState('LED Strip', !isLEDStripOn);
		setIsLEDStripOn(!isLEDStripOn);
		getUserTokenBalance();
	};

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
		{
			name: 'LED Strip',
			isLightOn: isLEDStripOn,
			setIsLightOn: setIsLEDStripOn,
			onClick: toggleLEDStrip,
		},
		{
			name: 'Light #3',
			isLightOn: isLightThreeOn,
			setIsLightOn: setIsLightThreeOn,
			onClick: toggleLightThree,
		},
		{
			name: 'Light #4',
			isLightOn: isLightFourOn,
			setIsLightOn: setIsLightFourOn,
			onClick: toggleLightFour,
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
						<div key={i.name} className='col-xl-4'>
							<Button
								color={i.isLightOn ? 'warning' : 'dark'}
								icon={i.isLightOn ? 'Light' : 'Bedtime'}
								shadow='none'
								size='lg'
								hoverShadow='lg'
								onClick={i.onClick}>
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
