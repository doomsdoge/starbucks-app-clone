import {Link} from '@chakra-ui/react'
import {useState, useEffect} from 'react'

export default function Navbar (props){

    const logout = () => {
        localStorage.removeItem('id');
    }


    return (
        <div className="flex justify-between px-10 bg-white h-[100px] items-center sticky top-0 shadow-[0_1px_10px_rgba(0,0,0,0.1)] z-50">
            <div>
                <Link href='/'>
                    <span>
                        logo
                    </span>
                </Link>
                <Link href='/menu'>
                    <span className="ml-3 font-bold hover:text-[#02754b]">
                        ORDER
                    </span>
                </Link>
                <span className="ml-3 font-bold hover:text-[#02754b]">
                    CARDS
                </span>
                <span className="ml-3 font-bold hover:text-[#02754b]">
                    GIFT
                </span>
            </div>
            <div>
                <span className="mr-6 font-bold hover:text-[#02754b]">
                    Find a store
                </span>
                    {
                        props.username?
                        <>
                            <span className='font-bold text-black mr-5'>
                                Hello, {props.username}
                            </span>
                            <span>
                            <Link href='/'>
                                <button className="bg-black hover:bg-slate-800 text-white font-bold px-4 py-2 rounded-full border border-slate-900 mr-3" onClick={logout}>
                                    Sign Out
                                </button>
                            </Link>
                            </span>
                        </>
                        :
                        <>
                            <span>
                                <Link href='/login'>
                                    <button className="bg-white hover:bg-slate-100 text-black font-bold px-4 py-2 rounded-full border border-slate-900 mr-3">
                                        Sign In
                                    </button>
                                </Link>
                            </span>
                            <span>
                                <Link href='/register'>
                                    <button className="bg-black hover:bg-slate-800 border text-white font-bold px-4 py-2 rounded-full">
                                        Join now
                                    </button>
                                </Link>
                            </span>
                        </>
                    }
            </div>
        </div>
    )
}