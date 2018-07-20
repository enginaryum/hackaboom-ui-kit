import styled from 'styled-components'

const getBackgroundColor = (props) => {
  if (props.gray) return props.theme.gray
  else if (props.blue) return props.theme.blue
  else if (props.yellow) return props.theme.yellow
  else if (props.red) return props.theme.red
  return props.theme.green
}

const getPadding = (props) => {
  if (props.iconContent) return '16px 32px'
  else if (props.icon) return '16px'
  else if (props.large) return '20px 40px'
  else if (props.small) return '10px 32px'
  else if (props.mini) return '8px 32px'
  return '16px 32px'
}

const getBoxShadowColor = (props) => {
  if (props.gray) return 'rgba(0, 0, 0, 0.25)'
  else if (props.blue) return 'rgba(14, 204, 204, 0.25)'
  else if (props.yellow) return 'rgba(255, 181, 76, 0.25)'
  else if (props.red) return 'rgba(250, 101, 87, 0.25)'
  return 'rgba(0,153,46,0.25)'
}

const getBorderRadius = (props) => {
  if (props.round || (props.icon && !props.radius)) return '100px'
  else if (props.square) return '0'
  return '4px'
}

export default styled.button`
  background: ${getBackgroundColor};
  padding: ${getPadding}
  border-radius: ${getBorderRadius};
  font-size: ${props => props.mini ? '12' : '14'}px;
  cursor: pointer;
  border: none;
  color: white;
  letter-spacing: 1px;
  line-height: 14px;
  box-shadow: none;
  &:hover {
    box-shadow: ${props => props.flat ? 'none' : `0 10px 20px 0 ${getBoxShadowColor(props)}`};
  }
`
