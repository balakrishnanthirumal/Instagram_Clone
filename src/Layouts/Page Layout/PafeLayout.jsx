import { Box, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

import { useLocation } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/FireBase';
import Navbar from '../../components/NavBar/NavBar';

function PafeLayout({children}) {
    const {pathname} = useLocation();
    const [user, loading] = useAuthState(auth)
    const canRenderSideBar = pathname !== '/auth' && user
    const canRenderNavBar = !user && !loading && pathname !== '/auth'
    
    const checkingUserIsAuth = !user && loading;
    if(checkingUserIsAuth) return <PageLayoutSpinner/>
  return (
    <Flex flexDir = {canRenderNavBar ? "column" : "row"}>
      {/* sidebar on the left */}

      {canRenderSideBar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <SideBar />
        </Box>
      ) : null}
      {/* navBar */}
      {canRenderNavBar ? <Navbar/> : null}

      {/* the page content on the right */}

      <Box flex={1} w={{ base: "calc(100%-70px), md: calc(100%-240px)"}} mx = {"auto"}>
        {children}{" "}
      </Box>
    </Flex>
  );
}

export default PafeLayout

const PageLayoutSpinner = () => {
  return (
    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} h={'100vh'}>
      <Spinner size={'xl'} />
      </Flex>
  )
}