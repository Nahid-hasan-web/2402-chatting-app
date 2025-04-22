import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutOne = () => {
  const sliceUser = useSelector((state)=>state.authUser.value)
  const navigate  = useNavigate()
  useEffect(()=>{
    if(sliceUser == null){
      navigate('/login')
    }
  },[])
  return (
    <>

<h1>dfsaf</h1>
        <Outlet />
    </>
  )
}

export default LayoutOne