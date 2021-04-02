import { Box, Stack, Text } from '@chakra-ui/react'

import ActiveLink from '~/components/ActiveLink'

import NavLink from './NavLink'
import { NavSectionProps } from './types'

const NavSection = (props: NavSectionProps) => {
  const { sectionTitle, links } = props
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="sm">
        {sectionTitle}
      </Text>
      <Stack spacing="4" mt="4" align="stretch">
        {links.map(({ navTitle, icon, href }) => (
          <ActiveLink key={navTitle} href={href} passHref>
            <NavLink navTitle={navTitle} icon={icon} href={href} />
          </ActiveLink>
        ))}
      </Stack>
    </Box>
  )
}

export default NavSection
