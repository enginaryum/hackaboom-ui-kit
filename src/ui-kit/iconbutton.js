import React from 'react'
import styled from 'styled-components'
import Button from './button'


const Icon = styled.i`
  margin-right: ${props => props.content ? '10px' : '0'};
`

export default ({ iconClassName, secondary, content }) =>
  content ? (
    <Button iconContent radius gray={secondary} icon>
      <Icon content className={iconClassName} />{content}
    </Button>
  ) : (
    <Button gray={secondary} icon>
      <Icon className={iconClassName} />
    </Button>
  )


