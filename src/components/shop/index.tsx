import { Button, Typography } from "antd";
import { productsData } from "../../products";
import { useEffect, useState } from "react";
import ProductCard from "../../../customeComponents/product-card/index";
import { useNavigate, useParams } from "react-router-dom";


export default function Shop() {
  const [categoryType, setCategoryType] = useState<string>("all");
  const navigate = useNavigate();
  const { status } = useParams();
  useEffect(() => {
    return setCategoryType(status ?? "");
  }, [status]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full py-10 bg-bgColor">
      <div className="text-center mt-32">
        <Typography
          children="Shop your plastic-free routine."
          typeof="h1"
          className="text-5xl font-semibold font-Lora"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center pt-5 pb-10 gap-3 border-b-[1px] border-black">
        <Button
          className={`px-6 py-5 rounded-none ${
            categoryType === "all" ? "bg-greenColor" : "bg-white"
          } border-black`}
          onClick={() => {
            setCategoryType("all");
            navigate("/collection/all");
          }}
        >
          ALL
        </Button>
        <Button
          className={`px-6 py-5 rounded-none  border-black ${
            categoryType === "best" ? "bg-greenColor" : "bg-white"
          }`}
          onClick={() => {
            setCategoryType("best");
            navigate("/collection/best");
          }}
        >
          BEST SELLERS
        </Button>
        <Button
          className={`px-6 py-5 rounded-none  border-black ${
            categoryType === "oral" ? "bg-greenColor" : "bg-white"
          }`}
          onClick={() => {
            setCategoryType("oral");
            navigate("/collection/oral");
          }}
        >
          ORAL CARE
        </Button>
        <Button
          className={`px-6 py-5  rounded-none  border-black ${
            categoryType === "body" ? "bg-greenColor" : "bg-white"
          }`}
          onClick={() => {
            setCategoryType("body");
            navigate("/collection/body");
          }}
        >
          BODY CARE
        </Button>
        <Button
          className={`px-6 py-5  rounded-none  border-black ${
            categoryType === "sets" ? "bg-greenColor" : "bg-white"
          }`}
          onClick={() => {
            setCategoryType("sets");
            navigate("/collection/sets");
          }}
        >
          SETS
        </Button>
        <Button
          className={`px-6 py-5  rounded-none  border-black ${
            categoryType === "subscribe" ? "bg-greenColor" : "bg-white"
          }`}
          onClick={() => {
            setCategoryType("subscribe");
            navigate("/collection/subscribe");
          }}
        >
          SUBSCRIBE & SAVE
        </Button>
        <Button
          className={`px-6 py-5 rounded-none  border-black ${
            categoryType === "holiday" ? "bg-greenColor" : "bg-white"
          }`}
          onClick={() => {
            setCategoryType("holiday");
            navigate("/collection/holiday");
          }}
        >
          HOLIDAY
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 p-5">
        {productsData.map((item) =>
          item.category.includes(categoryType) ? (
            <ProductCard image={item.image} title={item.title} id={item.id} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
