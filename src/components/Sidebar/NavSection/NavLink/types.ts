import { LinkProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'

export type NavLinkProps = LinkProps & {
  navTitle: string
  icon: IconType
  href: string
}
