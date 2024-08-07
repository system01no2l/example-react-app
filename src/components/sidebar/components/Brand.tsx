import { Flex, useColorModeValue } from '@chakra-ui/react';

import { HorizonLogo } from '../../icons/Icons';
import { HSeparator } from '../../separator/Separator';
import React from 'react';

export function SidebarBrand() {
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<HorizonLogo h='26px' w='175px' my='32px' color={logoColor} />
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
