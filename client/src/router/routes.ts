import Home from "../pages/home/home";
import Cart from "../pages/cart/cart";
import Store from "../pages/store/Store";
export const publicRouter = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/store", component: Store },
];

export const privateRouter = [];
