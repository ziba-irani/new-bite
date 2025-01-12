import { Image, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
//@ts-ignore
import React from "react";
interface IProps {
  image: string;
  title: string;
  id: number;
}
export default function ProductCard({ image, title, id }: IProps) {
  const { status } = useParams();
  const navigate = useNavigate();
  return (
    <div
      className="col-span-1  border border-slate-300 cursor-pointer"
      onClick={() => navigate(`/collection/${status}/${id}`)}
    >
      <div className="flex-col">
        <Typography
          typeof="p"
          children={title.toUpperCase()}
          className="py-3 px-5 !text-lg text-black font-bold "
        />
        <Image src={image} className="w-52 h-48" alt={title} />
        <div className="w-full py-3 bg-black text-white text-center">
          SHOP NOW
        </div>
      </div>
    </div>
  );
}
