import React from 'react'
import { VStack } from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'
import {Avatar, Box, Button, Flex, Text} from '@chakra-ui/react'
import { useState } from 'react'

const SuggestedUser = ({name, followers, avatar}) => {
  const [isFollowed, setIsFollowed] = useState(false)
  return (
    <>
    <Flex justifyContent={"space-between"}
      alignItems={"center"}
      w={'full'}
    >
      <Flex>
        <Avatar src={avatar} size={'sm'} name={name} />
        <VStack spacing={2}>
          <Box fontSize={12} 
          fontWeight={"bold"}
          alignItems={'flex-start'}>
            {name}
          </Box>
        <Box 
        fontSize = {11}
        color={'gray.500'}
        >
        {followers} Followers
        </Box>

        
        
      </VStack>
    </Flex>
    <Button
    fontSize = {12}
    bg = {'transparent'}
    p = {0}
    h = "max-content"
    fontWeight = {'medium'}
    color = {'blue.400'}
    cursor={'pointer'}
    _hover={{color:'white' }}
    onClick={() => setIsFollowed(!isFollowed)}
    >
    {isFollowed ? 'Unfollow' : 'Follow'}
    </Button>

    </Flex>
    </>
  )
}

export default SuggestedUser