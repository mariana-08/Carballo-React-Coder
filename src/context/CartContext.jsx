import { createContext, useState} from "react";
export const CartContext = createContext({})

//creamos un provider para el carrito
export const CartProvider = ({ children }) => {
    //creamos un estado para el carrito
    const [cart, setCart] = useState([])

    //funciones que modifiquen el carrito
   
     //agregar un item al carrito
    const addToCart = (item, cantidad) => {
        //evaluar si el item esta en el carrito
        if(isInCart(item.id)){
                //logica para sumar cantidades
            const updateCart = cart.map((prod) => {
                if(prod.id === item.id){
                    //sumar cantidades
                   return {...prod, quantity: prod.quantity + cantidad}
                }else{
                    return prod
                }
            })
            //actualizar el estado con el nuevo array
            setCart(updateCart)
        }else{
            //sumar un nuevo item al carrito
            setCart ([...cart, {...item, quantity:cantidad}]) 
        }        
    }
    
      //funcion para vaciar el carrito
    const clear = () => {
        setCart([])
    }
      //funcion para eliminar un item del carrito
    const removeItem = (id) => {
        setCart (cart.filter((prod) => prod.id !== id))
    }
      //funcion para, si ver esta en el carrito
    const isInCart =(id) =>{
        return cart.some((prod) => prod.id === id)
    }    
        //funcion total de productos en el carrito (carWidget)
    const totalProducts = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)        
    }
        //funcion total a pagar (cartview/ Checkout)
    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0)        
    }       
        
    return (
        <CartContext.Provider value={{cart,addToCart,clear,removeItem,cartTotal, totalProducts }}>
            {children}
        </CartContext.Provider>
    )
}