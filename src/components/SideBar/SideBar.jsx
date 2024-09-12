import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assests/constant";
import {AiFillHome,} from "react-icons/ai"
import {BiLogOut} from 'react-icons/bi'

function SideBar() {
  const sideBarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icons: <CreatePostLogo/>,
      text: 'Create',
    },
    {
      icon: <Avatar size={'sm'} name="Burak Orkmez" src="/profilepic.png"/>,
      text: 'Profile',
      link: '/asaprogrammer',
    }
  ];
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>

        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          cursor="pointer"
          style={{ borderRadius: 6 }}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          borderRadius = {6}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sideBarItems.map((items, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={items.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={items.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
              >
                {items.icon}
                <Box display={{ base: "none", md: "block" }}>{items.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
        
          hasArrow
          label={'LogOut'}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={'/auth'}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
          >
            <BiLogOut size = {25}/>
            <Box display={{ base: "none", md: "block" }}>LogOut</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default SideBar;
