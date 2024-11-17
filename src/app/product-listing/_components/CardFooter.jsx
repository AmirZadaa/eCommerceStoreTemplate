import React from "react";
import { Settings } from "lucide-react";
export default function CartFooter({ discount }) {
  return (
    <div className="mt-2 overflow-hidden">
      <div className="group-hover:animate-marquee space-x-2 text-nowrap">
        {!!discount &&
          Array(2)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="inline-block w-full space-x-1">
                <Settings
                  size={20}
                  className="fill-primary rotate-180 animate-spin rounded-full inline"
                />
                <p className="inline  py-1">
                  Limited Time Offer: {discount * 100}% off
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}
