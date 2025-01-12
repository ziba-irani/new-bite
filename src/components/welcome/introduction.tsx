import { Button, Typography } from "antd";
import headerBG from "../../assets/headerBG.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import React from "react";

export default function Introduction() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${headerBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-2 ">
        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "tween", duration: 2 }}
          className="md:col-span-1 col-span-2 h-screen flex flex-col items-center justify-center mx-auto"
        >
          <Typography
            children="It's time to brush better."
            typeof="h2"
            className="text-white text-center font-Lora md:text-6xl text-5xl font-medium w-2/3"
          />
          <Typography
            children="Clean up your routine with Toothpaste Bits. No plastic, no harsh chemicals – just a better way to brush your teeth."
            typeof="p"
            className="text-white py-3 text-center font-semibold text-base w-1/2"
          />
          <Button
            className="bg-black my-5 w-1/2 py-2 text-white text-xs rounded-none"
            onClick={() => navigate("/collection/all")}
          >
            SHOP NOW
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
