import
{
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue, Text,
  Stack,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SettingsIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import isAuthenticated from '../../helpers/isAuth'
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import api from '../../services/api'

export default function Nav()
{
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogin = async () =>
  {
    try {
      const result = api.login({
        client_id: "TCDnOR565OfSJrQzsTrNfs8IxySvlguB",
        username: "guilherme.steink@gmail.com",
        password: "Aspiree15!!!",
        grant_type: "password",
        scope: 'openid'
      })

      console.log("result", result)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <Box w={'100%'} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction='column' justify="start">
                <Flex direction='row' m="3px 0px">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<AiOutlineUser color='gray.300' />}
                    />
                    <Input value="guilherme.steink@gmail.com" type="email" variant='filled' placeholder='example.auction@gmail.com' />
                  </InputGroup>
                </Flex>
                <Flex direction='row' m="3px 0px">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<AiFillLock color='gray.300' />}
                    />
                    <Input value="Aspiree15!!!" type="password" variant='filled' placeholder='example' />
                  </InputGroup>
                </Flex>
                <Flex m="5px 0px" direction='row' justify='end'>
                  <Text color="gray">Ps: the above placeholder information works for testing</Text>
                </Flex>
              </Flex>
            </ModalBody>
            <ModalFooter justify="space-between">
              <Button colorScheme='blue' mr={3} onClick={handleLogin}>
                Sign in
              </Button>
              <Button colorScheme='blue' onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text ml={"10px"} isTruncated fontSize='4xl' color={'white'} fontWeight='bold' textShadow={"1px 1px 1px black"}>AUCTIONS HOUSE</Text>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={3}>
              {isAuthenticated() ?
                <Menu align="center">
                  <MenuButton as={Button} rightIcon={<SettingsIcon />}>
                    Olá, Example
                  </MenuButton>
                  <MenuList>
                    <MenuItem>New auction</MenuItem>
                    <MenuItem>My items</MenuItem>
                    <MenuItem>Signout</MenuItem>
                  </MenuList>
                </Menu>
                :
                <Menu align="center">
                  <MenuButton
                    rightIcon={<ArrowForwardIcon />}
                    as={Button}
                    onClick={onOpen}
                  >
                    Sign In
                  </MenuButton>
                </Menu>
              }
              <Button onClick={toggleColorMode}>
                {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* <Button textShadow={"1px 1px 1px black"}
                fontSize={'2xl'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                  bg: 'pink.300',
                }}>
                Sign Up
              </Button> */}

              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>

      </Box>
    </>
  );
}