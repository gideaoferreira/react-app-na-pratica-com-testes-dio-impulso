import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { MenuDropdownAvatar } from "./MenuDropdownAvatar";
import '@/plugins'
import React from 'react';
import { MenuItemDropdownAvatar } from './menu-item-dropdown-avatar/MenuItemDropdownAvatar';

describe("MenuDropdownAvatar", () => {
  it("Deve exibir o icone do menu passado via props", () => {
    //Arrange
    render(<MenuDropdownAvatar text={<FontAwesomeIcon data-testid="dropdown-menu-icon" icon={['fas', 'fa-cog']} />}>
      <button> Item do menu </button>
    </MenuDropdownAvatar>)

    const menuDropdow = screen.getByRole("button")
    const menuIcon = screen.getByTestId("dropdown-menu-icon")

    //Assert
    expect(menuDropdow).toBeDefined()
    expect(menuIcon).toBeInTheDocument()
  })
  it("Deve exibir os intens do menu", () => {
    //@TODO
  })
})