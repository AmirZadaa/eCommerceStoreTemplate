import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from 'next/image'
import { products } from '@/data/data'
export function CarouselPage() {
    return (
      <Carousel className="">
        <CarouselContent>
          {products[5].img_variant.map((img,index)=> (
            <CarouselItem key={index}>
              <div className="w-full aspect-[6/7] relative">
                    <Image 
                        fill 
                        src={img} 
                        alt={`fashion ${index}`} 
                        className='object-cover'
                        priority
                        sizes="(max-width: 	640px) 98vw, (max-width: 768px) 480px,(max-width: 1024px) 608px, 304px"
                    />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious  className="-left-4 w-8 h-8"/>
        <CarouselNext className="-right-4  w-8 h-8" />
      </Carousel>
    )
  }