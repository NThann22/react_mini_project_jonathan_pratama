import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContect";
import MenuItem from "./menuItem";

export default function MenuDisplay({category}) {

  const {menu_list} = useContext(StoreContext)

  return(
    <div className="px-20 pb-20">
      <h2 className="font-open_sans font-bold text-2xl xl:text-6xl text-[#FFB30E] pb-5">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {menu_list.map((item,index) => {
          if (category==="All" || category===item.category) {
            return (
              <MenuItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              rating={item.rating} 
              description={item.description} 
              price={item.price} 
              image={item.image} 
              />
            )
          }
          })}
      </div>
    </div>
  )
}