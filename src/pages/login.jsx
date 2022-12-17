import axios from "axios"
import { useRef, useState } from "react"
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export default function Login (props){
    const [message, setMessage] = useState('')
    
    let username = useRef()
    let password = useRef()

    
    return (
        <div className="flex flex-col items-center mx-30 gap-5">
            <div className="mt-10 font-bold text-3xl">
                Sign in or create an account
            </div>
            <div className="w-full max-w-lg rounded-md">
                <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                    <div className="mb-5">* indicates required field</div>
                    <div className="mb-3">
                        <div className="font-bold">Input Username & Password</div>
                        <input type="text" className="border border-slate-200 rounded w-full h-full focus:outline-green-700 py-4 px-3 mt-2 mb-3 placeholder:text-slate-400" placeholder='* Username' ref={username}/>
                        <input type="text" className="border border-slate-200 rounded w-full h-full focus:outline-green-700 py-4 px-3 mt-2 mb-3 placeholder:text-slate-400" placeholder='Password' ref={password}/>
                    </div>
                    <div className="contents-right">
                        <button className="bg-green-800 hover:bg-slate-700 border text-white font-bold px-5 py-3 rounded-full" onClick={() => props.func.onLogin(username.current.value, password.current.value)}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}