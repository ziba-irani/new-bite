import { Image, Typography } from "antd";

import { categoryDataModel } from "../../models";
import { useNavigate } from "react-router-dom";
import { categoryData } from "../../data";

export default function Category() {
  const navigate = useNavigate();

  return (
    <div className="p-10 bg-bgColor">
      <Typography
        children="Shop By Category"
        typeof="h2"
        className="text-center text-5xl font-bold py-10 font-Lora"
      />
      <div className="grid md:grid-cols-4 gap-4 grid-col-1">
        {categoryData.map((item: categoryDataModel) => (
          <div
            className="col-span-1 relative group"
            onClick={() => navigate(item.route)}
            key={item.id}
          >
            <Image src={item.image} alt={item.title} />
            <Typography
              children={item.title}
              className={`absolute top-3 left-5 ${
                item.id === 2 ? "text-white" : "text-black"
              } text-xl font-base`}
            />
            <div className="cursor-pointer font-medium absolute left-0 right-0 bottom-1 w-full py-3 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              SHOP NOW
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
