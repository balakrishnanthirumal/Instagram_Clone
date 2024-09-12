import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";

const ProfilePages = () => {
  return (
    <>
      <Container maxW="container.lg" py={5}>
        <Flex
          py={10}
          px={4}
          pl={{ base: 4, md: 10 }}
          mx={"auto"}
          flexDirection="column"
        >
          <ProfileHeader />
        </Flex>
        <Flex
          px={{ base: 2, sm: 4 }}
          maxW={"full"}
          mx={"auto"}
          borderTop={"1px solid"}
          borderColor={"whiteAlpha.300"}
          flexDirection="column"
        ></Flex>
        <ProfileTabs />
        <ProfilePosts />
      </Container>
    </>
  );
};

export default ProfilePages;
