import { useQuery, UseQueryOptions } from 'react-query'

import { api } from '~/services/api'

import { GetUsersResponse, User } from './types'

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data: apiData, headers } = await api.get<{ users: User[] }>(
    '/users',
    {
      params: { page },
    }
  )

  const totalCount = Number(headers['x-total-count'])

  const users = apiData.users.map(({ id, name, email, created_at }) => ({
    id,
    name,
    email,
    created_at: new Date(created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return { totalCount, users }
}

export const useUsers = (
  page: number,
  options?: UseQueryOptions<GetUsersResponse>
) =>
  useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
    ...options,
  })
