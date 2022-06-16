import React from 'react';
import YouTube from 'react-youtube';
import classNames from 'classnames';

import useDarkMode from '../hooks/useDarkMode';

import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../components/bootstrap/Card';
import Icon from '../components/icon/Icon';


const LiveStream = () => {
	const { darkModeStatus } = useDarkMode();
	const opts = {
		height: '100%',
		width: '100%',
		controls: false,
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	return (
		<Card>
			<CardHeader>
				<CardLabel icon='LiveTv' iconColor='success'>
					<CardTitle tag='h4' className='h5'>
						LiveStream
					</CardTitle>
				</CardLabel>
			</CardHeader>
			<CardBody>
					<div className='col-md-12'>
						<Card
							className='transition-base rounded-2 mb-0 text-dark bg-black'
							stretch
							shadow='lg'
							borderColor='danger'>
							<CardBody>
								<YouTube videoId="5qap5aO4i9A" opts={opts} />
							</CardBody>
						</Card>
				</div>
			</CardBody>
		</Card>

	);
};

export default LiveStream;