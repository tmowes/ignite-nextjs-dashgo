import Link from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement } from 'react'

import { ActiveLinkProps } from './types'

const ActiveLink = (props: ActiveLinkProps) => {
  const { children, exactMatch = false, ...rest } = props
  const { asPath } = useRouter()
  const startWithHref = asPath.startsWith(String(rest.href))
  const startWithAs = asPath.startsWith(String(rest.as))

  let isActive = false

  if (exactMatch && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (!exactMatch && (startWithHref || startWithAs)) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'orange.500' : 'gray.50',
      })}
    </Link>
  )
}

export default ActiveLink
