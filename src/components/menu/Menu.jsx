import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { links, LinkType } from './links';
import * as UI from './Menu.style'

export const Menu: React.FC<PropsWithChildren> = ({toggle}) => {
  return (
    <UI.Menu className="menu">
      <UI.MenuLogo> {toggle ? 'DL' : 'DashLead' }</UI.MenuLogo>
      <hr/>
      <UI.UL>
        { links.map((link: LinkType) => {
          return (
            <UI.LI className='menu-link' toggle={toggle} key={link.path}>
              <NavLink to={link.path}>
                <FontAwesomeIcon icon={[link.iconType, link.icon]} size="lg" />
                <UI.TextLink toggle={toggle}>{link.text}</UI.TextLink>
              </NavLink>
            </UI.LI>
          )
        })}
      </UI.UL>
    </UI.Menu>
  )
}
