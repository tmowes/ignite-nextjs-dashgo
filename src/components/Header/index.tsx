import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { useSidebarDrawer } from '~/contexts'

import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

const Header = () => {
  const { onOpen } = useSidebarDrawer()
  const isWide = useBreakpointValue({ base: false, lg: true })
  const isMedium = useBreakpointValue({ base: false, md: true })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="8"
      px="6"
      align="center"
      justify="space-between"
    >
      {!isWide && (
        <IconButton
          aria-label="Abre Navegação"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo center={!isMedium} />
      {isMedium && <SearchBox />}
      <NotificationsNav />
      <Profile showProfileData={isWide} />
    </Flex>
  )
}

export default Header
