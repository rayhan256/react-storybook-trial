import React from 'react'
interface MenuProps {
  title: string
  isActive?: boolean
  isButton?: boolean
}
export default function Menu(props: MenuProps) {
  const { isActive, title, isButton } = props
  const classname = ['nav-link']
  if (isActive) classname.push('active')
  return (
    <>
      <li className="nav-item my-auto">
        {isButton ? (
          <a
            className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            href="/auth/signin"
            role="button"
          >
            {title}
          </a>
        ) : (
          <a className={classname.join(' ')} aria-current="page" href="#">
            {title}
          </a>
        )}
      </li>
    </>
  )
}
