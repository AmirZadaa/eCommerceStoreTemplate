import { MapPin, Phone, Mail } from "lucide-react";

import {
  fashion1,
  fashion2,
  fashion3,
  fashion4,
  fashion5,
  fashion6,
  fashion6_1,
  fashion6_2,
  fashion6_3,
  fish1,
  fish2,
  longboard,
  shortboard,
  gun,
  cart1,
  cart2,
  cart3,
  cart4,
} from "./image/index";
export const products = [
  {
    id: 1,
    brand_name: "Glamour Gaze",
    title: "Mini dress (brown)",
    img_url: fashion1,
    // img_variant: [,fashion2,fashion3,fashion4,fashion5,fashion6],
    price: 15.5,
    discount: 0.1,
    colors: ["#0000FF", "#FF0000", "#008000"],
    badge: "Trending",
    rating: 0,
  },
  {
    id: 2,
    brand_name: "Urban Chic",
    title: "Tan cargo shorts",
    img_url: fashion2,
    price: 100,
    discount: 0.3,
    colors: ["#FFFF00", "#FFA500", "#800080"],
    badge: "",
    rating: 1,
  },
  {
    id: 3,
    brand_name: "Glamour Gaze",
    title: "Chic Mini Dress",
    img_url: fashion3,
    price: 19.5,
    discount: 0.25,
    colors: ["#FFFF00", "#FFA500", "#800080"],
    badge: "sale",
    rating: 0,
  },
  {
    id: 4,
    brand_name: "Glamour Gaze",
    title: "Boyfriends Shorts",
    img_url: fashion4,
    price: 23.4,
    discount: 0.2,
    colors: ["#FFFF00", "#FFA500", "#800080"],
    badge: "",
    rating: 1,
  },
  {
    id: 5,
    brand_name: "Couture Edge",
    title: "Cozy Sky Hoodei",
    img_url: fashion5,
    price: 23.7,
    discount: 0.2,
    colors: ["#FFFF00", "#FFA500", "#800080"],
    badge: "sale",
    rating: 0,
  },
  {
    id: 6,
    brand_name: "VogueVista",
    title: "Cami Tank Top (blue)",
    img_url: fashion6,
    img_variant: [fashion6_1, fashion6_2, fashion6_3],
    price: 30.5,
    discount: 0.6,
    colors: ["#0000FF", "#FFA500", "#800080"],
    badge: "",
    rating: 1,
  },
];

export const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/product-listing",
  },
  {
    name: "About",
    link: "/#",
  },
  {
    name: "Services",
    link: "/#",
  },
  {
    name: "Contact",
    link: "/#",
  },
];

export const categories = [
  {
    title: "Fish/ Hybrid",
    img_url: fish1,
  },
  {
    title: "Soft-Top/ Foam",
    img_url: fish2,
  },
  {
    title: "Funboard",
    img_url: shortboard,
  },
  {
    title: "Longtboard",
    img_url: longboard,
  },
  {
    title: "Performance",
    img_url: gun,
  },
];

export const collection1 = [
  {
    id: 1,
    title: "Our Top Surfing Boards",
    slug: "our-top-surfing-boards",
    tag: "New Product",
    products: [
      {
        id: 1,
        title: "Twin Blossom Surfboard",
        img_url: cart1,
        qty: 1,
        price: 100,
        discount: 0.2,
      },
      {
        id: 2,
        title: "Seedling Surfboard",
        img_url: cart2,
        qty: 1,
        price: 100,
        discount: 0.4,
      },
      {
        id: 3,
        title: "Benjara Wood SurfBoard",
        img_url: cart3,
        qty: 1,
        price: 100,
        discount: 0.4,
      },
      {
        id: 4,
        title: "NSP Softie Surfboard",
        img_url: cart4,
        qty: 1,
        price: 100,
        discount: 0.5,
      },
    ],
  },
];

export const collection2 = [
  {
    id: 1,
    title: "Our Top Surfing Boards",
    slug: "our-top-surfing-boards",
    tag: "New",
    categories: ["FISH/HYBRID", "FUNBOARD", "LONGBOARD"],
    products: [
      {
        id: 1,
        title: "Twin Blossom Surfboard",
        img_url: cart1,
        qty: 1,
        price: 100,
        discount: 0.2,
      },
      {
        id: 2,
        title: "Seedling Surfboard",
        img_url: cart2,
        qty: 1,
        price: 100,
        discount: 0.4,
      },
      {
        id: 3,
        title: "Benjara Wood SurfBoard",
        img_url: cart3,
        qty: 1,
        price: 100,
        discount: 0.4,
      },
      {
        id: 4,
        title: "NSP Softie Surfboard",
        img_url: cart4,
        qty: 1,
        price: 100,
        discount: 0.5,
      },
    ],
  },
];
export const footerLinks = [
  {
    title: "Categories",
    links: [
      {
        name: "Baby Essentials",
        link: "#",
      },
      {
        name: "Bag Emporium",
        link: "#",
      },
      {
        name: "Books",
        link: "/#",
      },
      {
        name: "Christmas",
        link: "/#",
      },
    ],
  },
  {
    title: "Useful Links",
    links: [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "Collections",
        link: "#",
      },
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Blog",
        link: "/#",
      },
      {
        name: "Offers",
        link: "/#",
      },
    ],
  },
  {
    title: "Help Center",
    links: [
      {
        name: "My Account",
        link: "#",
      },
      {
        name: "My Orders",
        link: "#",
      },
      {
        name: "Contact Us",
        link: "#",
      },
      {
        name: "Wishlist",
        link: "#",
      },
    ],
  },
  {
    title: "Store Information",
    links: [
      {
        name: "This stor  Demo Store, Demo Store pakistan 345-659",
        icon: MapPin,
        link: "#",
      },
      {
        name: "Call 03443318545",
        icon: Phone,
        link: "#",
      },
      {
        name: "zadaa3322@gmail.com",
        icon: Mail,
        link: "#",
      },
    ],
  },
];
