import Home from "../pages/home/home";
import Cart from "../pages/cart/cart";
import Store from "../pages/store/Store";
import Pay from "../pages/pay/Pay";
import Product from "../pages/product/Product";
import ErrorPage from "../pages/404/ErrorPage";
import LoginForm from "../pages/Auth/loginForm";

export const publicRouter = [
  { path: "/", component: Home },
  { path: "/signin", component: LoginForm },
  { path: "/cart", component: Cart },
  { path: "/store", component: Store },
  { path: "/pay", component: Pay },
  { path: "/product", component: Product },
  { path: "*", component: ErrorPage },
];

export const privateRouter = [];
