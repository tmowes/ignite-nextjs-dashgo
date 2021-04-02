import { Box, Stack } from '@chakra-ui/react'

import PaginationItem from './PaginationItem'
import { PaginationProps } from './types'

const Pagination = (props: PaginationProps) => {
  // eslint-disable-next-line prettier/prettier
  const { } = props
  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>30</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem isCurrent number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
      </Stack>
    </Stack>
  )
}

export default Pagination
