import { Route, Routes } from "react-router-dom"
import DefaultLayout from "../layout/DefaultLayout"
import Home from "../pages/Home"
import AddToCart from "../pages/AddToCart"

export const Router = () => {
 return (
  <Routes>
   <Route path="/" element={<DefaultLayout />}>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/add-to-cart" element={<AddToCart />}/>
   </Route>
  </Routes>
 )
}