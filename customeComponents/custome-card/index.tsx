import { Typography } from "antd";
import { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  title: string;
  text: string;
}
export default function CustomeCard({ icon, title, text }: IProps) {
  return (
    <div className="w-3/4 mx-auto py-5  my-2 flex flex-col  items-center justify-center text-center">
      <div className="text-center mx-auto  flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col items-center justify-center py-5">
        <div className="py-3 text-center">
          <Typography
            typeof="p"
            children={title}
            className=" font-medium md:text-xl text-base"
          />
        </div>
        <div className="text-center w-2/3 md:flex hidden">
          <Typography children={text} typeof="p" className="text-sm " />
        </div>
      </div>
    </div>
  );
}
