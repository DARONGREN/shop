import React from "react";
import { Order } from "../../components/hero/Order";
import { Slider } from "../../components/hero/Slider"
import { Category } from "../../components/category/Category"
import { Product } from "../../components/product/Product";
//import Medicine from "../..assets/images/Medicine.svg"

export const Home =() =>{

    return(
        <>
            <Slider />
            <Order />
            <Category />
            <Product />
        </>
    )
}