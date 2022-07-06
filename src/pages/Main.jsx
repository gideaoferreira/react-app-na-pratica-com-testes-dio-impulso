
import React, { useState } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Content } from "@/components/content/Content";

export const Main: React.FC= ({title}) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle)
  }

  return (
    <>
      <Sidebar handleToggleMenu={handleToggleMenu} toggle={menuToggle} />
      <Navbar toggle={menuToggle} />
      <Content toggle={menuToggle}/>
    </>
  )
}