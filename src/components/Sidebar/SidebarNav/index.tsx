import { Stack } from '@chakra-ui/react'

import NavSection from '../NavSection'
import sidebarData from '../sidebarData'

const SidebarNav = () => (
  <Stack spacing="12" align="flex-start">
    {sidebarData.map(({ sectionTitle, links }) => (
      <NavSection
        key={sectionTitle}
        sectionTitle={sectionTitle}
        links={links}
      />
    ))}
  </Stack>
)

export default SidebarNav
