import React,{ PropsWithChildren } from 'react'
import { Dropdown } from 'react-bootstrap'

interface MenuItemDropdownAvatarProps {
  handleClick?: () =>  void,
}


export const MenuItemDropdownAvatar:React.FC<PropsWithChildren<MenuItemDropdownAvatarProps>> = (
  {handleClick, children }
  ) => {
  return (
    <Dropdown.Item as="button" onClick={() => { handleClick && handleClick() }}>
      {children}
    </Dropdown.Item>
  )
}
