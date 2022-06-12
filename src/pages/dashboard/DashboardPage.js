import React from 'react';

import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Popovers from '../../components/bootstrap/Popovers';

import LiveStream from '../../widgets/LiveStream';
import RecentActivities from '../../widgets/RecentActivities';
import Stats from '../../widgets/Stats';
import Switches from '../../widgets/Switches';

const DashboardPage = () => {
	return (
		<PageWrapper title='Dashboard Page'>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xl-3'>
						<Stats />
						<RecentActivities />
					</div>
					<div className='col-xxl-6'>
						<LiveStream />
						<Switches />
					</div>
					<div className='col-xxl-3'>
						<Switches />
						<RecentActivities />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
