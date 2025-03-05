import Cart from "./Cart";
import { collection1 } from "@/assets/data";

export default function TopSeller() {
  return (
    <div className="mt-10 py-10 bg-primary-100 px-10 max-lg:px-2 ">
      {collection1.map((collection, index) => (
        <div key={index}>
          <div className="text-primary text-center text-lg max-md:text-md">
            {collection.tag}
          </div>
          <h1 className="text-4xl text-center line font-bold max-md:text-lg">
            {collection.title}
          </h1>
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
