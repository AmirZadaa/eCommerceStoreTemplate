
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, Heart, RefreshCcw, ShoppingCart, Search } from "lucide-react";
import Image from "next/image";
export default function Cart({title,qty,price,img_url,discount}) {
  const discountPrice=price*(1-discount)
  return (
    <Card className="w-full relative rounded-none mx-auto mt-10 group">
      <CardHeader className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <Heart
          className="absolute right-2 top-2 text-primary"
          size={20}
        ></Heart>
        <div className="flex gap-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} size={15} className="text-orange-400" />
            ))}
        </div>
        <div>{qty} item</div>
      </CardHeader>
      <CardContent>
        <div className="w-full mx-auto aspect-[6/7] relative group flex justify-center items-center">
        <button aria-label="search" className="p-0 absolute  bg-primary transition-all flex justify-center items-center w-0 h-0  group-hover:w-8 group-hover:h-8 group-hover:p-1 rounded-full text-primary z-10  duration-1000 ">
            <Search className="text-background" size={12} />
          </button>
          <div className="w-full h-full group-hover:opacity-25 duration-1000 ">
            <Image 
            src={img_url} 
            alt={title} 
            className="object-cover"
            fill
            sizes="(max-width: 624px) 414px, (max-width: 786px) 254px,(max-width: 1024px) 318px, 175px"
           />
          </div>
        </div>
        <div className="space-x-3 py-4">
          <span>${discountPrice}</span>
          <span className="tex-secondary-foreground line-through">${price}</span>
          <span className="text-primary">{discount*100}% Off</span>
        </div>
        <hr />
      </CardContent>
      <CardFooter>
        <div className="flex justify-center items-center  mx-auto">
          <button className="">
            <ShoppingCart size={20} className="inline-block" />
            <span className="mx-1">Add to cart</span>
          </button>
          <span className="text-2xl px-2 font-light text-secondary-foreground">
            |
          </span>
          <button className="space-x-2">
            <RefreshCcw size={15} className="inline-block" />
            <span className="inline">Compare</span>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
