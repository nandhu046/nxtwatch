import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'

import {FiSun, FiLogOut} from 'react-icons/fi'

import {GiHamburgerMenu} from 'react-icons/gi'

import Context from '../../context'

import TabOption from '../TabOption'

import {
  Navbar,
  WebLogo,
  NavItemsContainer,
  IconButton,
  ProfileImg,
  IconButton1,
  LogOutBtn,
  MenuContainer,
  MenuItem,
} from './StyledComponents'

const menuOptionsList = [
  {id: 1, text: 'Home'},
  {id: 2, text: 'Trending'},
  {id: 3, text: 'Gaming'},
  {id: 4, text: 'Saved videos'},
]

class Header extends Component {
  state = {menu: false, activeTab: 1}

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme, changeTheme} = value
          const {history} = this.props
          const changingTheme = () => {
            changeTheme()
          }

          const onLogOut = () => {
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          const goToHome = () => history.push('/')

          const showAppOptions = () => {
            this.setState(prevState => ({
              menu: !prevState.menu,
            }))
          }

          return (
            <>
              <Navbar bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}>
                <WebLogo
                  onClick={goToHome}
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <NavItemsContainer>
                  <IconButton onClick={changingTheme}>
                    {isDarkTheme ? <FiSun stroke="white" /> : <FaMoon />}
                  </IconButton>
                  <IconButton1 onClick={showAppOptions}>
                    <GiHamburgerMenu
                      fill={isDarkTheme ? 'white' : 'currentColor'}
                    />
                  </IconButton1>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <IconButton1 onClick={onLogOut}>
                    <FiLogOut stroke={isDarkTheme ? 'white' : 'currentColor'} />
                  </IconButton1>
                  <LogOutBtn
                    onClick={onLogOut}
                    bColor={isDarkTheme ? '#ffffff' : '#3b82f6'}
                    color={isDarkTheme ? '#ffffff' : '#3b82f6'}
                  >
                    Logout
                  </LogOutBtn>
                </NavItemsContainer>
              </Navbar>
              <MenuContainer bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}>
                {menuOptionsList.map(e => (
                  <TabOption key={e.id} data={e} />
                ))}
              </MenuContainer>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Header)
