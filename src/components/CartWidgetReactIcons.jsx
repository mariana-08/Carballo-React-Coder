import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";

const CartWidgetReactIcons = () => {
    return(
        <div>
            <BsCart4 color='#fff' fontSize={'2rem'}  />
            <Badge bg='' style={{backgroundColor:'#780A2F'}}>  1
            </Badge>
        </div>
    )
}

export default CartWidgetReactIcons