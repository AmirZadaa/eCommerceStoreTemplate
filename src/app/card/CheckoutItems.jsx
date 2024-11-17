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
      const tableHeaders = ["Image", "Product Name", "Price", "Quantity", "Total", "Action"];
  return (
    <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            {tableHeaders.map((header, index) => (
              <TableHead 
                key={index} 
                  className={`p-4 font-bold text-lg  ${
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
            <TableRow key={index} className="border-b">
              <TableCell className="p-4 w-1/6">
                <Image src={product.image} alt={product.product_name} width={80} height={80} className="object-cover" />
              </TableCell>
              <TableCell className="p-4 w-1/4">{product.product_name}</TableCell>
              <TableCell className="p-4 w-1/6">{product.price}</TableCell>
              <TableCell className="p-4 w-1/6">
                <div className='flex justify-between items-center w w-24 rounded'>
                  <button className="px-2 py-1 text-xl font-light">-</button>
                  <span className="font-medium">{product.quantity}</span>
                  <button className="px-2 py-1 text-xl font-light">+</button>
                </div>
              </TableCell>
              <TableCell className="p-4 w-1/6">{product.total}</TableCell>
              <TableCell className="p-4 w-1/12">
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="p-4 font-bold text-right">Total</TableCell>
            <TableCell className="p-4 font-bold">$325.00</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
  )
}
