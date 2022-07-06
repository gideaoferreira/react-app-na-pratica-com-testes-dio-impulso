import React,{ PropsWithChildren } from 'react'
import { Dropdown } from 'react-bootstrap'
import * as UI from './MenuDropdownAvatar.style'

interface MenuDropdownAvatarProps {
  text: string | React.ReactNode,
  size: string,
}

export const MenuDropdownAvatar:React.F<PropsWithChildren<MenuDropdownAvatarProps>> = ({
  text, size, children
}) => {
  return (
    <UI.Dropdown data-testid="menu-dropdown-avatar">
      <Dropdown>
        <Dropdown.Toggle size={size}>
          {text}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          { children }
        </Dropdown.Menu>
      </Dropdown>
    </UI.Dropdown>
  )
}
