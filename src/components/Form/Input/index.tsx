import { FormControl, FormLabel, Input as ChakraInput } from '@chakra-ui/react'

import { CustomInputProps } from './types'

const Input = (props: CustomInputProps) => {
  const { name, label, ...rest } = props
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="orange.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}

export default Input
