import { Button } from '@chakra-ui/react'

import { PaginationItemProps } from './types'

const PaginationItem = (props: PaginationItemProps) => {
  const { isCurrent = false, number } = props
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="orange"
        disabled
        _disabled={{
          bgColor: 'orange.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {number}
    </Button>
  )
}

export default PaginationItem
