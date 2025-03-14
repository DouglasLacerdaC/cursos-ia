import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/view/components/ui/breadcrumb'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface NavigateBreadcrumbProps {
  links: {
    link: string
    name: string
  }[]
}

export function NavigateBreadcrumb({ links }: NavigateBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link, index) => {
          if (index === links.length - 1) {
            return (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage>{link.name}</BreadcrumbPage>
              </BreadcrumbItem>
            )
          }

          return (
            <Fragment key={index}>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink asChild>
                  <Link to={link.link}>{link.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
