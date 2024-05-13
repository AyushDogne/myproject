import "../csspagas/Home.css"
import Slaider from './Slaider'
import Product from './Product'
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Footer from "./Footer"
import Search from './Search'
import {useSelector} from 'react-redux'



const Home = () =>
{  
  
  const filterAll = () => 
  {
    setCategory("all")
  }

  const filterWashing = () => 
  {
    setCategory("washing")
  }
  const filterSpeaker = () => 
  {
      setCategory("speaker")
  }
  const filterheadPhone = () => 
  {
      setCategory("headphone")
  }
  const filterlcd = () => 
  {
   setCategory("lcd")
  }
  const filtercooler = () => 
  {
    setCategory("cooler")
  }
  const filterfen= () => 
  {
   setCategory("fen")
  }

  const filterpress = () => 
  {
   setCategory("press")
  }
  
  const [category, setCategory] = useState("all");

  const listAllDAta = useSelector(state => state.data) 

  return (
    <div>
      <Slaider />

      <div className="button-main-div">

        <div><button  className="heading-categories">C</button></div>
        <div> <button className="all-catagories button-text" onClick={() => filterAll("All")}>All</button></div>
        <div> <button className="button-image-w button-text" onClick={() => filterWashing("washing")}></button></div>
        <div> <button className="button-image-s button-text" onClick={() => filterSpeaker("speaker")}></button> </div>
        <div> <button className="button-image-h button-text" onClick={() => filterheadPhone("headphone")}></button> </div>
        <div> <button className="button-image-l button-text" onClick={() => filterlcd("lcd")}></button> </div>
        <div> <button className="button-image-c button-text" onClick={() => filtercooler("cooler")}></button> </div>
        <div> <button className="button-image-f button-text" onClick={() => filterfen("fen")}></button> </div>
        <div> <button className="button-image-p button-text" onClick={() => filterpress("press")}></button> </div>

      </div>
      <div className=' div-n-1'>
        {
          listAllDAta.map(productTemp => {
            let returnedProduct = ""
            switch(category)
            {
              case ("all"):
              {
                console.log("all case: ", productTemp.category)
                returnedProduct =  <Product
                key={productTemp.id}
                title={productTemp.title}
                image={productTemp.image}
                price={productTemp.price}
                delivery={productTemp.delivery}
              />
                break;
              }
              case ("washing"):
              {
                if(productTemp.category === "washing")
                {
                  returnedProduct =   <Product
                  key={productTemp.id}
                  title={productTemp.title}
                  image={productTemp.image}
                  price={productTemp.price}
                  delivery={productTemp.delivery}
                />
                }
                
                break;
              }
              case ("speaker"):
              {
                if(productTemp.category === "speaker")
                {
                  returnedProduct =   <Product
                  key={productTemp.id}
                  title={productTemp.title}
                  image={productTemp.image}
                  price={productTemp.price}
                  delivery={productTemp.delivery}
                />
                }
                
                break;
              }
              case ("headphone"):
              {
                if(productTemp.category === "headphone")
                {
                  returnedProduct =   <Product
                  key={productTemp.id}
                  title={productTemp.title}
                  image={productTemp.image}
                  price={productTemp.price}
                  delivery={productTemp.delivery}
                />
                }
                 break;
              }
              case ("lcd"):
              {
                if(productTemp.category === "lcd")
                {
                  returnedProduct =   <Product
                  key={productTemp.id}
                  title={productTemp.title}
                  image={productTemp.image}
                  price={productTemp.price}
                  delivery={productTemp.delivery}
                />
                }
                 break;
              }
              case ("fen"):
              {
                if(productTemp.category === "fen")
                {
                  returnedProduct =   <Product
                  key={productTemp.id}
                  title={productTemp.title}
                  image={productTemp.image}
                  price={productTemp.price}
                  delivery={productTemp.delivery}
                />
                }
                 break;
              }
              case ("cooler"):
              {
                if(productTemp.category === "cooler")
                {
                  returnedProduct =   <Product
                  key={productTemp.id}
                  title={productTemp.title}
                  image={productTemp.image}
                  price={productTemp.price}
                  delivery={productTemp.delivery}
                />
                }
                 break;
              }
              case ("press"):
              {
                if(productTemp.category === "press")
                {
                  returnedProduct =   <Product
                  key={productTemp.id}
                  title={productTemp.title}
                  image={productTemp.image}
                  price={productTemp.price}
                  delivery={productTemp.delivery}
                />
                }
                 break;
              }
              default:

            }
            return returnedProduct;
          })
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Home



