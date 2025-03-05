// import React from 'react'

// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// export default function PaymentMethod() {
//   return (
//     <div className='space-y-8  p-8 bg-secondary'>
//     <h1 className="text-xl font-bold">Payment Method</h1>
//     <hr />
//     <RadioGroup defaultValue="comfortable ">
//       <div className="flex items-center space-x-2 bg-background p-6">
//         <RadioGroupItem value="Jazzcash" className="" id="r1" aria-labelledby="jazzcash" />
//         <Label htmlFor="r1" className="text-xl font-bold" >Jazz Cash</Label>
//       </div>
//       <div className="flex items-center space-x-2 bg-background p-6">
//         <RadioGroupItem value="paypal" id="r2" aria-labelledby="PayPal" />
//         <Label htmlFor="r2" className="text-xl font-bold">Pay Pal</Label>
//       </div>
//       <div className="flex items-center space-x-2 bg-background p-6">
//         <RadioGroupItem value="easypaisa" id="r3" aria-labelledby="easypaisa" />
//         <Label htmlFor="r3" className="text-xl font-bold" >EasyPaisa</Label>
//       </div>
//     </RadioGroup>
//     </div>
//   )
// }


// import React from "react";

// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// export default function PaymentMethod() {
//   return (
//     <div className="space-y-8 p-8 bg-secondary">
//       <h1 className="text-xl font-bold">Payment Method</h1>
//       <hr />
//       <RadioGroup defaultValue="comfortable">
//         <div className="flex items-center space-x-2 bg-background p-6">
//           <RadioGroupItem value="Jazzcash" className="" />
//           <Label className="text-xl font-bold">Jazz Cash</Label>
//         </div>
//         <div className="flex items-center space-x-2 bg-background p-6">
//           <RadioGroupItem value="paypal" />
//           <Label className="text-xl font-bold">Pay Pal</Label>
//         </div>
//         <div className="flex items-center space-x-2 bg-background p-6">
//           <RadioGroupItem value="easypaisa" />
//           <Label className="text-xl font-bold">EasyPaisa</Label>
//         </div>
//       </RadioGroup>
//     </div>
//   );
// }
import React from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PaymentMethod() {
  return (
    <div className="space-y-8 p-8 bg-secondary">
    
      <h1 className="text-xl font-bold">Payment Method</h1>
      <hr />
      
     
      <RadioGroup defaultValue="comfortable">
        
    
        <div className="flex items-center space-x-2 bg-background p-6">
          <RadioGroupItem value="Jazzcash" aria-label="Jazz Cash" />
          
          <Label className="text-xl font-bold">Jazz Cash</Label>
        </div>
        <div className="flex items-center space-x-2 bg-background p-6">
          <RadioGroupItem value="paypal" aria-label="Pay Pal" />
          <Label className="text-xl font-bold">Pay Pal</Label>
        </div>


        <div className="flex items-center space-x-2 bg-background p-6">
          <RadioGroupItem value="easypaisa" aria-label="EasyPaisa" />
          <Label className="text-xl font-bold">EasyPaisa</Label>
        </div>

      </RadioGroup>
    </div>
  );
}
