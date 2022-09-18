import Home from "../pages/home/home";
import Cart from "../pages/cart/cart";
import Store from "../pages/store/Store";
import Pay from "../pages/pay/Pay";
import Product from "../pages/product/Product";

export const publicRouter = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/store", component: Store },
  { path: "/pay", component: Pay },
  { path: "/product", component: Product },
];

export const privateRouter = [];
