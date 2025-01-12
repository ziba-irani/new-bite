import { Typography } from "antd";
import { BsBag } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import BagItem from "../../../customeComponents/bagItems/index";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openBag, setOpenBag] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();
  const handleShowAllProductios = () => {
    navigate("/collection/all");
    setOpenMenu(false);
  };
  const handleShowAboutPage = () => {
    navigate("/about");
    setOpenMenu(false);
  };
  const handleShowImpactPage = () => {
    navigate("/impact");
    setOpenMenu(false);
  };
  const handleNavigationWelcome = () => {
    navigate("/");
    setOpenMenu(false);
  };
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.count * item.price;
    });
    setTotal(total);
  }, [products]);

  return (
    <>
      <div className="sticky z-50 top-0 ">
        <div className="w-full  bg-greenColor py-1 text-center ">
          <div className="flex  items-center gap-1 justify-center ">
            <Typography
              children="FREE"
              className="font-bold italic"
              typeof="p"
            />
            <Typography
              children=" WELCOME KIT ON ALL ORDERS $45+"
              className="font-medium"
              typeof="p"
            />
          </div>
        </div>
        <div className=" bg-white px-10 flex items-center justify-between border-y border-black">
          <Typography
            children="Bite"
            className="text-5xl py-3 font-bold font-Lora cursor-pointer"
            typeof="h1"
            onClick={() => navigate("/")}
          />
          <div className="md:flex items-center gap-5 hidden">
            <Typography
              children="SHOP"
              className="text-xs py-3 text-gray-700 hover:text-sm hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowAllProductios}
            />
            <Typography
              children="ABOUT"
              className="text-xs py-3 text-gray-700  hover:text-sm hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowAboutPage}
            />
            <Typography
              children="OUR IMPACT"
              className="text-xs py-3 text-gray-700  hover:text-sm hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowImpactPage}
            />
          </div>
          <div className="flex py-3 gap-5 items-center">
            <CgMenu
              size={25}
              color="#000"
              className="flex md:hidden cursor-pointer"
              onClick={() => setOpenMenu((prev) => !prev)}
            />
            <div
              className="relative"
              onClick={() => {
                setOpenBag(!openBag);
              }}
            >
              <BsBag size={25} color="#000" className=" cursor-pointer" />
              {products.length > 0 && (
                <div className="w-2 h-2 p-[6px] rounded-full absolute -left-1 -bottom-1 bg-primary-100"></div>
              )}
            </div>
            <HiOutlineUser size={25} color="#000" className=" cursor-pointer" />
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="fixed inset-0 bg-greenColor z-50 py-14 px-10">
          <div
            className="flex justify-end items-center cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            <IoIosCloseCircleOutline size={28} className="text-gray-600" />
          </div>
          <div className="flex-col items-center gap-5">
            <Typography
              children="WELCOME PAGE"
              className="text-lg font-medium py-3 text-black  hover:text-xl hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleNavigationWelcome}
            />
            <Typography
              children="SHOP"
              className="text-lg font-medium py-3 text-black  hover:text-xl hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowAllProductios}
            />
            <Typography
              children="ABOUT"
              className="text-lg font-medium py-3 text-black  hover:text-xl hover:font-medium cursor-pointer"
              typeof="p"
            />
            <Typography
              children="OUR IMPACT"
              className="text-lg font-medium py-3 text-black  hover:text-xl hover:font-medium cursor-pointer"
              typeof="p"
            />
          </div>
        </div>
      )}
      {openBag && (
        <div className="fixed top-0 right-0 bottom-0 bg-white z-50 py-5 overflow-y-scroll">
          <div
            className="flex justify-between items-center cursor-pointer p-5 border-b-[1px] border-black"
            onClick={() => setOpenBag(false)}
          >
            <Typography
              children="YOUR BAG"
              typeof="p"
              className="text-sm px-5"
            />
            <AiOutlineCloseSquare size={36} className="text-gray-600" />
          </div>
          {total > 45 && (
            <Typography
              children="🎉Congrats! You've Unlocked FREE SHIPPING"
              typeof="p"
              className="px-5 pt-2 py-5 border-b-2 border-black"
            />
          )}
          <div className="flex-col items-center gap-5 w-[500px] h-[80px]  divide-y-2 divide-black">
            {products.map((item) => (
              <BagItem item={item} key={item.id}/>
            ))}
            <div className="w-full flex items-center justify-between px-5 bg-greenColor ">
              <Typography
                children="CHECKOUT:"
                typeof="p"
                className="text-sm font-semibold"
              />
              <Typography
                children={`${total}$`}
                className="text-lg  font-medium py-3 text-black"
                typeof="p"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
