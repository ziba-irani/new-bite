import { Button, Image, Typography } from "antd";
import { useDataModel } from "../../models";
import { howUseData } from "../../data";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import React from "react";

export default function HowToUse() {
  const navigate = useNavigate();
  return (
    <div className="px-10 bg-bgColor mt-10 pb-5">
      <Typography
        children="How to Use"
        typeof="h2"
        className="text-center font-Lora text-5xl font-bold py-8"
      />
      <div className="grid md:grid-cols-3 gap-5 grid-col-1 px-10">
        {howUseData.map((item: useDataModel) => (
          <div className="col-span-1" key={item.id}>
            <div className="flex-col">
              <Image alt={item.title} src={item.image} />
              <div className="flex py-4 justify-between items-start">
                <div className="text-left  my-1">
                  <Typography
                    children={item.id}
                    typeof="p"
                    className="text-center px-2 border border-black rounded-full w-6 h-6 flex items-center justify-center"
                  />
                </div>
                <div className="flex flex-col text-center">
                  <div className="text-left">
                    <Typography
                      children={item.title}
                      typeof="p"
                      className="lg:text-2xl text-lg px-1"
                    />
                    <Typography children={item.text} typeof="p" />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-8 items-center">
        <Button
          variant="solid"
          className="text-center py-5 hover:bg-blue-400 hover:text-black md:w-1/3 w-4/5 bg-black text-white rounded-none "
          onClick={() => navigate("/collection/all")}
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}
