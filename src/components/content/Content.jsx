
import React, {PropsWithChildren} from "react";
import { Outlet } from "react-router-dom";
import * as UI from './Content.style';

export const Content: React.FC<PropsWithChildren> = ({ toggle }) => {

  return (
    <UI.Content toggle={toggle}>
      <Outlet />
    </UI.Content>
  )
}