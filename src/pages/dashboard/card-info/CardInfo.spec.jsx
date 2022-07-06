import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import '@/plugins'
import { CardInfo, CardInfoType } from "./CardInfo";

describe("CardInfo Component", () => {
  it("Deve exibir as informações do card passadas via props", () => {
    //Arrange
    let dataInfo: CardInfoType = {
      icon: 'fa-heart-broken',
      iconType: 'fas',
      textInfo: '1140',
      label: 'Total inativos',
      iconColor: '#FB8C00',
      bgIcon: '#FFF3E0',
    }
    render(<CardInfo
      icon={dataInfo.icon}
      iconType={dataInfo.iconType}
      iconColor={dataInfo.iconColor}
      bgIcon={dataInfo.bgIcon}
      textInfo={dataInfo.textInfo}
      label={dataInfo.label}
    />)
  
    //Act
    const label = screen.getByText("Total inativos")
    const textInfo = screen.getByText("1140")
    const svgIcon = screen.getByRole('img');

    //Assert
    expect(textInfo).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(svgIcon).toBeInTheDocument()
  })
})