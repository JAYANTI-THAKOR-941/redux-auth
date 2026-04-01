import React from 'react'
import { useSelector } from 'react-redux'
import { Profile } from './components/Profile'
import Login from './components/Login'

const App = () => {
  const {isLoggedIn} = useSelector(state=>state)
  return (
    <div>
      {isLoggedIn ? <Profile/> : <Login/>}
    </div>
  )
}

export default App