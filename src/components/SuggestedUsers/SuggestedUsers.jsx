import { Flex, VStack, Box, Text } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import useSuggestedUsers from '../../hooks/useGetSuggestedUser'

const SuggestedUsers = () => {

  const {isLoading, suggestedUsers} = useSuggestedUsers
  ()
  if(isLoading) return null;
  return (
    <VStack py={8}
    px = {6}
    gap={4}
    
    >
      <SuggestedHeader/>
      {suggestedUsers.length !== 0 && (
         <Flex alighItems={"center"}
         justifyContent={"space-between"}
         w={"full"}
         >
           <Text
           fontSize={12}
           fontWeight={"bold"}
           color={"gray.500"}
           >
            Suggestions for you
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
      )}
     {suggestedUsers.map((user) =>(
      <SuggestedUser key = {user.id} user = {user}/>
     ))}
     
    </VStack>
  )
}


export default SuggestedUsers