/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

const CustomLink = ({
  href,
  ...rest
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    // @ts-ignore
    return <Link href={href} {...rest} referrerPolicy="origin" />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} referrerPolicy="origin" />
  }

  return <a href={href} {...rest} referrerPolicy="origin" />
}

export default CustomLink
