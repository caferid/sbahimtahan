import { createContext, useContext } from "react";
import useLocalStroge from "../hook/useLocalStroge";


export const basketContext = createContext()


export function BasketProvider({ children }) {
    const [basket, setbasket] = useLocalStroge("basket")
    function handelbasket(item) {
        console.log("ok");
        const index = basket.findIndex((x) => x._id === item._id)
        if (index === -1) {
            item.count=1
            setbasket([...basket, item])
            return
        }
        basket[index].count++
        setbasket([...basket])

    }
    function artir(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        basket[index].count++
        setbasket([...basket])
    }
    function azalt(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        basket[index].count--
        setbasket([...basket])
        if (basket[index].count < 1) {
            setbasket(basket.filter(x => x._id !== item._id))
        }
    }
    function basketdelete(item) {
        setbasket(basket.filter(x => x._id !== item._id))
    }

    const data = { basket, setbasket, handelbasket, basketdelete, azalt, artir }

    return (
        <basketContext.Provider value={data}>
            {children}
        </basketContext.Provider>
    )
}

export const useBasket = () => useContext(basketContext)