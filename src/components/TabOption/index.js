import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import Context from '../../context'
import {MenuItem} from '../StylesComponents'

const iconsList = [AiFillHome, FaFire, MdPlaylistAdd, SiYoutubegaming]

const TabOption = props => {
  const {data} = props
  const {id, text} = data
  const Icon = iconsList[id]
  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <MenuItem color={isDarkTheme ? '#f9f9f9' : '#212121'}>
            <Icon />
            Home
          </MenuItem>
        )
      }}
    </Context.Consumer>
  )
}

export default TabOption
