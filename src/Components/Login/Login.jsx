import formBg from '../../assets/images/fromBg.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import leaf from '../../assets/images/leaf.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authUser } from '../../Slice/authSlice'
const Login = () => {
  // ============ redux data
  const dispatch = useDispatch()

  // ================== custom varibales 
  const [fromData , setFromData] = useState({  email:'',emailError:'',password:'',passwordError:''})
  const navigate = useNavigate()


  // ================ firebase variables 
  const auth = getAuth();
  

  // ================ all functions 
  const handelSubmit = ()=>{
  
      if(!fromData.email){
        setFromData((prev)=>({...prev , emailError:'!border-red-600'}))
      }
      else if(!fromData.password){
        setFromData((prev)=>({...prev , passwordError:'!border-red-600'}))
      } else{
        signInWithEmailAndPassword(auth, fromData.email, fromData.password)
        .then((userCredential) => {
            navigate('/')
          dispatch(authUser(userCredential.user))
        })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode == "auth/invalid-credential"){
            alert('something went wrong')
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
                  <h2>Login</h2>
                  <p>
                  Don't have an Account ? <Link to={'/register'}>Sign In</Link>
                  </p>
                </div>
                <div className="main_form_input_filds">
                {/* ====== Email fild */}
                  <label >Email</label>
                  <input className={`${fromData.emailError}`} onChange={(e)=>{setFromData((prev)=>({...prev , email:e.target.value })),setFromData((prev)=>({...prev , emailError:''}))}} type="email" />

                  {/* ====== Password fild */}
                  <label >Password</label>
                  <input className={`${fromData.passwordError}`} onChange={(e)=>{setFromData((prev)=>({...prev , password:e.target.value})),setFromData((prev)=>({...prev , passwordError:''}))}} type="text" />
                  <Link  to={'/resetPasswrod'} className='text-brandColor block'>forget password? </Link>
                </div>
                  <div className=' userButton flex justify-center'>
                  <button onClick={handelSubmit}>Sign In</button>
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