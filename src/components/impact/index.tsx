import { Button, Image, Typography } from "antd";
import impact from "../../assets/impact.jpg";
//@ts-ignore
import React from "react";

export default function BiteImpact() {
  return (
    <div className="w-full bg-bgColor">
      <div className="py-10 px-20">
        <div className="grid grid-cols-2 gap-10">
          <div className="md:col-span-1  col-span-2 py-10 gap-7 flex flex-col justify-center w-4/5 order-2 md:order-1">
            <Typography
              typeof="h1"
              children="Our Impact Report"
              className="text-5xl leading-8 font-Lora"
            />
            <Typography
              typeof="p"
              children="Transparency and sustainability are at the heart of everything we do at Bite. We believe that every person deserves to know what’s in the products they use every day and how they affect the planet. We’re sharing this report with you to show how we’re making a positive impact as a company, and why it matters to you."
              className="text-base leading-8"
            />
            <Button
              children="Read The Full Report Here"
              className="bg-black text-white px-20 border rounded-md py-5 text-lg font-semibold"
            />
          </div>
          <div className="md:col-span-1 col-span-2 order-1 md:order-2 h-full w-full relative">
            <Image src={impact} alt="bite impact" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
