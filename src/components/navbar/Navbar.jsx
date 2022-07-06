import React from "react";
import { Notifications } from "./notifications/Notifications";
import { Profile } from "./profile/Profile";
import { Search } from './seach/Search'

import * as UI from './Navbar.style';

export const Navbar: React.FC = ({toggle}) => {
  return (
    <UI.Navbar toggle={toggle}>
      <UI.NavBarSearch>
        <Search />
      </UI.NavBarSearch>
      <UI.NavBarMenu>
        <Notifications />
        <Profile />
      </UI.NavBarMenu>
    </UI.Navbar>
  )
}