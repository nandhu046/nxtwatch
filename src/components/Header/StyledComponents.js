import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 16px;
  padding-left: 22px;
  padding-right: 22px;
  padding-bottom: 16px;
  background-color: ${props => props.bgColor};
  flex-wrap: wrap;
`

export const WebLogo = styled.img`
  height: 30px;
  width: 140px;
  cursor: pointer;
`

export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 40%;
  justify-content: space-between;
  @media screen and (min-width: 576px) {
    width: 20%;
  }
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`

export const IconButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  height: 30px;
  width: 30px;
  cursor: pointer;
  font-size: 25px;
`

export const ProfileImg = styled.img`
  height: 26px;
  width: 26px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const IconButton1 = styled(IconButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogOutBtn = styled.button`
    border: 1.5px solid #ffffff;
    border-color: ${props => props.bColor};
    color: ${props => props.color};
    font-family: 'Roboto'
    font-size: 500px;
    background-color: transparent;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20%;
  background-color: ${props => props.bgColor};
`

export const MenuItem = styled.li`
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
