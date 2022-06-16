import React, { useLayoutEffect } from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Popovers from '../../../components/bootstrap/Popovers';
import Button from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
import LANG, { getLangWithKey } from '../../../lang';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import Badge from '../../../components/bootstrap/Badge';
import Spinner from '../../../components/bootstrap/Spinner';

import { getBalance } from '../../../web3'

const DashboardHeader = () => {
	const [balance, setBalance] = useState();

	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	const styledBtn = {
		color: darkModeStatus ? 'dark' : 'light',
		hoverShadow: 'default',
		isLight: !darkModeStatus,
		size: 'lg',
	};

	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng).then(() =>
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon={getLangWithKey(lng)?.icon} size='lg' className='me-1' />
					<span>{`Language changed to ${getLangWithKey(lng)?.text}`}</span>
				</span>,
				'You updated the language of the site. (Only "Aside" was prepared as an example.)',
			),
		);
	};

	/**
	 * Language attribute
	 */
	useLayoutEffect(() => {
		document.documentElement.setAttribute('lang', i18n.language);
	});

	useEffect(() => {
		fetchAndSetBalance();
	}, []);

	const fetchAndSetBalance = async () => {
		setBalance(await getBalance());
	  }

	return (
		<Header>
			<HeaderLeft>
				<div className='row g-3 align-items-center'>
						<div className={classNames('fs-3', 'col-auto', 'fw-bold', {
								'text-dark': !darkModeStatus,
							})}>
							OpenHarvest
					</div>
					<div className='col-auto'>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								<Button color='light' isLight icon='Public'>
									Fitzroy Garage (AUS)
								</Button>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem isText>Locations</DropdownItem>
								<DropdownItem>
									<NavLink to='/components/popovers'>
										<Icon icon='Public' /> Fitzroy Garage (AUS)
									</NavLink>
								</DropdownItem>
								<DropdownItem isDivider />
								<DropdownItem isHeader>Want to get involved?</DropdownItem>
								<DropdownItem>
									<NavLink to='/components/popovers'>
										<Icon icon='Send' /> Get in touch
									</NavLink>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
			</HeaderLeft>

			<HeaderRight>
				<div className='row g-3 align-items-center'>
					<div className='col-auto'>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								<Button color='success' icon='Circle'>
									{balance} SEED
								</Button>
							</DropdownToggle>
							<DropdownMenu isAlignmentEnd>
								{/* <DropdownItem>
									<NavLink to='/components/popovers'>
										<Icon icon='Circle' /> 250 SEED
									</NavLink>
								</DropdownItem> */}
								<DropdownItem isText>OpenHarvest's native token</DropdownItem>
								<DropdownItem isDivider />
								<DropdownItem isHeader>Need more tokens?</DropdownItem>
								<DropdownItem>
									<a href='https://xdai.colony.io/colony/oh'  target='_blank' rel='noreferrer noopener'>
										<div className='col text-nowrap overflow-hidden text-overflow-ellipsis'>
											<Icon icon='Workspaces' /> Contribute to our DAO
										</div>
									</a>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
					{/* Dark Mode */}
					<div className='col-auto'>
						<Popovers trigger='hover' desc='Dark / Light mode'>
							<Button
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...styledBtn}
								icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
								onClick={() => setDarkModeStatus(!darkModeStatus)}
								aria-label='Toggle fullscreen'
								data-tour='dark-mode'
							/>
						</Popovers>
					</div>
					{/* Lang Selector */}
					<div className='col-auto'>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								{typeof getLangWithKey(i18n.language)?.icon === 'undefined' ? (
									<Button
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...styledBtn}
										className='btn-only-icon'
										aria-label='Change language'
										data-tour='lang-selector'>
										<Spinner isSmall inButton='onlyIcon' isGrow />
									</Button>
								) : (
									<Button
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...styledBtn}
										icon={getLangWithKey(i18n.language)?.icon}
										aria-label='Change language'
										data-tour='lang-selector'
									/>
								)}
							</DropdownToggle>
							<DropdownMenu isAlignmentEnd data-tour='lang-selector-menu'>
								{Object.keys(LANG).map((i) => (
									<DropdownItem key={LANG[i].lng}>
										<Button
											icon={LANG[i].icon}
											onClick={() => changeLanguage(LANG[i].lng)}>
											{LANG[i].text}
										</Button>
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
			</HeaderRight>
		</Header>
	);
};

export default DashboardHeader;
