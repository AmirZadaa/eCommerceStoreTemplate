import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img2 from "./react-logo.svg";
import img3 from "./flutter2.png";
import img from "./react.jpg";
import { Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// export default function page() {
//   return (
//     <div className="px-10">
//       <h1 className="text-2xl font-bold p-4 tracking-wider">
//         Top Trending Courses
//         <div className=" w-44 mt-1 h-1 bg-orange-400  border-black"> </div>
//       </h1>

{
  /* <div className="grid grid-cols-4 gap-36 max-sm:grid-cols-1"> */
}
{
  /* <div className="mx-4">
        <Card className="w-[300px]  hover:scale-105 mt-2 mx-auto rounded-none border-l-[6px] border-t-[2px]   border-r-[2px] border-b-[6px] border-black duration-1000">
          <CardHeader className="border-b-2 w-full aspect-[3/2] mx-auto border-black p-0 relative">
            <Image src={img3} alt="react" fill className="object-cover" />
            <span className="bg-orange-600  px-2 py-[2px] text-white absolute text-[12px] -right-4 top-1">paid</span>
          </CardHeader>
          <span className="ring-2 ring-black px-8 py-1 text-[14px] inline-block font-semibold text-white relative left-1/2 -translate-x-1/2  rounded-lg  bg-orange-400 -top-3 ">
            Mobile App
          </span>
          <CardContent className="p-0">
            <div className="space-y-2 p-4">
              <div className="font-bold line-clamp-3">
                <span className="bg-red-600 fonld-bold text-[14px] mr-2 text-white">Exclusive  </span>
                Mastering the Reactiv Native: Build a Modern and Cross Plateform
                Mobile app
              </div>

              <p className="line-clamp-3 text-[14px]">
                Professional growth is a continuous journey of acquiring new
                skills, expanding knowledge, and advancing in one’s career. It
                involves developing expertise, honing leadership abilities, and
                adapting to the ever-evolving demands of the professional
                landscape. In this essay, we will explore the concept of
                professional growth and its significance in driving success in
                the workplace. The essay is structured under five headings,
                highlighting key aspects of professional growth.
              </p>
            </div>
            <hr  className="h-[2px] bg-black "/>
            <div className="flex justify-between items-center p-4">
             <div className="flex items-center gap-2 text-[14px] "> <Clock className="inline" size={18} /><span>6 Mounth</span></div>
             <span className="text-[14px] font-semibold">Urdu</span>
            </div>
          </CardContent>
        </Card>
      </div> */
}

{
  /* card 2 */
}
{
  /* <div className="mx-4">
          <Card className="w-[300px] hover:scale-105 duration-700 mt-2 mx-auto hover:shadow-lg">
            <CardHeader>
              <Image src={img} alt="react"></Image>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold">Rs.2000</span>
                  <span className="bg-orange-400 float-end px-2 text-[14px]">
                    6 Mounth
                  </span>
                </div>

                <p className="text-[14px]">
                  Mastering the Reactiv Native: Build a Modern and Cross
                  Plateform Mobile app
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div> */
}
{
  /* // </div> */
}
{
  /* ); */
}
{
  /* } */
}

// import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold p-4 tracking-wider bg-slate-300 text-center">
        Top Trending Courses
        <div className=" w-44 mt-1 h-1 bg-orange-400  border-black mx-auto"> </div>
      </h1>
      <Carousel className="w-[90%] mx-auto mt-4 ">
        <CarouselContent className="bg-slate-300 w-[100%] p">
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 p-4">
              <Card className="w-[300px] hover:scale-105 hover:ring-2 ring-orange-600 duration-700 mt-2 mx-auto hover:shadow-lg">
                <CardHeader>
                  <Image src={img} alt="react"></Image>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold">Rs.2000</span>
                      <span className="bg-orange-400 float-end px-2 text-[14px]">
                        6 Mounth
                      </span>
                    </div>
                    <p className="text-[14px] font-semibold text-start">
                      Mastering the Reactiv Native: Build a Modern and Cross
                      Plateform Mobile app
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <hr /> */}
      <Carousel className="w-[90%] mx-auto mt-10 bg-slate-300">
        <CarouselContent className="px-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/4 flex justify-center items-center p-4">
              <Card className="w-[300px]  hover:scale-105 mt-2 mx-auto rounded-none border-l-[6px] border-t-[2px]   border-r-[2px] border-b-[6px] border-black duration-1000">
                <CardHeader className="border-b-2 w-full aspect-[3/2] mx-auto border-black p-0 relative">
                  <Image src={img3} alt="react" fill className="object-cover" />
                  <span className="bg-orange-600  px-2 py-[2px] text-white absolute text-[12px] -right-4 top-1">
                    paid
                  </span>
                </CardHeader>
                <span className="ring-2 ring-black px-8 py-1 text-[14px] inline-block font-semibold text-white relative left-1/2 -translate-x-1/2  rounded-lg  bg-orange-400 -top-3 ">
                  Mobile App
                </span>
                <CardContent className="p-0">
                  <div className="space-y-2 p-4">
                    <div className="font-bold line-clamp-3">
                      <span className="bg-red-600 fonld-bold text-[14px] mr-2 text-white">
                        Exclusive{" "}
                      </span>
                      Mastering the Reactiv Native: Build a Modern and Cross
                      Plateform Mobile app
                    </div>

                    <p className="line-clamp-3 text-[14px]">
                      Professional growth is a continuous journey of acquiring
                      new skills, expanding knowledge, and advancing in one’s
                      career. It involves developing expertise, honing
                      leadership abilities, and adapting to the ever-evolving
                      demands of the professional landscape. In this essay, we
                      will explore the concept of professional growth and its
                      significance in driving success in the workplace. The
                      essay is structured under five headings, highlighting key
                      aspects of professional growth.
                    </p>
                  </div>
                  <hr className="h-[2px] bg-black " />
                  <div className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-2 text-[14px] ">
                      <Clock className="inline" size={18} />
                      <span>6 Mounth</span>
                    </div>
                    <span className="text-[14px] font-semibold">Urdu</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
