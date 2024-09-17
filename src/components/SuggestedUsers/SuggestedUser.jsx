import React from 'react'
import { VStack } from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'
import {Avatar, Box, Button, Flex, Text} from '@chakra-ui/react'
import { useState } from 'react'
import useAuthStore from '../../store/authStore'
import useFollowUser from '../../hooks/useFollowUser'

const SuggestedUser = ({user, setUser}) => {
  const {isFollowing, isUpdating, handleFollowers} = useFollowUser(user.id)
  const authUser  = useAuthStore(state => state.user)

  const onFollowUser = async() => {
    await handleFollowers();
    setUser({...user, followers : isFollowing ? [user.followers((followers) => followers.id !==authUser.uid)] : [...user.followers,authUser]})
  }



  return (
    <>
    <Flex justifyContent={"space-between"}
      alignItems={"center"}
      w={'full'}
    >
      <Flex>
        <Avatar src={user.profilePicURL} size={'sm'} n/>
        <VStack spacing={2}>
          <Box fontSize={12} 
          fontWeight={"bold"}
          alignItems={'flex-start'}>
            {user.fullName}
          </Box>
        <Box 
        fontSize = {11}
        color={'gray.500'}
        >
        {user.followers} Followers
        </Box>

        
        
      </VStack>
    </Flex>
  
    {authUser.id !== user.id && 
      <Button
      fontSize = {12}
      bg = {'transparent'}
      p = {0}
      h = "max-content"
      fontWeight = {'medium'}
      color = {'blue.400'}
      cursor={'pointer'}
      _hover={{color:'white' }}
      onClick={onFollowUser}
      isLoading = {isUpdating}
      >
      {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>}
    </Flex>
    </>
  )
}

export default SuggestedUser