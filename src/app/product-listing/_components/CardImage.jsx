import React from "react";
import { Star } from "lucide-react";
import { Heart } from "lucide-react";
import CardIcons from "./CardIcons";
import Image from "next/image";


export default function CardImage({img_url,title,badge,rating}) {
  return (
    <div className="bg-primary w-full aspect-[6/7] mx-auto relative  overflow-hidden ">
      {!!badge &&<div className="bg-black -rotate-45 absolute top-5 -left-6 text-white  w-28 text-center">
        {badge}
      </div>}
      <Image
        src={img_url}
        alt={title}
        sizes="(max-width: 640px) 520px, (max-width: 768px) 244px,(max-width: 1024px) 188px, 320px"
        className="object-cover"
        fill
        priority
      />
      <div className="bg-background px-2 py-2 text-primary absolute right-1 top-1 rounded-full">
        <Heart size={16} />
      </div>
      <CardIcons />
      <div className="bg-background px-2  text-primary absolute bottom-1 left-1 rounded-sm flex justify-center items-center">
        <Star size={15} className="fill-orange-400" />
        <span className="text-black ms-2">{rating}</span>
      </div>
    </div>
  );
}
