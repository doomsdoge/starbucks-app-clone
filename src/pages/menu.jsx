import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Menu (){

    const [data, setData] = useState([])
    const [category, setCategory] = useState([])

    let onGetData = async() => {
        try {
            let responseProduct = await axios.get(`http://localhost:5000/products`)
            let responseCategory = await axios.get(`http://localhost:5000/category`)
            setData(responseProduct.data)
            setCategory(responseCategory.data)
        } catch (error) {

        }
    }

    let onFiltering = async(index) => {
        try {
            let responseProduct = await axios.get(`http://localhost:5000/products?category=${index}`)
            setData(responseProduct.data)
        } catch (error) {
            
        }
    }

    let mapProducts = () => {
        return data.map((value, index) => {
            return (
                <div className="flex items-center mt-3">
                    <div>
                        <Link to={`/product/${value.id}`}>
                            <img src={value.image} className="w-[100px] h-[100px] rounded-full" />
                        </Link>
                    </div>
                    <div className="pl-5">
                        <h1 className="text-xl font-medium">
                            {value.name}
                        </h1>
                    </div>
                </div>
            )
        })
    }
    
    let mapCategory = () => {
        return category.map((value, index) => {
            return (
                <div onClick={() => onFiltering(index)} className="my-fs-18 mt-5 text-slate-500 font-medium">{value}</div>
            )
        })
    }

    useEffect(() => {
        onGetData()
    },[])

    return (
        <>
            <div className="sticky top-[100px] h-[60px] shadow-inner bg-slate-100 flex items-center px-20 border border-b-slate-200">
                <span onClick={onGetData} className="font-medium">
                    All products
                </span>
                <span className="font-medium ml-10">
                    Featured
                </span>
                <span className="font-medium ml-10">
                    Previous Orders
                </span>
                <span className="font-medium ml-10">
                    Favorite Products
                </span>
            </div>
            <div className="flex px-20 pt-20">
                <div className="basis-1/6">
                    {/*List Category*/}
                    <div>
                        <h1 className="text-xl font-bold">Category</h1>
                    </div>
                    { mapCategory() }
                </div>
                <div className="basis-5/6">
                    <div>
                        <h1 className="text-xl font-bold">Menu</h1>
                    </div>
                    <div className="mt-10 border-bottom pb-3">
                        <h1 className="text-xl font-bold">All Products</h1>
                    </div>
                        {/*List Product*/}
                            <div className="grid grid-cols-2 mt-3">
                        { mapProducts() }
                    </div>
                </div>
            </div>
        </>
    )
}