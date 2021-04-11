import { Box, Stack, Text } from '@chakra-ui/react'

import PaginationItem from './PaginationItem'
import { PaginationProps } from './types'

const siblingsPageCount = 2

const generatePagesArray = (from: number, to: number) =>
  [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0)

const Pagination = (props: PaginationProps) => {
  const {
    totalCountOfRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange,
  } = props
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsPageCount, currentPage - 1)
      : []
  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsPageCount, lastPage))// eslint-disable-line prettier/prettier
      : []

  const showRegistersFrom =
    currentPage * registersPerPage - registersPerPage + 1
  const showRegistersTo = currentPage * registersPerPage

  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{showRegistersFrom}</strong> -{' '}
        <strong>{showRegistersTo}</strong> de{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > siblingsPageCount + 1 && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsPageCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((pageNumber) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={pageNumber}
              number={pageNumber}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          isCurrent
          number={currentPage}
        />

        {nextPages.length > 0 &&
          nextPages.map((pageNumber) => (
            <PaginationItem
              key={pageNumber}
              onPageChange={onPageChange}
              number={pageNumber}
            />
          ))}

        {currentPage + siblingsPageCount < lastPage && (
          <>
            {currentPage + siblingsPageCount + 1 < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}

export default Pagination
