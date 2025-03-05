import Products from "./_components/Products";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/product" aria-label="got product detail page"><Products/></Link>
    </div>
  );
}
