import { NavLink } from "react-router-dom";


const Product = (props) =>
{
    // to="/productdescription" state={{title:props.title}} 
    return <div className="md">

  
        <NavLink to="/productdescription" state={{
            from: 
            {
                title : props.title,
                image : props.image,
                price : props.price,
                delivery : props.delivery
            },
        }}
           className='t-d-n'>
            
          <div className='washing-cart-1'>
            <div >
            {/* className={props.image} */}
                <img src={require("../"+props.image)}></img>
            </div>

            <div className='p-discription-1'><p style={{fontSize:"15px"}}>{props.title}</p>
          
            <h4><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
            </svg> <span>{props.price}</span></h4>
            <p>{props.delivery}</p>
            </div>
</div>
            </div></NavLink>
    </div>
   
}

export default Product;