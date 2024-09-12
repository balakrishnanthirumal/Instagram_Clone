import React from "react";
import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const SuggestedHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      gap={4}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Programmer" size={"sm"} src="/profilepic.png" />
        <Text fontSize={18} fontWeight={"bold"}>
          asaprogrammer
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={12}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        LogOut
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
