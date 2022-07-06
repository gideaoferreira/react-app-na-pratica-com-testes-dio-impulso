/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { MenuItemDropdownAvatar } from './MenuItemDropdownAvatar'

describe("MenuItemDropdownAvatar component", () => {
  it("Deve reve rederizar o component com o texto fornecido via children", () => {
    //Arrange
    const handleClickMock = jest.fn()
    const buttonText = "Sair do sistema"
    render(<MenuItemDropdownAvatar handleClick={handleClickMock}> {buttonText} </MenuItemDropdownAvatar>)
    const butttonItem = screen.getByRole("button", { name: `${buttonText}`})
    
    //Assert
    expect(butttonItem).toBeInTheDocument()
    expect(handleClickMock).not.toBeCalled()
  })

  it("Deve executar afunção passada via props", async () => {
    //Arrange
    const handleClickMock = jest.fn()
    const buttonText = "Sair do sistema"
    render(<MenuItemDropdownAvatar handleClick={handleClickMock}> {buttonText} </MenuItemDropdownAvatar>)
    const butttonItem = screen.getByRole("button", { name: `${buttonText}`})

    //Act
    fireEvent.click(butttonItem)

  
    //Assert
    expect(handleClickMock).toBeCalled()
  })
})