import React from 'react'
import {useDispatch} from 'react-redux'
import authService from "../../appwite/conf";
import {logout} from "../../store/authslice"

function LogoutBtn() {
  const dispatch = useDispatch()
  const logouthandler = () =>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn