import React from "react";
import {EmptyCartImg,fashion1, fashion2, fashion3, fashion4 } from "@/data/image";
import EmptyCart from "./EmptyCart";
import CheckoutItems from "./CheckoutItems";
export default function Page() {
  const Items = [
    {
      image: fashion1,
      product_name: "Chic Crop Top (Brown)",
      price: "$45",
      quantity: 1,
      total: "$45",
    },
    {
      image: fashion2,
      product_name: "Elegant Blouse (White)",
      price: "$55",
      quantity: 2,
      total: "$110",
    },
    {
      image: fashion3,
      product_name: "Stylish Jeans (Blue)",
      price: "$65",
      quantity: 1,
      total: "$65",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      {Items.length > 0 ?(
        <CheckoutItems  Items={Items}/>
      ):
      <EmptyCart EmptyCartImg={EmptyCartImg}/>}
    </div>
  );
}
