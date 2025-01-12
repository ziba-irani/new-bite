import { Image, Typography } from "antd";
import AboutUs from "../../assets/aboutUs.jpg";

export default function AboutBite() {
  return (
    <div className="bg-bgColor">
      <Typography
        children="From the living room to Shark Tank to now."
        typeof="p"
        className="pb-28 pt-36 md:text-6xl text-4xl font-semibold font-Lora w-1/2  mx-auto text-center "
      />
      <div className="px-10">
        <hr className="w-full h-[2px] bg-black" />
        <div className="grid grid-cols-2 ">
          <div className="md:col-span-1 col-span-2 py-10 gap-7 flex flex-col w-4/5 order-2 md:order-1">
            <Typography
              typeof="h3"
              children="As a former surf instructor, I used to spend all my time in the water."
              className="text-4xl leading-8"
            />
            <Typography
              typeof="p"
              children="So when I learned about the one billion plastic toothpaste tubes that end up in landfills and oceans every single year, I knew I couldn’t keep contributing to the problem."
              className="text-base leading-5"
            />
            <Typography
              typeof="p"
              children="In a search for something better, I could only find commercial toothpaste with questionable ingredients–in plastic packaging–so I decided to make my own. I took online chemistry courses and learned how to press toothpaste tablets for my friends and family on my living room floor."
              className="text-base leading-5"
            />
            <Typography
              typeof="p"
              children="Bite was founded on the belief that a brighter smile doesn’t need to come at the expense of our bodies or the environment. Our daily routines matter, and the small changes we make together can add up to make a big difference."
              className="text-base leading-5"
            />
            <div className="flex flex-col">
              <Typography
                typeof="p"
                children="Lindsay McCormick"
                className="text-base leading-5"
              />
              <Typography
                typeof="p"
                children="CEO & Founder"
                className="text-base leading-5"
              />
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 order-1 md:order-2">
            <Image
              src={AboutUs}
              alt="about bite"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
