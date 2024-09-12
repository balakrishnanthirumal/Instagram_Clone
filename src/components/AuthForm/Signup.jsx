import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Button, Input, VStack, Image, Flex, Text, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react';
const Signup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
      email : '',
      password : '',
      fullName : '',
      username: ''
    });
    const [showPassword, setAhowPassword] = useState(false);
  return (
    <>
         <Input
            placeholder="Email"
            fontSize={14}
            type='email'
            value={inputs.email}
            size={'sm'}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="UserName"
            fontSize={14}
            type='text'
            value={inputs.username}
            size={'sm'}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
            <Input
            placeholder="Full Name"
            type='text'
            fontSize={14}
            value={inputs.fullName}
            size={'sm'}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
         <InputGroup>
         <Input
            placeholder="Password"
            fontSize={14}
            type= {showPassword ? "text" : "password"}
            value={inputs.password}
            size={'sm'}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          <InputRightElement h = 'full'>
            <Button
                variant={'ghost'}
                size={'sm'}
                onClick={() => setAhowPassword(!showPassword)}
                
            >
                {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
            </Button>
          </InputRightElement>
          </InputGroup>
          <Button
            width={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
    </>
  )
}
export default Signup