import React from "react";
import { Hero } from "./_sections/Hero";
import Categories from "./_sections/Categories";
import TopSeller from "./_sections/TopSeller";
import Promotion from "./_sections/Promotion";
import NewProducts from "./_sections/NewProducts";
import Footer from "./_sections/Footer";
export default function page() {
  return (
    <main className="container mx-auto mb-10">
      <Hero />
      <Categories />
      <TopSeller />
      <Promotion />
      <NewProducts />
    </main>
  );
}

