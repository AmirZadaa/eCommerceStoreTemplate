import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutItems({Items}) {
      const tableHeaderRow = ["Image", "Product Name", "Price", "Quantity", "Total", "Action"];
  return (
    <Table className="border-[1px] border-primary-300">
        <TableHeader className="bg-secondary ">
          <TableRow className="">
            {tableHeaderRow.map((header, index) => (
              <TableHead 
                key={index} 
                  className={`p-4 font-bold text-lg ${
                  header === 'Image' ? 'w-1/6' :
                  header === 'Product Name' ? 'w-1/4' :
                  header === 'Action' ? 'w-1/12' : 'w-1/6'
                }`}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Items.map((product, index) => (
            <TableRow key={index} className="">
              <TableCell className="p-2">
                <Image 
                src={product.image} 
                alt={product.product_name}  
                sizes='90px'
                width={80}
                height={80} 
                className='object-cover'
                priority 
              />
              </TableCell>
              <TableCell className="p-4 w-1/4 text-bold text-md text-secondary-foreground font-bold ">{product.product_name}</TableCell>
              <TableCell className="p-4 w-1/6 text-md font-bold">{product.price}</TableCell>
              <TableCell className="p-4 w-1/6">
                <div className='flex justify-between items-center bg-secondary hover:bg-background w-24 '>
                  <button className="px-2 py-1 text-xl font-light">-</button>
                  <span className="font-medium">{product.quantity}</span>
                  <button className="px-2 py-1 text-xl font-light">+</button>
                </div>
              </TableCell>
              <TableCell className="p-4 w-1/6 font-bold text-md">{product.total}</TableCell>
              <TableCell className="p-4 w-1/12">
                <button className="text-red-500 hover:text-red-700" aria-label='delete'>
                  <Trash2 size={20} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="p-4 font-bold text-right text-2xl">Sub Total:</TableCell>
            <TableCell className="p-4 font-bold text-2xl">$325.00</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
  )
}
