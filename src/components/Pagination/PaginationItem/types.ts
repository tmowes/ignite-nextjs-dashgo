export type PaginationItemProps = {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}
