import styled from 'styled-components'

const MenuItem = styled.li`
  list-style-type: none;
  color: ${props => props.color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'roboto';
  font-weight: 500;
  cursor: pointer;
  flex-wrap: wrap;
`
export default MenuItem
