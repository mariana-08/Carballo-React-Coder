import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
const CartWidgetReactIcons = () => {
    return(
        <div>
            <BsCart4 fontSize={'2rem'}/>
            <Badge bg="danger">  1
            </Badge>
        </div>
    )
}

export default CartWidgetReactIcons