import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../Provider';
import deep_login from '../assets/deep_login.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            toast.error("Fill all the fields");
            return
        }
        alert("Submitted");
    }
    return (
        <>
            {/* <img src={deep_login} className='fixed w-full ' /> */}
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col p-4 sm:max-w-[400px] xs:max-w-[80%] mt-[90px] mx-auto border border-black bg-white rounded-md'>
                    <div className='flex flex-col justify-center mt-2'>
                        <h1 className='mx-auto font-bold text-gray-700 wittgenstein-login text-[26px]'>Welcome User</h1>
                        <h1 className='mx-auto text-gray-700 font-bold livvic-login text-[26px]'>Login</h1>
                    </div>
                    <input name='email' type='email' placeholder='Email' className='lora-pwd mx-auto w-[75%] mt-9 px-1 py-0.5 outline-none focus:border-teal-400 border-[1.5px] border-black rounded-md' onChange={(e) => setEmail(e.target.val)}/>
                    <input name='password' type='password' placeholder='Password' className='lora-pwd mx-auto w-[75%] mt-4 px-1 py-0.5 outline-none focus:border-teal-400 border-[1.5px] border-black rounded-md' onChange={(e) => setPassword(e.target.val)}/>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={() => setShowPassword(!showPassword)} className="-mt-6 sm:ml-72 xs:ml-[75%] w-fit cursor-pointer" />
                    <button type='submit' className='mx-auto mt-5 px-3 py-1 wittgenstein-login bg-teal-500 border rounded-md'>Login</button>
                    <p className='mx-auto text-gray-800 wittgenstein-login mt-3'>New user? <a href='/register' className='livvic text-cyan-800 underline'>Register</a></p> 
                </div>
            </form>
        </>
    )
}

export default Login
