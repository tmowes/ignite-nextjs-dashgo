import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'

export default [
  {
    sectionTitle: 'GERAL',
    links: [
      {
        navTitle: 'Dashboard',
        icon: RiDashboardLine,
        href: '/dashboard',
      },
      {
        navTitle: 'Usuários',
        icon: RiContactsLine,
        href: '/users',
      },
    ],
  },
  {
    sectionTitle: 'AUTOMAÇÃO',
    links: [
      {
        navTitle: 'Formulários',
        icon: RiInputMethodLine,
        href: '/forms',
      },
      {
        navTitle: 'Automação',
        icon: RiGitMergeLine,
        href: '/automation',
      },
    ],
  },
]
