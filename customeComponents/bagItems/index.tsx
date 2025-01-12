import { Image, Typography } from "antd";
import { IProductsModel } from "../../src/models";
import { useDispatch } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeProduct,
} from "../../src/store/productSlice";
//@ts-ignore
import React from "react";
interface IProps {
  item: IProductsModel;
}
export default function BagItem({ item }: IProps) {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increaseCount(item));
  };
  const handleDecrease = () => {
    dispatch(decreaseCount(item));
  };
  const handleRemove = () => {
    dispatch(removeProduct(item));
  };
  return (
    <div className="flex w-full bg-bgColor px-10 py-5 ">
      <Image
        src={item.image}
        style={{ width: "100px", height: "100px" }}
        alt={item.title}
      />
      <div className="flex flex-col px-5">
        <Typography
          children={item.title}
          typeof="p"
          className="px-4 text-xl font-medium font-Lora"
        />
        <div className="flex">
          <div className="flex border-2 bg-white items-center justify-center">
            <Typography
              className="px-5 cursor-pointer flex items-center justify-center h-full"
              onClick={() => handleDecrease()}
            >
              -
            </Typography>
            <Typography
              children={item.count}
              typeof="p"
              className="px-6 text-center font-medium  flex items-center justify-center"
            />
            <Typography
              className="px-5 cursor-pointer flex items-center justify-center h-full"
              onClick={() => handleIncrease()}
            >
              +
            </Typography>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <Typography
            children="remove"
            typeof="p"
            className="font-medium py-5 cursor-pointer"
            onClick={handleRemove}
          />
          <Typography
            children={`${item.price}$`}
            typeof="p"
            className=" font-medium"
          />
        </div>
      </div>
    </div>
  );
}
