import "../csspagas/Home.css"
import Slaider from './Slaider'
import Product from './Product'
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Search from './Search'
import cooler from "../Categories_images/cooler-2.jpeg"
import fen from "../Categories_images/fen-10.jpeg"
import headPhone from "../Categories_images/h-1.jpg"
import Lcd from "../Categories_images/lcd-5.jpeg"
import press from "../Categories_images/press-10.jpeg"
import speaker from "../Categories_images/speaker4.jpeg"
import washing from "../Categories_images/washing3.jpeg"


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
    <Slaider/>
      <div className="button-main-div">

        <div className="categories-container">
  <div><button className="categories-heading">C</button></div>
  <div><button className="categories-all" onClick={() => filterAll("All")}>All</button></div>
  
  <div> 
    <button className="button-image button-text" onClick={() => filterWashing("washing")}>
      <img src={washing}/>
    </button>
  </div>

  <div> 
    <button className="button-image button-text" onClick={() => filterSpeaker("speaker")}>
      <img src={speaker} alt="Speaker" />
    </button>
  </div>

  <div> 
    <button className="button-image button-text" onClick={() => filterheadPhone("headphone")}>
      <img src={headPhone} alt="Headphone" />
    </button>
  </div>

  <div> 
    <button className="button-image button-text" onClick={() => filterlcd("lcd")}>
      <img src={Lcd} />
      
    </button>
  </div>

  <div> 
    <button className="button-image button-text" onClick={() => filtercooler("cooler")}>
      <img src={cooler} alt="Cooler" />
    </button>
  </div>

  <div> 
    <button className="button-image button-text" onClick={() => filterfen("fen")}>
      <img src={fen} alt="Fan" />
      
    </button>
  </div>

  <div> 
    <button className="button-image button-text" onClick={() => filterpress("press")}>
      <img src={press} alt="Press" />
    </button>
  </div>
</div>

      </div>
      <div className=' div-n-1'>
        {
          listAllDAta.map(productTemp => {
            let returnedProduct = ""
            switch(category)
            {
              case ("all"):
              {
                returnedProduct =  <Product
                key={productTemp.id}
                category={productTemp.category}
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
                  category={productTemp.category}

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
    </div>
  )
}

export default Home



