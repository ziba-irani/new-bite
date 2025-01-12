import { Typography } from "antd";
import  { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
//@ts-ignore
import React from "react";
interface IProps {
  title: string;
  text: string;
}
export default function FAQComponent({ title, text }: IProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div onClick={handleOpen} className=" border-b border-black cursor-pointer">
      <div className="flex items-center justify-between py-5">
        <Typography children={title} typeof="h1" className="text-xl" />
        {open ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {open && <div className="py-5">
        <Typography children={text} typeof="p" className="text-sm"/>
      </div>}
    </div>
  );
}
