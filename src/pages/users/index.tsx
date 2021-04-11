/* eslint-disable no-nested-ternary */
import NextLink from 'next/link'
import { useState } from 'react'

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import * as C from '~/components'
import { useUsers } from '~/services/hooks/users/useUsers'
import { queryClient } from '~/services/queryClient'
import { api } from '~/services/api'

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { users, totalCount } = await getUsers(1)
//   return {
//     props: { users, totalCount },
//   }
// }

// const Users = ({ users, totalCount }: GetUsersResponse) => {
//   const [page, setPage] = useState(1)
//   const { data, isLoading, isFetching, error } = useUsers(page, {
//     initialData: { users, totalCount },
//   })
const Users = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(page)

  const isWide = useBreakpointValue({
    base: false,
    md: true,
  })
  const isSmall = useBreakpointValue({
    base: true,
    sm: false,
  })

  const prefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const { data: userData } = await api.get(`users/${userId}`)
        return userData
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      }
    )
  }

  return (
    <>
      <C.MetaTags title="Usuários" />
      <Flex w="100vw" h="100vh" direction="column" overflowX="hidden">
        <C.Header />
        <Flex w="100%" maxWidth={1480} my="6" px="6">
          <C.Sidebar />
          <Box flex="1" bg="gray.800" borderRadius={8} pb="4" p="8">
            <Flex mb="8" align="center" justify="space-between">
              <Heading fontSize="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && (
                  <Spinner size="sm" color="gray.500" ml="4" />
                )}
              </Heading>
              <NextLink href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="orange"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </NextLink>
            </Flex>
            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={['2', '4', '6']} w="8" color="gray.300">
                        <Checkbox colorScheme="orange" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWide && <Th>Data de Cadastro</Th>}
                      <Th w="6" />
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.users.map(({ id, name, email, created_at }) => (
                      <Tr key={id}>
                        <Td px={['2', '4', '6']}>
                          <Checkbox colorScheme="orange" />
                        </Td>
                        <Td>
                          <Box>
                            <Link
                              color="orange.400"
                              onMouseEnter={() => prefetchUser(id)}
                            >
                              <Text fontWeight="bold">{name}</Text>
                            </Link>
                            <Text fontSize="sm" color="gray.300">
                              {email}
                            </Text>
                          </Box>
                        </Td>
                        {isWide && <Td>{created_at}</Td>}
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="whiteAlpha"
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                          >
                            {!isSmall ? 'Editar' : ''}
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                <C.Pagination
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Users
