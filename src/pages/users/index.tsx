import { NextPage } from 'next'

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import * as C from '~/components'

const Users: NextPage = () => (
  <>
    <C.MetaTags title="Usuários" />
    <Flex w="100vw" h="100vh" direction="column">
      <C.Header />
      <Flex w="100%" maxWidth={1480} my="6" px="6">
        <C.Sidebar />
        <Box flex="1" bg="gray.800" borderRadius={8} pb="4" p="8">
          <Flex mb="8" align="center" justify="space-between">
            <Heading fontSize="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="orange"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" w="8" color="gray.300">
                  <Checkbox colorScheme="orange" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th w="6" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Julius Mowes</Text>
                    <Text fontSize="sm" color="gray.300">
                      julius@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>01 de Abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Julius Mowes</Text>
                    <Text fontSize="sm" color="gray.300">
                      julius@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>01 de Abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Julius Mowes</Text>
                    <Text fontSize="sm" color="gray.300">
                      julius@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>01 de Abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Julius Mowes</Text>
                    <Text fontSize="sm" color="gray.300">
                      julius@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>01 de Abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <C.Pagination />
        </Box>
      </Flex>
    </Flex>
  </>
)

export default Users
