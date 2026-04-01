import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Profile = () => {

    const {user} = useSelector(state=>state)

    const dispatch = useDispatch()

  return (
    <div>
        <h1>Profile</h1>
        <h3>Name:{user.name}</h3>
        <h3>Email:{user.email}</h3>
        <button onClick={()=>dispatch({type:'LOGOUT'})}>Logout</button>
    </div>
  )
}
