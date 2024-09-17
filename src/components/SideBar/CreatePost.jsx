import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { CreatePostLogo}  from '../../assests/constant';
import { BsFillImageFill } from "react-icons/bs";
import { useRef, useState } from "react";
import usePreviewImg from "../../hooks/usePreviewImg";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { useLocation } from "react-router-dom";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const CreatePost = () => {
  return (
    <>
      <Tooltip
        hasArrow
        label={"Create"}
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
        >
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>
    </>
  );
};

export default CreatePost;


{
  <Modal isOpen={isOpen} onClose={onClose} size="xl">
    <ModalOverlay />

    <ModalContent bg={"black"} border={"1px solid gray"}>
      <ModalHeader>Create Post</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <Textarea placeholder="Post caption..." />

        <Input type="file" hidden />

        <BsFillImageFill
          style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
          size={16}
        />
      </ModalBody>

      <ModalFooter>
        <Button mr={3}>Post</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>;
}
