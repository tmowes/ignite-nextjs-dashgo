import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as C from '~/components'
import { SignInFormData } from '~/types'
import { signInSchema } from '~/utils'

export default function SignIn() {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(signInSchema),
  })

  const handleSignIn: SignInFormData = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <>
      <C.MetaTags />
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <C.Input
              name="email"
              type="email"
              label="E-mail"
              error={errors.email}
              ref={register}
            />
            <C.Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              ref={register}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="orange"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
