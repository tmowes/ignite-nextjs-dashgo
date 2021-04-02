import type { SubmitHandler } from 'react-hook-form'

export type SignInFormData = SubmitHandler<SignInData>

export type SignInData = {
  email: string
  password: string
}

export type CreateUserFormData = SubmitHandler<CreateUserData>

export type CreateUserData = {
  name: string
  email: string
  password: string
  confirm_password: string
}
