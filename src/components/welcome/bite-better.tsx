import CustomeCard from "../../../customeComponents/custome-card";
import { CardModel } from "../../models";
import { FaHandSparkles } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsSuitcase } from "react-icons/bs";
import { LuEarth } from "react-icons/lu";
import { FaBacteria } from "react-icons/fa";
import { Typography } from "antd";
import BiteBG from "../../assets/bite.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BiteBetter() {
  const navigate = useNavigate();

  const dataLeft: CardModel[] = [
    {
      id: 1,
      title: "PERFECTLY PORTIONED",
      text: "Stop wasting money by using more toothpaste than you need",
      icon: <FaHandSparkles size={40} color="#000" />,
    },
    {
      id: 2,
      title: "Better-for-You Formulations",
      text: "A dry tablet means we can use less-harmful ingredients and still protect your teeth.",
      icon: <BsMoonStars size={40} color="#000" />,
    },
    {
      id: 3,
      title: "Sink-Friendly",
      text: "Our tablets leave less mess in your sink because no glycerine – what makes most toothpaste, paste – means no sticky goop.",
      icon: <RiShoppingCart2Line size={40} color="#000" />,
    },
  ];
  const dataRight: CardModel[] = [
    {
      id: 1,
      title: "Suitcase-Safe",
      text: "No more toothpaste explosions in your bag. Just throw a few Bits in your pack and you’re good to go",
      icon: <BsSuitcase size={40} color="#000" />,
    },
    {
      id: 2,
      title: "Earth-Friendly",
      text: "Infinitely refillable with no plastic toothpaste tubes, our Bits are better for our earth and oceans.",
      icon: <LuEarth size={40} color="#000" />,
    },
    {
      id: 3,
      title: "Stops the spread of Bacteria",
      text: "The top of a toothpaste tube can transfer bacteria from your partners brush to your mouth. Our Bits can stop the spread.",
      icon: <FaBacteria size={40} color="#000" />,
    },
  ];
  return (
    <div className="mt-20 mb-10 bg-bgColor px-8 overflow-x-hidden">
      <Typography
        children="WHY BITS ARE BETTER"
        typeof="h1"
        className="font-Lora text-center underline text-5xl font-semibold py-10 cursor-pointer"
        onClick={() => navigate("/collection/all")}
      />
      <div className="grid grid-cols-6 gap-5 w-full h-full relative">
        <div
          className="w-full h-full absolute top-0 left-0 md:flex hidden"
          style={{
            backgroundImage: `url(${BiteBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="md:hidden col-span-6 w-full h-[300px]"
          style={{
            backgroundImage: `url(${BiteBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "tween", duration: "3" }}
          className="md:col-span-2 col-span-3 flex-col items-center justify-center z-40"
        >
          <div className="w-full mx-auto  flex-col p-5 items-center justify-center content-center">
            {dataLeft.map((item) => (
              <CustomeCard
                icon={item.icon}
                title={item.title}
                text={item.text}
                key={item.id}
              />
            ))}
          </div>
        </motion.div>
        <div className="md:col-span-2 md:flex hidden"></div>

        <motion.div
          initial={{ x: +200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "tween", duration: "3" }}
          className="md:col-span-2 col-span-3 z-40"
        >
          <div className="w-full flex-col p-5 items-center justify-center content-center">
            {dataRight.map((item) => (
              <CustomeCard
                icon={item.icon}
                title={item.title}
                text={item.text}
                key={item.id}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
