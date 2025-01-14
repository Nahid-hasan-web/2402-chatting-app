import './Register.css'
import formBg from '../../assets/images/fromBg.png'
import { Link } from 'react-router-dom'
import google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import leaf from '../../assets/images/leaf.png'
import { useState } from 'react'
const Login = () => {
  // ================== custom varibales 
  const [fromData , setFromData] = useState({name:'' , nameError:'' , email:'',emailError:'',password:'',passwordError:''})



  // ================ firebase variables 



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
                  Already have an Account ? <Link to={'#'}>Log in</Link>
                  </p>
                </div>
                <div className="main_form_input_filds">
                  {/* ====== name fild */}
                  <label >Name</label>
                  <input className={`${fromData.nameError}`} onChange={(e)=>{setFromData((prev)=>({...prev , name:e.target.value})),setFromData((prev)=>({...prev , nameError:''}))}} type="text" />
                  {/* ====== Email fild */}
                  <label >Email</label>
                  <input className={`${fromData.emailError}`} onChange={(e)=>{setFromData((prev)=>({...prev , email:e.target.value })),setFromData((prev)=>({...prev , emailError:''}))}} type="text" />

                  {/* ====== Password fild */}
                  <label >Password</label>
                  <input className={`${fromData.passwordError}`} onChange={(e)=>{setFromData((prev)=>({...prev , password:e.target.value})),setFromData((prev)=>({...prev , passwordError:''}))}} type="text" />

                </div>
                  <div className=' userButton flex justify-center'>
                  <button onClick={handelSubmit}>Sign Up</button>
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

export default Login