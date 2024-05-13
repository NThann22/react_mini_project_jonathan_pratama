import React, { useContext } from "react"
import AddIconWhite from '../../image/add_iconWhite.png'
import AddIcon from '../../image/addIcon.png'
import RemoveIcon from '../../image/removeIcon.png'
import { StoreContext } from "../../context/StoreContect"

export default function MenuItem({id,name,image,price,rating,description}) {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return(
    <div className="w-full shadow-md rounded-xl">
      <div className="relative">
        <img src={image} className="w-[424px] h-[280px] rounded-t-2xl" />
        {!cartItems[id]
          ?<img 
            className="absolute bottom-4 right-4 cursor-pointer w-12" 
            onClick={()=>addToCart(id)} 
            src={AddIconWhite} 
            alt="" 
            />
          :<div className="absolute bottom-4 right-4 flex items-center gap-3 p-2 rounded-full bg-white">
            <img 
            className="" 
            onClick={()=>removeFromCart(id)} 
            src={RemoveIcon} 
            alt="" 
            />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={AddIcon} />
          </div>
        }
      </div>

      <div className="p-5 bg-slate-100">
        <div className="flex justify-between items-center mb-3 font-bold font-open_sans">
          <p className="text-2xl">{name}</p>
          <p className="inline-block text-xl bg-[#FFB30E] rounded-full px-3 py-1">★ {rating}/10</p>
        </div>
        <p className="font-open_sans mb-8">{description}</p>
        <p className="font-bold font-open_sans inline-block text-xl bg-gray-300 rounded-full px-3 py-1">Rp{price}</p>
      </div>
    </div>
  )
}