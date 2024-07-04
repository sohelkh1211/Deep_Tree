import { useContext, useState } from "react";
import { GlobalContext } from "../Provider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import toast from "react-hot-toast";

const Register = () => {
  const { data, setData } = useContext(GlobalContext);
  const [pwd, setPwd] = useState({
    password: '',
    confirm_password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const handlePassword = (e) => {
    const { name, value } = e.target;
    setPwd({
      ...pwd,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.first_name || !data.last_name || !data.email || !pwd.password || !pwd.confirm_password) {
      toast.error("Fill all the fields");
      return;
    }
    else if (pwd.password !== pwd.confirm_password) {
      alert("Passwords do not match");
      return;
    }

  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col p-4 sm:max-w-[400px] xs:max-w-[80%] mt-[60px] mx-auto border border-black bg-white rounded-md'>
        <div className='flex flex-col justify-center mt-2'>
          <h1 className='mx-auto font-bold text-gray-700 wittgenstein-login sm:text-[26px] xs:text-[22px]'>Welcome to Deep Tree</h1>
          <h1 className='mx-auto text-gray-700 font-bold livvic-login text-[26px]'>Register</h1>
        </div>
        <input name='first_name' type='text' placeholder='First Name' className='lora-pwd mx-auto w-[75%] mt-9 px-1 py-0.5 border-[1.5px] outline-none focus:border-teal-400 border-black rounded-md' onChange={handleInputChange} />
        <input name='last_name' type='text' placeholder='Last Name' className='lora-pwd mx-auto w-[75%] mt-4 px-1 py-0.5 border-[1.5px] outline-none focus:border-teal-400 border-black rounded-md' onChange={handleInputChange} />
        <input name='email' type='email' placeholder='Email' className='lora-pwd mx-auto w-[75%] mt-4 px-1 py-0.5 border-[1.5px] outline-none focus:border-teal-400 border-black rounded-md' onChange={handleInputChange} />
        <input name='password' type={showPassword ? 'text' : 'password'} placeholder='Password' className='lora-pwd mx-auto w-[75%] mt-4 px-1 py-0.5 border-[1.5px] outline-none focus:border-teal-400 border-black rounded-md' onChange={handlePassword} />
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={() => setShowPassword(!showPassword)} className="-mt-6 sm:ml-72 xs:ml-[75%] w-fit cursor-pointer" />
        <input name='confirm_password' type='password' placeholder='Confirm Password' className='lora-pwd mx-auto w-[75%] mt-6 px-1 py-0.5 border-[1.5px] outline-none focus:border-teal-400 border-black rounded-md' onChange={handlePassword} />
        <button type='submit' className='mx-auto mt-5 px-3 py-1 wittgenstein-login bg-teal-500 border rounded-md'>Register</button>
        <p className='mx-auto text-gray-800 wittgenstein-login mt-3'>Already have account? <a href='/' className='livvic text-cyan-800 underline'>Login</a></p>
      </div>
    </form>
  )
}

export default Register
