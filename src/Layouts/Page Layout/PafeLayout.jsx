import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import { useLocation } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar';

function PafeLayout({children}) {
    const {pathname} = useLocation();
  return (
    <Flex>
      {/* sidebar on the left */}

      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <SideBar />
        </Box>
      ) : null}

      {/* the page content on the right */}

      <Box flex={1} w={{ base: "calc(100%-70px), md: calc(100%-240px)" }}>
        {children}{" "}
      </Box>
    </Flex>
  );
}

export default PafeLayout