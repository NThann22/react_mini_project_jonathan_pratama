import React, { useState } from "react";
import CategoryFood from "./category";
import MenuDisplay from "./menuDisplay";

export default function OrderMenu() {

  const[category,setCategory] = useState("All")

  return(
    <div>
      <CategoryFood category={category} setCategory={setCategory}/>
      <MenuDisplay category={category} />
    </div>
  )
}