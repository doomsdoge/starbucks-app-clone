import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { toast, Toaster } from "react-hot-toast"
import LoadingIcon from '../assets/loading-icon.png'

export default function Product (){

    const [data, setData] = useState(null)
    /* const [order, setOrder] = useState([]) */
    
    // get id from current address as param to use on db fetch
    let {id} = useParams()

    //get options value
    let indexSize = useRef()
    let indexTopping = useRef()
    let indexSugar = useRef()

    let onGetData = async() => {
        try {
            let response = await axios.get(`http://localhost:5000/products/${id}`)
            setData(response.data)
        } catch (error) {

        }
    }

    // add to cart
    let addToOrder = async() => {
        try {
            let order = {
                productID: parseInt(id),
                indexSize: parseInt(indexSize.current.value),
                indexTopping: parseInt(indexTopping.current.value),
                indexSugar: parseInt(indexSugar.current.value),
                qty: 1,
                userID: parseInt(localStorage.getItem('id'))
            }

            let checkCart = await axios.get(
                `http://localhost:5000/cart?
                productID=${parseInt(id)}&
                userID=${parseInt(localStorage.getItem('id'))}&
                indexSize=${parseInt(indexSize.current.value)}&
                indexTopping=${parseInt(indexTopping.current.value)}&
                indexSugar=${parseInt(indexSugar.current.value)}
                `)
        
            if (checkCart.data.length > 0) {
                // existing item in cart with same details
                await axios.patch(`http://localhost:5000/cart/${checkCart.data[0].id}`, {qty: checkCart.data[0].qty + 1})
                toast('Successfully Added to Cart')
            } else {
                // add new item in cart
                await axios.post(`http://localhost:5000/cart`, order)
                toast('Successfully Added to Cart')
            }
        } catch (error) {
            
        }
    }
    
    /* let cartSize = async() => {
        try {
            let cart = await axios.get(`http://localhost:5000/cart?userID=${parseInt(localStorage.getItem('id'))}`)
            return cart.data.length
        } catch (error) {
            
        }
    }
    console.log(cartSize) */

    useEffect(() => {
        onGetData()
    },[])

    if (data === null) {
        return (
            <div className="flex justify-center items-center">
                <img src={LoadingIcon} alt="" className="w-[200px]"/>
                <div className="font-bold text-2xl text-slate-800">Loading...</div>
            </div>
        )
    }

    return (
        <>
            <div className="sticky px-20 top-[100px] h-[60px] shadow-inner bg-slate-100 flex items-center border border-b-slate-200">
                <Link to='/menu'>
                    <span className="font-medium">
                        Menu
                    </span>
                </Link>
                <span className="font-medium ml-1">
                    /
                </span>
                <span className="font-medium ml-1">
                    {data.category}
                </span>
                <span className="font-medium ml-1">
                    /
                </span>
                <span className="font-bold ml-1">
                    Product Name
                </span>
            </div>
            <div className="h-[400px] bg-[#1f3a33] px-20 flex items-center">
                <span className="basis-2/5 flex justify-center items-center">
                    <img
                        src={data.image}
                        className="w-[350px] h-[350px]"
                    />
                </span>
                <span className="basis-3/5 flex flex-col justify-center pl-10">
                    <div className="text-[48px] text-white font-bold">{data.name}</div>
                    <div className="text-[32px] text-gray-300 font-medium mt-5">
                        {data.size[0].calories} calories<sup>(tooltip)</sup> 
                    </div>
                </span>
            </div>
            <div className="h-[800px] bg-white px-20 flex items-center">
                <span className="basis-2/5 h-full pr-[200px] flex flex-col justify-start items-start mt-[100px]">
                    <div className="font-medium text-4xl mb-5">Size options</div>
                    <hr className="w-full bg-[#d4e9e2] h-1"/>
                    <select ref={indexSize} name="" id="">
                        {
                            data.size.map((value, index) => {
                                return (
                                    <option key={index} value={index}>{value.option}</option>
                                )
                            })
                        }
                    </select>
                </span>
                <span className="basis-3/5 h-full pr-[200px] flex flex-col justify-start items-start pl-10 mt-[100px]">
                    <div className="font-medium text-4xl mb-5">Customizations</div>
                    <hr className="w-full bg-[#d4e9e2] h-1"/>
                    <select ref={indexTopping} name="" id="">
                        {
                            data.topping.map((value, index) => {
                                return (
                                    <option key={index} value={index}>{value}</option>
                                )
                            })
                        }
                    </select>
                    <select ref={indexSugar} name="" id="">
                        {
                            data.sugar.map((value, index) => {
                                return (
                                    <option key={index} value={index}>{value}</option>
                                )
                            })
                        }
                    </select>
                </span>
            </div>
            <div className="h-[400px] bg-[#1f3a33] px-20 flex items-center">
                Description & Nutrition
            </div>
            <div className="h-[800px] bg-white px-20 flex items-center">
                Footer
            </div>
            <div className="h-[200px] flex flex-col justify-between sticky bottom-0">
                <div className="h-[100px] px-20 flex justify-end items-start">
                    <Link href='/register'>
                        <button 
                            className="bg-[#02754b] text-xl text-white font-bold px-7 py-5 rounded-full shadow-md"
                            onClick={addToOrder}
                        >
                            Add to Order
                        </button>
                    </Link>
                    <div>
                        {/* {cartSize} */}
                    </div>
                </div>
                <div className="h-[100px] bg-[#1f3a33] px-20 flex items-center ">
                    Location
                </div>
            </div>
        </>
    )
}