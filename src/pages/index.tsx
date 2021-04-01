import { Flex, Button, Stack } from '@chakra-ui/react'

import * as C from '~/components'

export default function SignIn() {
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
        >
          <Stack spacing="4">
            <C.Input name="email" type="email" label="E-mail" />
            <C.Input name="password" type="password" label="Senha" />
          </Stack>
          <Button type="submit" mt="6" colorScheme="orange" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
