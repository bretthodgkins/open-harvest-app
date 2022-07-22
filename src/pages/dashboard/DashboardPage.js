import React from 'react';

import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Popovers from '../../components/bootstrap/Popovers';

import LiveStream from '../../widgets/LiveStream';
import RecentActivities from '../../widgets/RecentActivities';
import Stats from '../../widgets/Stats';
import SensorCharts from '../../widgets/SensorCharts';
import AirControl from '../../widgets/AirControl';
import LightControl from '../../widgets/LightControl';

const DashboardPage = () => {
	return (
		<PageWrapper title='Dashboard Page'>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xxl-4'>
						<Stats />
						<AirControl />
					</div>
					<div className='col-xxl-4'>
						<LiveStream />
						<RecentActivities />
					</div>
					<div className='col-xxl-4'>
						<SensorCharts />
						<LightControl />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
