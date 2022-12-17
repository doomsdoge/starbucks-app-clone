import { useRef, useState } from "react"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function Register (){

    const [message, setMessage] = useState('')

    let username = useRef()
    let email = useRef()
    let password = useRef()

    let onRegister = async () => {
        try {
            // get input value
            let inputUsername = username.current.value
            let inputEmail = email.current.value
            let inputPassword = password.current.value

            // validate if email is exist
            // get both username & email
            const checkUsername = await axios.get(`http://localhost:5000/users?username=${inputUsername}`)
            const checkEmail = await axios.get(`http://localhost:5000/users?email=${inputEmail}`)

            if (checkUsername.data.length > 0) throw { message: 'username already exist' }
            if (checkEmail.data.length > 0) throw { message: 'email already exist' }

            // validate if not complete
            if(!inputUsername || !inputEmail || !inputPassword) throw { message: 'Data not complete!'}

            // store to JSON
            await axios.post('http://localhost:5000/users',
                {
                    username: inputUsername,
                    email: inputEmail,
                    password: inputPassword
                }
            )
            username.current.value = ''
            email.current.value = ''
            password.current.value = ''
            toast.success('Register success!')
        }  catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center mx-30 gap-5">
            <div className="mt-10 font-bold text-3xl">
                Create an account
            </div>
            <div className="mt-5 font-bold text-sm text-slate-500 tracking-widest">
                STARBUCKS® REWARDS
            </div>
            <div className="max-w-md text-center text-sm text-slate-500 mb-5">
            Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and more.
            </div>
            <div className="w-full max-w-lg rounded-md">
                <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                    <div className="mb-5">* indicates required field</div>
                    <div className="mb-3">
                        <div className="font-bold">Personal Information</div>
                        <input type="text" className="border border-slate-200 rounded w-full h-full focus:outline-green-700 py-4 px-3 mt-2 mb-3 placeholder:text-slate-400" placeholder='* Username' ref={username}/>
                    </div>
                    <div className="mb-1">
                        <div className="font-bold">Account Security</div>
                        <input type="text" className="border border-slate-200 rounded w-full h-full focus:outline-green-700 py-4 px-3 mt-2 mb-3 placeholder:text-slate-400" placeholder='* Email address' ref={email}/>
                        <input type="text" className="border border-slate-200 rounded w-full h-full focus:outline-green-700 py-4 px-3 mt-2 mb-3 placeholder:text-slate-400" placeholder='* Password' ref={password}/>
                    </div>
                    <div className="contents-right">
                        <button className="bg-green-800 hover:bg-slate-700 border text-white font-bold px-5 py-3 rounded-full" onClick={onRegister}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}