import React from "react";
import Cartdetails from "./CardDetails.jsx";
import CartFooter from "./CardFooter.jsx";
import CardImage from "./CardImage.jsx"
export default function ProductCard({products}) {
  const {brand_name,title,img_url,price,discount,colors,rating,badge} = products;
  return (
    <div className="mt-10 w-full mx-auto border-2 border-black-700 p-2 relative group">
      <CardImage  img_url={img_url} title={title}  rating={rating} badge={badge}/>
      <Cartdetails brand_name={brand_name} title={title} price={price} discount={discount} colors={colors} />
      <CartFooter discount={discount}  />
    </div>
  );
}
