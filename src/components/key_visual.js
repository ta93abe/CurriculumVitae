import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Style from './key_visual.module.scss'

function KeyVisual() {
  return (
    <div className={Style.wrap}>
      <div className={Style.overlay}></div>
      <Container className={Style.content}>
        <Row>
          <Col sm={12} className="mx-auto">
            <div className={Style.siteHeading}>
              <h1>Takumi Abe</h1>
              <span>realize my philosophy</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default KeyVisual