import React, { PropsWithChildren } from 'react'
import { Card } from 'react-bootstrap'

export const AppCard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
  <Card border="light">
    <Card.Body>
      { children }
    </Card.Body>
  </Card>
  )
}
