import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Menu } from "./Menu";
import '@/plugins'

describe("Menu component", () => {
  it("Deve a Logo completa no menu", () => {
    //Arrange
    render(<MemoryRouter><Menu toggle={false}/></MemoryRouter>)
    const logoMenu = screen.getByText("DashLead")

    //Assert
    expect(logoMenu).toBeInTheDocument()
  })

  it("Deve exibir apenas as iniciais da logo", () => {
    //Arrange
    render(<MemoryRouter><Menu toggle={true}/></MemoryRouter>)
    const logoMenu = screen.getByText("DL")

    //Assert
    expect(logoMenu).toBeInTheDocument()
  })

  it("Deve exibir os links do menu", () => {
    //Arrange
    render(<MemoryRouter><Menu toggle={false}/></MemoryRouter>)
    const totalLinks = screen.getAllByRole('listitem')

    //Assert
    expect(totalLinks).toHaveLength(5)
  })
})