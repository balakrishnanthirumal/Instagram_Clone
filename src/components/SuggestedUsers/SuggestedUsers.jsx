import { Flex, VStack, Box, Text } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8}
    px = {6}
    gap={4}
    
    >
      <SuggestedHeader/>
      <Flex alighItems={"center"}
      justifyContent={"space-between"}
      w={"full"}
      >
        <Text
        fontSize={12}
        fontWeight={"bold"}
        color={"gray.500"}
        >
        suggested For You
        </Text>
        <Text
         fontSize = {12}
         fontWeight = {"bold"}
         _hover = {{color: 'gray.400'}}
         cursor = {'pointer'}
         >  
         See All
          
        </Text>
      </Flex>
      <SuggestedUser name = 'Dhanush' followers = {1000} avatar = '/profilepic.png' />
      <SuggestedUser name = 'Dhanush' followers = {1000} avatar = '/profilepic.png' />
      <SuggestedUser name = 'Dhanush' followers = {1000} avatar = '/profilepic.png' />
     
    </VStack>
  )
}


export default SuggestedUsers