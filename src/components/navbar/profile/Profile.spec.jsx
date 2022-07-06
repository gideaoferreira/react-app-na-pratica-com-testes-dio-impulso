import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Profile } from "./Profile";
import '@/plugins'

describe("Profile component", () => {

  it("Deve exibir o menu Profile", () => {
    //Arrange
    render(<Profile />)
    const menuDropdowProfile = screen.getByRole("button")

    //Assert
    expect(menuDropdowProfile).toBeDefined()
  })

  it("Deve exibir os itens do menu", async () => {
    //Arrange
    render(<Profile />)
    const menuDropdowProfile = screen.getByRole("button")
    
    //Act
    fireEvent.click(menuDropdowProfile)
    const btnProfile = await screen.findByText(/Perfil/)
    const btnSettings = await screen.findByText(/Configurações/)
    const btnLogout = await screen.findByText(/Sair/)

    //Assert
    expect(menuDropdowProfile).toBeDefined()
    expect(btnSettings).toBeInTheDocument()
    expect(btnProfile).toBeInTheDocument()
    expect(btnLogout).toBeInTheDocument()
  })
})