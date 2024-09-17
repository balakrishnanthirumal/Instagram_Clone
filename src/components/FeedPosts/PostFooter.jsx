import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assests/constant";
import usePostComment from "../../hooks/usePostComment";

const PostFooter = ({ post, username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(100);
  const {isCommenting, handlePostComment} = usePostComment()
  const [comment, setComment] = useState("")

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };


  const handleSubmitComment = async() =>{
    await handlePostComment(post.id, comment)
    setComment("")
  }
  return (
    <>
      <Box mb={10} marginTop={"auto"}>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mt={4}>
          <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
            {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
          </Box>
          <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo />
          </Box>
        </Flex>
        <Text fontWeight={600} fontSize={"sm"}>
          {likes} likes
        </Text>
        {!isProfilePage && (
          <>
            <Text fontSize={"sm"} fontWeight={700}>
              {username}{" "}
              <Text as={"span"} fontWeight={400}>
                Feeling Good
              </Text>
              <Text fontSize={"sm"} color={"gray"}>
                view all 100 comments
              </Text>
            </Text>
          </>
        )}

        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder={"Add a comment"}
              fontSize={14}
              onnChange = {(e) => setComment(e.target.value)}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{
                  color: "white",
                }}
                bg={"transparent"}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    </>
  );
};
export default PostFooter;
