import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetReactIcons = () => {
    const {totalProducts} = useContext (CartContext)  
    return(
        <div>
            <BsCart4 color='#fff' fontSize={'2rem'}  />
            <Badge bg='' style={{backgroundColor:'#780A2F'}}>  
            {totalProducts()} 
            </Badge>           
        </div>
    )
}

export default CartWidgetReactIcons