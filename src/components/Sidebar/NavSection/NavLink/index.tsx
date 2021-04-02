import { Icon, Link, Text } from '@chakra-ui/react'

import { NavLinkProps } from './types'

const NavLink = (props: NavLinkProps) => {
  const { navTitle, icon, ...rest } = props
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {navTitle}
      </Text>
    </Link>
  )
}

export default NavLink
