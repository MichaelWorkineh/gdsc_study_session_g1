import { useState } from 'react'
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
/*
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
 */
import items from "./items.json"
import Search from './components/Search.jsx'
import './App.css'
import Cart from './Cart.jsx'
import CartItem from './components/CartItem.jsx'
import DetailsPage from './DetailsPage.jsx'
import HomePage from './HomePage.jsx'
import ShopCategories from './ShopCategories.jsx';
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element = {<HomePage/>} />
        
        <Route path="/Shoes" element = {<ShopCategories category={"Shoes"} categories={items.filter((value)=>{return value.category.includes("Shoes");})}/>} />
        <Route path="/Shoes/RunningShoes" element = {<DetailsPage item={items[3]}/>} />
        <Route path="/Shoes/AnkleBoots" element = {<DetailsPage item={items[8]}/>} />
        <Route path="/Shoes/EspadrilleFlats" element = {<DetailsPage item={items[13]}/>} />

        <Route path="/Tops" element = {<ShopCategories category={"Tops"} categories={items.filter((value)=>{return value.category.includes("Tops");})}/>} />
        <Route path="/Tops/CottonT-Shirt" element = {<DetailsPage item={items[0]}/>} />
        <Route path="/Tops/PoloShirt" element = {<DetailsPage item={items[5]}/>} />
        <Route path="/Tops/Button-UpShirt" element = {<DetailsPage item={items[10]}/>} />

        <Route path="/Outerwear" element = {<ShopCategories category={"Outerwear"} categories={items.filter((value)=>{return value.category.includes("Outerwear");})}/>} />
        <Route path="/Outerwear/HoodedSweatshirt" element = {<DetailsPage item={items[2]}/>} />
        <Route path="/Outerwear/LeatherJacket" element = {<DetailsPage item={items[7]}/>} />
        <Route path="/Outerwear/QuiltedVest" element = {<DetailsPage item={items[12]}/>} />

        <Route path="/Bottoms" element = {<ShopCategories category={"Bottoms"} categories={items.filter((value)=>{return value.category.includes("Bottoms");})}/>} />
        <Route path="/Bottoms/DenimJeans" element = {<DetailsPage item={items[1]}/>}/>  
        <Route path="/Bottoms/CargoPants" element = {<DetailsPage item={items[6]}/>}/>
        <Route path="/Bottoms/ChinoPants" element = {<DetailsPage item={items[11]}/>}/>

        <Route path="/Dresses" element = {<ShopCategories category={"Dresses"} categories={items.filter((value)=>{return value.category.includes("Dresses");})}/>} />
        <Route path="/Dresses/SummerDress" element = {<DetailsPage item={items[4]}/>}/>

        <Route path="/Skirts" element = {<ShopCategories category={"Skirts"} categories={items.filter((value)=>{return value.category.includes("Skirts");})}/>} />
        <Route path="/Skirts/MaxiSkirt" element = {<DetailsPage item={items[9]}/>}/> 
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
