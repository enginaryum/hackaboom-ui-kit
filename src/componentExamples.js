import React from 'react'
import styled from 'styled-components'
import Button from './ui-kit/button'
import IconButton from './ui-kit/iconbutton'
import Tabs from './ui-kit/tabs'

const Row = styled.div`
  margin: 20px 0;
  button {
    margin: 0 10px;
  }
`

const Components = () => (
  <React.Fragment>
    <Row>
      <Button large>LARGE</Button>
      <Button medium>MEDIUM</Button>
      <Button small>SMALL</Button>
      <Button mini>MINI</Button>
    </Row>
    <Row>
      <Button>RADIUS</Button>
      <Button round>ROUND</Button>
      <Button square>SQUARE</Button>
    </Row>
    <Row>
      <Button gray>GRAY</Button>
      <Button blue>BLUE</Button>
      <Button yellow>YELLOW</Button>
      <Button red>RED</Button>
    </Row>
    <Row>
      <IconButton iconClassName="fas fa-pencil" />
      <IconButton secondary iconClassName="fas fa-pencil" />
      <IconButton content="SEND MAIL" iconClassName="fas fa-pencil" />
      <IconButton content="SEND MAIL" secondary iconClassName="fas fa-pencil" />
    </Row>
    <div>
      <Tabs
        width={180}
        elements={[
          { content: 'BUTTON', onClick: nope => nope, selected: true },
          { content: 'BUTTON', onClick: nope => nope, selected: false },
          { content: 'BUTTON', onClick: nope => nope, selected: false },
        ]}
      />
    </div>
    <div style={{ margin: 20 }}>
      <Tabs
        round
        width={180}
        elements={[
          { content: 'BUTTON', onClick: nope => nope, selected: true },
          { content: 'BUTTON', onClick: nope => nope, selected: false },
          { content: 'BUTTON', onClick: nope => nope, selected: false },
        ]}
      />
    </div>
  </React.Fragment>
)

export default Components
