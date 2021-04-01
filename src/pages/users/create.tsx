import { NextPage } from 'next'

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'

import * as C from '~/components'

const CreateUser: NextPage = () => (
  <>
    <C.MetaTags title="Criar Usuário" />
    <Flex w="100vw" h="100vh" direction="column">
      <C.Header />
      <Flex w="100%" maxWidth={1480} my="6" px="6">
        <C.Sidebar />
        <Box flex="1" bg="gray.800" borderRadius={8} p="8">
          <Heading fontSize="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColo="gray.700" />
          <Stack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <C.Input name="name" label="Nome Completo" />
              <C.Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <C.Input name="password" type="password" label="Senha" />
              <C.Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
              />
            </SimpleGrid>
          </Stack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="orange">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </>
)

export default CreateUser
