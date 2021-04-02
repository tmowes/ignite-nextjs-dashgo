import { Text } from '@chakra-ui/react'

import { LogoProps } from './types'

const Logo = (props: LogoProps) => {
  const { center } = props
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      maxW="64"
      flex="1"
      textAlign={center ? 'center' : 'left'}
    >
      dashGo
      <Text
        as="span"
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        color="orange.500"
      >
        .
      </Text>
    </Text>
  )
}

export default Logo
