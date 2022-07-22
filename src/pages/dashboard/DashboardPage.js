import React from 'react';

import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Popovers from '../../components/bootstrap/Popovers';

import LiveStream from '../../widgets/LiveStream';
import RecentActivities from '../../widgets/RecentActivities';
import Stats from '../../widgets/Stats';
import Temperature from '../../widgets/Temperature';
import AirControl from '../../widgets/AirControl';
import LightControl from '../../widgets/LightControl';

const DashboardPage = () => {
	return (
		<PageWrapper title='Dashboard Page'>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xl-4'>
						<Stats />
					</div>
					<div className='col-xxl-5'>
						<LiveStream />
						<LightControl />
						{/* <AirControl /> */}
					</div>
					<div className='col-xxl-3'>
						<Temperature />
						{/* <RecentActivities /> */}
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
