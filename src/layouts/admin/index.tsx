// Chakra imports
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
// Layout components
import Navbar from '../../components/navbar/NavbarAdmin';
import Sidebar from '../../components/sidebar/Sidebar';
import { SidebarContext } from '../../contexts/SidebarContext';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from '../../routes';
import React from 'react';

// Custom Chakra theme
export default function Dashboard(props: { [x: string]: any }) {
    const { ...rest } = props;
    const [fixed] = useState(false);
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const getRoute = () => {
        return window.location.pathname !== '/admin/full-screen-maps';
    };

    const getActiveRoute = (routes: RoutesType[]): string => {
        for (const route of routes) {
            if (window.location.href.includes(route.layout + route.path)) {
                return route.name;
            }
        }
        return '';
    };

    const getActiveNavbar = (routes: RoutesType[]): boolean => {
        for (const route of routes) {
            if (window.location.href.includes(route.layout + route.path)) {
                return route.secondary ?? false;
            }
        }
        return false;
    };

    const getActiveNavbarText = (routes: RoutesType[]): string | boolean => {
        for (const route of routes) {
            if (window.location.href.includes(route.layout + route.path)) {
                return route.name;
            }
        }
        return false;
    };

    const getRoutes = (routes: RoutesType[]) => {
        return routes.map((route: RoutesType, key: any) => {
            if (route.layout === '/admin') {
                return <Route path={`${route.path}`} element={route.component} key={key} />;
            } else {
                return null;
            }
        });
    };

    document.documentElement.dir = 'ltr';
    const { onOpen } = useDisclosure();

    return (
        <Box>
            <SidebarContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
                <Sidebar routes={routes} display="none" {...rest} />
                <Box
                    float="right"
                    minHeight="100vh"
                    height="100%"
                    overflow="auto"
                    position="relative"
                    maxHeight="100%"
                    w={{ base: '100%', xl: 'calc(100% - 250px)' }}
                    maxWidth={{ base: '100%', xl: 'calc(100% - 250px)' }}
                    transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
                    transitionDuration=".2s, .2s, .35s"
                    transitionProperty="top, bottom, width"
                    transitionTimingFunction="linear, linear, ease"
                >
                    <Portal>
                        <Box>
                            <Navbar
                                onOpen={onOpen}
                                logoText={'Horizon UI Dashboard PRO'}
                                brandText={getActiveRoute(routes)}
                                secondary={getActiveNavbar(routes)}
                                message={getActiveNavbarText(routes)}
                                fixed={fixed}
                                {...rest}
                            />
                        </Box>
                    </Portal>
                    {getRoute() ? (
                        <Box
                            mx="auto"
                            p={{ base: '20px', md: '30px' }}
                            pe="20px"
                            minH="100vh"
                            pt="50px"
                        >
                            <Routes>
                                {getRoutes(routes)}
                                <Route path="/" element={<Navigate to="/admin/default" replace />} />
                            </Routes>
                        </Box>
                    ) : null}
                </Box>
            </SidebarContext.Provider>
        </Box>
    );
}
