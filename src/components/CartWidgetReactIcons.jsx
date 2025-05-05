import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetReactIcons = () => {
    const {cart} = useContext (CartContext)
    console.log (cart)
    return(
        <div>
            <BsCart4 color='#fff' fontSize={'2rem'}  />
            <Badge bg='' style={{backgroundColor:'#780A2F'}}>  1
            </Badge>
            {/* {cart.length} */}
        </div>
    )
}

export default CartWidgetReactIcons