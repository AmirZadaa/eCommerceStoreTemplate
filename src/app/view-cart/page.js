import React from "react";
import {
  EmptyCartImg,
  fashion1,
  fashion2,
  fashion3,
  fashion4,
} from "@/assets/image";
import EmptyCart from "./EmptyCart";
import CheckoutItems from "./CheckoutItems";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";
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
    <div className="mb-10">
      {Items.length > 0 ? (
        <>
          <div className="text-center p-4 bg-secondary  space-y-4 ">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="text-md font-semibold">Home/ Cart</div>
          </div>
          <div className="container mx-auto px-20 mt-10">
            <CheckoutItems Items={Items} />
            <div className="flex justify-between max-sm:flex-col max-sm:gap-2   mt-10">
              <CustomButton title="Continue Shopping" w="w-auto"  ariaLabel="continue shopping" />
              <Link href="checkout">
                <CustomButton title="Checkout" w="w-full" ariaLabel="checkout" />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <EmptyCart EmptyCartImg={EmptyCartImg} />
      )}
    </div>
  );
}
