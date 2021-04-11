export type User = {
  id: string
  name: string
  email: string
  created_at: string
}
export type GetUsersResponse = {
  users: User[]
  totalCount: number
}
