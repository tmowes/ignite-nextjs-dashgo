import { ReactNode } from 'react'

import { UseDisclosureReturn } from '@chakra-ui/react'

export type SidebarDrawerProviderProps = {
  children: ReactNode
}

export type SidebarDrawerContextData = UseDisclosureReturn
