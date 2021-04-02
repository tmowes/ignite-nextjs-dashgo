import { NextPage } from 'next'
import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
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
import { CreateUserFormData } from '~/types'
import { createUserSchema } from '~/utils/createUserSchema'

const CreateUser: NextPage = () => {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(createUserSchema),
  })

  const handleCreateUser: CreateUserFormData = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <>
      <C.MetaTags title="Criar Usuário" />
      <Flex w="100vw" h="100vh" direction="column">
        <C.Header />
        <Flex w="100%" maxWidth={1480} my="6" px="6">
          <C.Sidebar />
          <Box
            as="form"
            flex="1"
            bg="gray.800"
            borderRadius={8}
            p={['4', '8']}
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <Heading fontSize="lg" fontWeight="normal">
              Criar usuário
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <Stack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={['4', '8']} w="100%">
                <C.Input
                  name="name"
                  label="Nome Completo"
                  error={errors.name}
                  ref={register}
                />
                <C.Input
                  name="email"
                  type="email"
                  label="E-mail"
                  error={errors.email}
                  ref={register}
                />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing={['4', '8']} w="100%">
                <C.Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={errors.password}
                  ref={register}
                />
                <C.Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                  error={errors.password_confirmation}
                  ref={register}
                />
              </SimpleGrid>
            </Stack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha">
                    Cancelar
                  </Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="orange"
                  isLoading={formState.isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default CreateUser
