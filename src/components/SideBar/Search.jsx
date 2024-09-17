import { Box, Button, Flex, Modal, FormLabel, Input, FormControl, ModalBody, ModalContent, ModalOverlay, Tooltip, useDisclosure } from "@chakra-ui/react";
import { SearchLogo } from '../../assests/constant';
import { useRef } from "react";
import useSearchUser from "../../hooks/useSearchUser";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, getUserProfile, user, setUser } = useSearchUser();
  const searchRef = useRef(null);

  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  };

  return (
    <>
      <Tooltip
        hasArrow
        label={"Search"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
        >
          <SearchLogo />
          <Box display={{ base: "none", md: "block" }}>Search</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motion="slideInLeft">
        <ModalOverlay />
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={'400px'}>
          <ModalBody>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>UserName</FormLabel>
                <Input placeholder="Enter username" ref={searchRef} />
              </FormControl>
              <Flex w={'full'} justifyContent={'flex-end'}>
                <Button
                  type="submit"
                  ml={'auto'}
                  size={'sm'}
                  my={4}
                  isLoading={isLoading}
                >
                  Search
                </Button>
              </Flex>
            </form>
            {console.log(user)}

            {/* Render SuggestedUser component if user data is present */}
            {user && <SuggestedUser user={user} setUser={setUser} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
