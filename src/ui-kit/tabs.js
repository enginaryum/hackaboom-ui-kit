import React from 'react'
import styled from 'styled-components'

const getFirstRadius = (props) => {
  if (props.round) return '100px'
  return '4px'
}

const Tab = styled.button`
  cursor: pointer;
  background: ${props => props.selected ? props.theme.green : 'white'};
  color: ${props => props.selected ? 'white' : props.theme.gray};
  width: ${props => props.width}px;
  border-top-left-radius: ${props => props.first ? getFirstRadius(props) : 'none'};
  border-bottom-left-radius: ${props => props.first ? getFirstRadius(props) : 'none'};
  border-top-right-radius: ${props => props.last ? getFirstRadius(props) : 'none'};
  border-bottom-right-radius: ${props => props.last ? getFirstRadius(props) : 'none'};
  border-color: ${props => props.selected ? props.theme.green : 'rgba(0,0,0,0.25)'};
  border-width: 1px;
  border-left-width: ${props => props.first ? '1px' : '0px'};
  padding-top: 16px;
  padding-bottom: 16px;
  border-style: solid;
`

export default ({ elements, width, round }) => elements.map((element, index) => (
  <Tab
    round={round}
    width={width}
    onClick={element.onClick}
    selected={element.selected}
    first={index === 0}
    last={index === elements.length - 1}
  >
    {element.content}
  </Tab>
))

