import Home from "../pages/home/home"
import Cart from "../pages/cart/cart"
import Pay from "../pages/pay/Pay"
export const publicRouter = [
    {path: '/', component: Home},
    {path: '/cart', component: Cart},
    {path: '/pay', component: Pay},

]

export const privateRouter = []

