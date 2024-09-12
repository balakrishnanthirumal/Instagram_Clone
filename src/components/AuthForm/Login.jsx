import { Box, Button, Input, VStack, Image, Flex,  Text } from '@chakra-ui/react'
import { useState } from 'react';
const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email : '',
    password : '',
    confirmPassword: ''
  });
  return (
    <>
     <Input
            placeholder="Email"
            fontSize={14}
            value={inputs.email}
            size={'sm'}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

          <Input
            placeholder="Password"
            fontSize={14}
            type="password"
            size={'sm'}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
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
export default Login