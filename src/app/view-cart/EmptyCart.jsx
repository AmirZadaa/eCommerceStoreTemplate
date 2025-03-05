import Image from "next/image";

export default function EmptyCart({EmptyCartImg}) {
  return (
    <div className="bg-secondary p-4">
      <div className="w-96 aspect-[1.156] mx-auto">
        <Image
          src = {EmptyCartImg}
          alt = "empty itemes"
          className = "mx-auto "
          priority
          sizes = "338px"
        />
      </div>
      <h1 className="text-center text-2xl font-bold mt-6">No Items Added</h1>
      <p className="text-center text-foreground mt-6 ">
        It appears that nothing has been added to your cart. Explore categories
        if you want to.
      </p>
    </div>
  );
}
