import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'

import { SidebarProps } from './types'

const Sidebar = (props: SidebarProps) => {
  // eslint-disable-next-line prettier/prettier
  const { } = props;
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">
            GERAL
          </Text>
          <Stack spacing="4" mt="4" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="4" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Sidebar