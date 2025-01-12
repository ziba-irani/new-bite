import { categoryDataModel } from "../../models";
import { Image, Typography } from "antd";

import { useNavigate } from "react-router-dom";
import { bestSellerData } from "../../data";
export default function BestSeller() {
  const navigate = useNavigate();

  return (
    <div className="px-10 bg-bgColor py-10 my-10">
      <Typography
        children="Shop Best Sellers"
        typeof="h1"
        className="text-center font-Lora text-5xl font-bold py-10 cursor-pointer"
        onClick={() => navigate("/collection/best")}
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-col-1">
        {bestSellerData.map((item: categoryDataModel) => (
          <div
            key={item.id}
            className="col-span-1 relative border border-slate-300 "
            onClick={() => navigate(item.route)}
          >
            <Image src={item.image} alt={item.title} />
            <Typography
              children={item.title}
              className={`absolute top-3 left-5 ${
                item.id === 2 ? "text-white" : "text-black"
              } text-xl font-base`}
            />
            <div className="absolute left-0 right-0 -bottom-0 w-full py-3 bg-black text-white text-center">
              SHOP NOW
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
