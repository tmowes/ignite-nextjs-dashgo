import { InputProps } from '@chakra-ui/react'

export type CustomInputProps = InputProps & {
  name: string
  label?: string
}
