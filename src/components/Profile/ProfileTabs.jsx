import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'

const ProfileTabs = () => {
  return (
    <Flex
    w= {"full"}
    justify={'center'}
    gap={{base: 4, sm: 10}}
    textTransform={'uppercase'}
    fontWeight={'bold'}
    >
      <Flex 
      borderTop = {"1px solid"} 
      borderColor = {"whiteAlpha.300"}
      alignItems={'center'}
      p={'3'}
      gap={3}
      cursor={'pointer'}
      > 
        <Box
        fontSize = {20}
        >
          <BsGrid3X3/>
        </Box>
        <Text fontSize = {12} display = {{base: 'none', sm: 'block'}}>
          Post
        </Text>
      </Flex>


      <Flex 
      borderTop = {"1px solid"} 
      borderColor = {"whiteAlpha.300"}
      alignItems={'center'}
      p={'3'}
      gap={3}
      cursor={'pointer'}
      > 
        <Box
        fontSize = {20}
        >
          <BsBookmark/>
        </Box>
        <Text fontSize = {12} display = {{base: 'none', sm: 'block'}}>
          Saved
        </Text>
      </Flex>     
      
      <Flex 
      borderTop = {"1px solid"} 
      borderColor = {"whiteAlpha.300"}
      alignItems={'center'}
      p={'3'}
      gap={3}
      cursor={'pointer'}
      > 
        <Box
        fontSize = {20}
        >
          <BsSuitHeart fontWeight={'bold'}/>
        </Box>
        <Text fontSize = {12} display = {{base: 'none', sm: 'block'}}>
          Liked
        </Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTabs