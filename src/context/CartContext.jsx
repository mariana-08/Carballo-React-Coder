import { createContext, useState} from "react";

//creamos un contexto para el carrito
export const CartContext = createContext({})

//creamos un provider para el carrito
export const CartProvider = ({ children }) => {
    //creamos un estado para el carrito
    const [cart, setCart] = useState([])

    //funciones que modifiquen el carrito
   
     //agregar un item al carrito
    const addToCart = (item, cantidad) => {
        //sumar un nuevo item al carrito
        setCart ([...cart, {...item, quantity:cantidad}]) 
    }
      //funcion para vaciar el carrito
    const clear = () => {
        setCart([])
    }
      //funcion para eliminar un item del carrito
    const removeItem = (id) => {
        setCart (cart.filter((prod) => prod.id !== id))
    }
      //funcion para, si esta en el carrito
    const isInCart =(id) =>{
        return cart.some((prod) => prod.id === id)
    }
    
    return (
        <CartContext.Provider value={{cart,addToCart,clear,removeItem,}}>
            {children}
        </CartContext.Provider>
    )
}