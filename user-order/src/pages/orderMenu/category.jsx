import React from "react"
import { category_list } from "../../utils/dataRestaurant"

export default function CategoryFood({category,setCategory}) {

  return(
    <div className="min-w-screen px-20 pt-20">
      <div className="flex flex-col gap-5 m-5">
      <h1 className="font-open_sans font-bold text-[#FFB30E] text-2xl xl:text-6xl">Pilih Menu Kesukaanmu</h1>
      <p className="text-xl font-open_sans">Pilih menu kesukaan anda, menu kami semuanya khas asli dari Indonesia. Anda bisa mencari menu makanan sesuai kategori makanan. Ada Appetizer untuk makanan pembuka, Main Course untuk makanan utama, dan Desert untuk pencuci mulut.</p>
      <div className="flex items-center text-center gap-8">
        {category_list.map((item,index)=> {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.category_food?"All":item.category_food)} key={index}>
              <img src={item.menu_image} alt="" className={`w-[6.5vw] min-w-8 cursor-pointer transition-opacity rounded-full border-2 border-transparent hover:border-yellow-500 ${category === item.category_food ? 'active border-yellow-500' : ''}`} />
              <p className="font-open_sans font-bold cursor-pointer">{item.category_food}</p>
            </div>
          )
        })}
      </div>
      <hr className="border-[#424242] w-full m-5"/>
    </div>
    </div>

  )
}