import { Box, Grid } from '@chakra-ui/react';
import Banner from './components/Banner';
import Storage from './components/Storage';
import Upload from './components/Upload';

// Assets
import banner from '../../../assets/img/auth/banner.png';
import avatar from '../../../assets/img/avatars/avatar4.png';
import React from 'react';

export default function Overview() {
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				templateColumns={{
					base: '1fr',
					lg: '1.34fr 1fr 1.62fr'
				}}
				templateRows={{
					base: 'repeat(3, 1fr)',
					lg: '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Banner
					gridArea='1 / 1 / 2 / 2'
					banner={banner}
					avatar={avatar}
					name='Adela Parkson'
					job='Product Designer'
					posts='17'
					followers='9.7k'
					following='274'
				/>
				<Storage gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }} used={25.6} total={50} />
				<Upload
					gridArea={{
						base: '3 / 1 / 4 / 2',
						lg: '1 / 3 / 2 / 4'
					}}
					minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
					pe='20px'
					pb={{ base: '100px', lg: '20px' }}
				/>
			</Grid>
		</Box>
	);
}
