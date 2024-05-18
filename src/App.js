import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import './App.css'

import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import Context from './context'

class App extends Component {
  state = {isDarkTheme: false}

  updateTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <Context.Provider value={{isDarkTheme, changeTheme: this.updateTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
