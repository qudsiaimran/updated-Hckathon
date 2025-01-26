"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/Reviews";
import Products from "@/components/Products";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addtocart } from "@/app/Redux/Features/cartSlice";
const star = Array(5).fill(<FaStar />);

export default function Pro_Detail() {
  const products = useSelector((state: any) => state.product);
  const params = useParams();
  const id = params?.id;
  const item: any = products.find((items: any) => items.id === Number(id));

  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState({
    title: item.title,
    price: item.unitPrice,
    id: item.id,
    qty: 1,
    size: item.size?.[0] || "Medium , Small , Large",
    color: item.color || [], // Ensure color is an array
    description: item.description,

    image: [item.img1, item.img2, item.img3],
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
        {/* Left Column: Thumbnails */}
        <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
          {cartItem.image.map((img, index) => (
            <Image
              key={index} // Add a key prop here
              src={img}
              className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3"
              alt={`product-thumbnail-${index}`}
              width={2000}
              height={2000}
            />
          ))}
        </div>

        {/* Middle Column: Main Image */}
        <div className="w-[90%] order-1 sm:order-2 sm:w-[444px] h-[500px]">
          <Image
            src={cartItem.image[1]}
            className="w-full h-full"
            alt={cartItem.title}
            width={2000}
            height={2000}
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
          <h1 className="text-2xl md:text-3xl font-bold">{item.name}</h1>

          <div className="flex text-yellow-500 mt-3">{star}</div>
          <p className="font-bold text-2xl mt-4">
            {cartItem.price * cartItem.qty}
            {item.old_price && (
              <span className="line-through ml-2 text-gray-300">
                {item.old_price}
              </span>
            )}
          </p>
          <p className="mt-3">{cartItem.description}</p>
          {/* color */}
          {Array.isArray(cartItem.color) && cartItem.color.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {cartItem.color.map((color, index) => (
                <button
                  key={index}
                  className={`w-[37px] h-[37px] rounded-full border-2 mt-6 ${
                    cartItem.color.includes(color)
                      ? "border-black"
                      : "border-transparent"
                  } hover:border-black focus:border-black`}
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      color: [color], // Set the color directly without filtering
                    })
                  }
                  aria-label={`Select color ${color}`}
                  title={`Select color ${color}`}
                ></button>
              ))}
            </div>
          ) : (
            <p className="text-red-500">
              No colors available. Please check back later or choose a different
              item.
            </p>
          )}

          {/* select size */}

          {Array.isArray(cartItem.size) && cartItem.size.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {cartItem.size.map((size, index) => (
                <button
                  key={index}
                  className={`w-[95px] h-[50px] text-gray-700 bg-gray-500 flex justify-center items-center rounded-[62px] ${
                    cartItem.size === size ? "bg-black text-white" : ""
                  } hover:bg-black hover:text-white`}
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      size, // Set the selected size
                    })
                  }
                  aria-label={`Select size ${size}`}
                  title={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-red-500 mt-4">
              No sizes available. Please check back later or choose a different
              item.
            </p>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            {/* Quantity Control */}
            <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
              <button
                className="w-4 h-4 flex items-center justify-center text-gray-600 hover:text-black"
                onClick={() => {
                  if (cartItem.qty > 0) {
                    setCartItem({ ...cartItem, qty: cartItem.qty - 1 });
                  }
                }}
              >
                <Minus />
              </button>
              <span className="mx-4 text-lg font-medium">{cartItem.qty}</span>
              <button
                className="w-4 h-4 flex items-center justify-center text-gray-600 hover:text-black"
                onClick={() =>
                  setCartItem({ ...cartItem, qty: cartItem.qty + 1 })
                }
              >
                <Plus />
              </button>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={() => dispatch(addtocart({ cartItem }))}
              className="bg-black text-white w-full sm:w-[400px] px-6 py-3 rounded-full text-lg font-semibold"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <Reviews />
      <Products />
    </>
  );
}
