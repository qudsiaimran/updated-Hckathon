"use client";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";



let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
export default function Products() {
  
 const products = useSelector ((state:any)=>state.product)



  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center">
        NEW ARRIVALS
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {products.map((item:any,i:any) => {
          return (
            <div key={item.id}>
              <Link href={`/Arrivals/${item.id}`}>
                <div className="w-[300px] h-[290px] bg-white rounded-[20px]">
                  <Image
                    src={item.img_url}
                    alt={item.title}
                    className="w-full h-full rounded-[20px]"
                    width={2000}
                    height={2000}
                  ></Image>
                </div>
              </Link>
              <div>
                <p className="text-lg mt-2 font-bold">{item.title}</p>
                <p className="flex text-yellow-400">{star}</p>
                <p className="font-bold mt-1">
                  {item.price}
                  <span className="text-gray-400 font-bold line-through">
                    {item.old_price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white text-center py-5 border-b-2 border-gray-400 pt-8">
          <button className="bg-white text-black border  py-2 px-6  h-14 w-44 rounded-full">
            View All
          </button>
        </div>
    </div>
  );
}
