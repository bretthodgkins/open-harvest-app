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

import { getPumpState, setPumpState } from '../controller';

const PumpControl = () => {
	const [isPumpOneOn, setIsPumpOneOn] = useState(false);
	const [isPumpTwoOn, setIsPumpTwoOn] = useState(false);

	const { darkModeStatus } = useDarkMode();

	useEffect(() => {
		fetchAndSetPumps();
	}, []);

	const fetchAndSetPumps = async () => {
		const pumps = await getPumpState();
		setIsPumpOneOn(pumps.pump1);
		setIsPumpTwoOn(pumps.pump2);
	};

	const togglePumpOne = async () => {
		const rv = await setPumpState(1, !isPumpOneOn);
		setIsPumpOneOn(!isPumpOneOn);
	};

	const togglePumpTwo = async () => {
		const rv = await setPumpState(2, !isPumpTwoOn);
		setIsPumpTwoOn(!isPumpTwoOn);
	};

	const allPumps = [
		{
			name: 'Pump #1',
			isPumpOn: isPumpOneOn,
			setIsPumpOn: setIsPumpOneOn,
			onClick: togglePumpOne,
		},
		{
			name: 'Pump #2',
			isPumpOn: isPumpTwoOn,
			setIsPumpOn: setIsPumpTwoOn,
			onClick: togglePumpTwo,
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardLabel icon='WaterDrop' iconColor='light'>
					<CardTitle>Pump Control</CardTitle>
				</CardLabel>
				<CardActions>
					Last updated <strong>June 12</strong>
				</CardActions>
			</CardHeader>
			<CardBody>
				<div className='row g-4 align-items-center'>
					{allPumps.map((i) => (
						<div key={i.name} className='col-xl-4'>
							<Button
								color={i.isPumpOn ? 'warning' : 'dark'}
								icon={i.isPumpOn ? 'Light' : 'Bedtime'}
								shadow='none'
								size='lg'
								hoverShadow='lg'
								onClick={i.onClick}>
								{i.name}: {i.isPumpOn ? 'ON' : 'OFF'}
							</Button>
						</div>
					))}
				</div>
			</CardBody>
		</Card>
	);
};

export default PumpControl;
