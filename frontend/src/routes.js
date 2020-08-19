import React from "react";
import {Route} from "react-router-dom";
import Home from "./component/home";  
import About from "./component/about";
import ProductDetails from "./component/product_details";
import Shop from "./component/shop";
import Cart from "./component/cart";
import Checkout from "./component/checkout";
import MyProfile from "./component/myprofile";
import MyAddress from "./component/myaddress";
import Wishlist from "./component/wishlist";

export const routes = [
    {
      path : '/wishlist',
      component : Wishlist
    },
    {
      path : '/address',
      component : MyAddress
    },
    {
      path : '/profile',
      component : MyProfile
    },
    {
      path : '/checkout',
      component : Checkout
    },
    {
      path : '/cart',
      component : Cart
    },
    {
      path : '/shop',
      component : Shop
    },
    {
      path : '/product/:name',
      component : ProductDetails
    },
    {
        path : '/home',
        component : Home
    },
    {
        path : '/about',
        component : About
    },
    {
        path : '/',
        component : Home
    }
 ];


export function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
}
