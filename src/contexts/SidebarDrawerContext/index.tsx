import { useRouter } from 'next/router'
import { createContext, useContext, useEffect } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { SidebarDrawerContextData, SidebarDrawerProviderProps } from './types'

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export const SidebarDrawerProvider = (props: SidebarDrawerProviderProps) => {
  const { children } = props
  const disclosure = useDisclosure()
  const { asPath } = useRouter()

  useEffect(() => {
    disclosure.onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
