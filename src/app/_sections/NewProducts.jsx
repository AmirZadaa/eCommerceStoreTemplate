import React from "react";
import { collection2 } from "@/assets/data";
import Cart from "./Cart";
export default function NewProducts() {
  return (
    <div className="mt-10 py-10 px-10 bg-primary-100">
      {collection2.map((collection, index) => (
        <div key={index}>
          <div className="text-primary text-center text-lg">
            {collection.tag}
          </div>
          <h1 className="text-4xl text-center line font-bold max-md:text-lg  ">
            {collection.title}
          </h1>
          <div className="flex max-lg:flex-col justify-center items-center mt-4 gap-4 text-lg max-md:text-md font-semibold">
            {collection.categories.map((category, index) => (
              <div className="" key={index}>
                {category}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4  mx-auto mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
            {collection.products.map((product, index) => (
              <Cart key={index} {...product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
