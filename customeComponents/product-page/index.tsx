import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../src/products";
import { Button, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../src/store/productSlice";
import { toast } from "react-toastify";
import { RootState } from "../../src/store/store";
//@ts-ignore
import React from "react";
import { IProductsModel } from "../../src/models";
export default function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState<IProductsModel>();
  const selectedProducts = useSelector((state: RootState) => state.products);
  useEffect(() => {
    const selectedItem = productsData.find((item) => item.id === Number(id));
    setProduct(selectedItem);
  }, [id]);

  const handleAddToBag = () => {
    const isIncluded = selectedProducts.find((item) => item.id === product?.id);
    isIncluded !== undefined
      ? toast.warning(
          `${product?.title} has already been successfully added to your bag!`,
          {
            position: "top-left",
            autoClose: 3000,
          }
        )
      : toast.success(
          `${product?.title} has been successfully added to your bag!`,
          {
            position: "top-left",
            autoClose: 3000,
          }
        );
    //@ts-ignore
    dispatch(addProduct({ ...product, count: product?.count + 1 }));
  };
  return (
    <div className="px-10 py-5 bg-bgColor  max-h-screen">
      <div className="grid grid-cols-2 gap-5 ">
        <div className="md:col-span-1 col-span-2 flex items-center justify-center">
          <Image
            src={product?.image}
            className="flex w-full py-5 my-0"
            style={{ maxWidth: "70%", height: "50%" }}
            alt={product?.title}
          />
        </div>
        <div className="md:col-span-1 col-span-2 px-10 flex flex-col items-start justify-center">
          <h1 className="md:text-5xl text-3xl font-bold ">{product?.title}</h1>
          <p className="py-10 md:w-2/3 w-full">{product?.description}</p>
          <Button
            className="md:w-2/3 py-4 w-full bg-black text-white rounded-none"
            onClick={handleAddToBag}
          >
            ADD TO BAG <span className="px-1">|</span> {`${product?.price}$`}
          </Button>
        </div>
      </div>
    </div>
  );
}

