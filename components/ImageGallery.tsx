"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid lg:grid-cols-5">
      <div className="">
        <div className="order-last flex gap-2 lg:order-none lg:flex-col h-[70%] w-[50%]">
          {images.map((image: any, idx: any) => (
            <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={urlFor(image).url()}
                width={200}
                height={200}
                alt="photo"
                className="h-full w-full object-cover object-center cursor-pointer"
                onMouseEnter={() => handleSmallImageClick(image)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 -ml-10">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
