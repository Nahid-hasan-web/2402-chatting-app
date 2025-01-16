import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom';
const ResetPassword = () => {
    const [email ,setEmail]  = useState('')
    const auth = getAuth();


    const handelOpt = ()=>{
        if(!email){
            alert('enter your email')
        }else{
            sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('opt send')
        })
        .catch((error) => {
            console.log(error)
        });

        }
    }

  return (
    <>
        <div className='w-full h-screen flex justify-center items-center bg-[#E8F9FF]'>
            <div className='w-[400px] p-5 border-2 border-[#16404D] rounded-lg flex flex-col items-end'>
                <input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your account email' className='w-full bg-transparent outline-none ' type="email" />
                <button onClick={handelOpt} className='bg-[#16404D] py-[5px] px-[10px] text-[14px] font-medium text-white mt-5  ml-auto active:scale-[1.1]'>Send OTP</button>
                <Link to={'/login'}> get back to login</Link>
            </div>
        </div>
    </>
  )
}

export default ResetPassword