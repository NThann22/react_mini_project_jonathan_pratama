import React from "react"
import Cover from "./cover"
import OrderSystem from "./orderSystem"
import Recomendation from "./recomendation"
import InformationAI from "./informationAI"

export default function Homepage() {

  return(
    <>
      <Cover />
      <InformationAI />
      <OrderSystem />
      <Recomendation />
    </>
  )
}