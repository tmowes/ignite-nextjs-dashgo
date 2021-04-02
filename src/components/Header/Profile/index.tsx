import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

import { ProfileProps } from './types'

const Profile = (props: ProfileProps) => {
  const { showProfileData } = props
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Julius Mowes</Text>
          <Text color="gray.300" fontSize="sm">
            julius@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Julius Mowes"
        src="https://github.com/tmowes.png"
      />
    </Flex>
  )
}

export default Profile
