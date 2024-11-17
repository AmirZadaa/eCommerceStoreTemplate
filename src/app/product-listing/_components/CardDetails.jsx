import React from "react";
export default function CardDetails({
  brand_name,
  title,
  price,
  discount,
  colors,
}) {
  const discountedPrice = price - price * discount;
  return (
    <div className="mt-2 space-y-1 relative">
      <h1 className="font-semibold">{brand_name}</h1>
      <h2 className="text-slate-500  ">{title}</h2>
      <div className="font-bold space-x-3 ">
        ${discount ? discountedPrice : price}
        {!!discount && (
          <span className="text-secondary-foreground line-through ms-2">${price}</span>
        )}
        {!!discount && (
          <span className="text-primary">{discount * 100}% Off</span>
        )}
      </div>
      <hr />
      <div className="flex absolute right-0 top-0">
        {colors.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item }}
            className={`py-2 px-2 inline-block rounded-full  ms-1`}
          ></div>
        ))}
      </div>
    </div>
  );
}
