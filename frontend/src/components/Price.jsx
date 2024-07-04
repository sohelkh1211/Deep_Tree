import { useState } from "react"

const Price = () => {
    const [price, setPrice] = useState(75000);
    console.log(price);
    return (
        <div className="flex flex-col justify-between gap-y-2 p-4 mt-[70px] w-fit mx-auto bg-slate-50 border rounded-lg">
            <select className="font-bold">
                <option >Filter Price</option>
            </select>
            <input type="range" min={75000} max={95000} defaultValue={price} onChange={(e) => setPrice(e.target.value)} className="mt-2 " />
            <div className="flex flex-row justify-between gap-x-2 ">
                <div className="bg-white border border-gray-400 rounded-md py-1 pl-1 pr-4">
                    <p className="">Min price</p>
                    <p className="font-bold">₹ 75000</p>
                </div>
                <hr />
                <div className="bg-white border border-gray-400 rounded-md py-1 pl-1 pr-4">
                    <p className="">Max price</p>
                    <p className="font-bold">₹ 95000</p>
                </div>
            </div>
            <hr className="mt-2 font-bold" />
            <div className="flex flex-row justify-between ">
                <button className="underline">Clear</button>
                <button className="px-3 py-1 bg-blue-600 text-white border rounded-xl">Apply</button>
            </div>
        </div>
    )
}

export default Price
