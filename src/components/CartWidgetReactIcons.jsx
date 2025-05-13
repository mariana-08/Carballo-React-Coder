import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetReactIcons = () => {
    const {totalProducts, cart} = useContext (CartContext)  
    return(
        <div>
            <BsCart4 color='#fff' fontSize={'2rem'}  />
            {cart.length > 0 && <Badge bg='' style={{backgroundColor:'#780A2F'}}>  
                {totalProducts()} 
                </Badge>}           
        </div>
    )
}

export default CartWidgetReactIcons