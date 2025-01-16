import './Register.css'
import formBg from '../../assets/images/fromBg.png'
import { Link, useNavigate } from 'react-router-dom'
import google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import leaf from '../../assets/images/leaf.png'
import { useState } from 'react'
import { getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import {  CSSProperties } from "react";
import { BarLoader } from 'react-spinners'
const Register = () => {
  // ================== custom varibales 
  const [fromData , setFromData] = useState({name:'' , nameError:'' , email:'',emailError:'',password:'',passwordError:''})
  const [loding , setLoding] =  useState(false)
  const alu = useNavigate()

  // ================ firebase variables 
  const auth = getAuth();



  // ================ all functions 
  const handelSubmit = ()=>{
      if(!fromData.name){
        setFromData((prev)=>({...prev , nameError:'!border-red-600'}))
      }
      if(!fromData.email){
        setFromData((prev)=>({...prev , emailError:'!border-red-600'}))
      }
      if(!fromData.password){
        setFromData((prev)=>({...prev , passwordError:'!border-red-600'}))
      }else{
        setLoding(true)
        createUserWithEmailAndPassword(auth, fromData.email, fromData.password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: fromData.name,
            photoURL: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          }).then(() => {
            setLoding(false)
            alu('/login')
            console.log(userCredential)
          }).catch((error) => {
            // An error occurred
            // ...
          });
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          if(errorCode == 'auth/email-already-in-use'){
            alert('email taken')
          }
        });
      }
  }





  return (
    <>
        <div className='main_From'>
          <div style={{background:`url(${formBg})` , backgroundRepeat:'no-repeat' , backgroundPosition:'center' , backgroundSize:'cover'}} className="fromImg_part ">
            <div className="main_form_inputs">
                <div className="main_form_head">
                  <h2>Get Started</h2>
                  <p>
                  Already have an Account ? <Link to={'/login'}>Log in</Link>
                  </p>
                </div>
                <div className="main_form_input_filds">
                  {/* ====== name fild */}
                  <label >Name</label>
                  <input className={`${fromData.nameError}`} onChange={(e)=>{setFromData((prev)=>({...prev , name:e.target.value})),setFromData((prev)=>({...prev , nameError:''}))}} type="text" />
                  {/* ====== Email fild */}
                  <label >Email</label>
                  <input className={`${fromData.emailError}`} onChange={(e)=>{setFromData((prev)=>({...prev , email:e.target.value })),setFromData((prev)=>({...prev , emailError:''}))}} type="email" />
              
                  {/* ====== Password fild */}
                  <label >Password</label>
                  <input className={`${fromData.passwordError}`} onChange={(e)=>{setFromData((prev)=>({...prev , password:e.target.value})),setFromData((prev)=>({...prev , passwordError:''}))}} type="text" />

                </div>
                  <div className=' userButton flex justify-center'>
                    {
                      loding?
                      <button ><BarLoader  color='white' /></button>
                      :
                      <button onClick={handelSubmit}>Sign Up</button>

                    }

                  </div>
                  <p className='oterOptions'>
                  Or Sign Up with 
                  </p>
                  <div className='otherOptionButtons'>
                    <button><img src={google} alt="google" /></button>
                    <button><img src={apple} alt="apple" /></button>
                  </div>
                  <div className='leaf'>
                    <img src={leaf} alt="leaf" />
                  </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Register