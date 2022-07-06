import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Menu } from "../menu/Menu";
import * as UI from './Sidebar.style'

export const Sidebar: React.FC = ({toggle, handleToggleMenu}) => {
  return (
    <UI.Sidebar toggle={toggle}>
      <Menu toggle={toggle} />
      <UI.ToggleButton toggle={toggle} onClick={handleToggleMenu}>
        { toggle ? <FontAwesomeIcon icon={['fas', 'fa-angle-double-right']} /> :  <FontAwesomeIcon icon={['fas', 'fa-angle-double-left']} /> }
        <UI.TextButton toggle={toggle}>Minimizar Menu</UI.TextButton>
      </UI.ToggleButton>
    </UI.Sidebar>
  )
}