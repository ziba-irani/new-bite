import { categoryDataModel, useDataModel } from "./models";
import bestSeller1 from "./assets/best-seller1.png";
import bestSeller2 from "./assets/best-seller2.png";
import bestSeller3 from "./assets/best-seller3.png";
import bestSeller4 from "./assets/best-seller4.png";
import category1 from "./assets/category1.jpg";
import category2 from "./assets/category2.jpg";
import category3 from "./assets/category3.jpg";
import category4 from "./assets/category4.jpg";
import use1 from "./assets/use1.webp";
import use2 from "./assets/use2.webp";
import use3 from "./assets/use3.webp";
import review1 from "./assets/review/review1.jpg";
import review2 from "./assets/review/review2.jpg";
import review3 from "./assets/review/review3.jpg";
import review4 from "./assets/review/review4.jpg";
import review5 from "./assets/review/review5.jpg";


export const bestSellerData: categoryDataModel[] = [
  {
    id: 1,
    title: "Toothpaste Bits Fluoride-Free",
    image: bestSeller1,
    route: "/collection/best/1",
  },
  {
    id: 2,
    title: "Toothpaste Bits with Fluoride",
    image: bestSeller2,
    route: "/collection/best/2",
  },
  {
    id: 3,
    title: "Deodorant Set",
    image: bestSeller3,
    route: "/collection/best/9",
  },
  {
    id: 4,
    title: "Toothpaste Bits Fluoride-Free",
    image: bestSeller4,
    route: "/collection/best/3",
  },
];
export const categoryData: categoryDataModel[] = [
  {
    id: 1,
    title: "TOOTHPASTE BITS",
    image: category1,
    route: "/collection/oral",
  },
  {
    id: 2,
    title: "ORAL CARE",
    image: category2,
    route: "/collection/oral",
  },
  {
    id: 3,
    title: "SETS",
    image: category3,
    route: "/collection/sets",
  },
  {
    id: 4,
    title: "BODY CARE",
    image: category4,
    route: "/collection/body",
  },
];
export const faqData = [
  {
    id: 1,
    title: "Are Toothpaste Bits good for sensitive teeth?",
    text: "Yes, our Bits are safe for sensitive teeth. We use Nano-hydroxyapatite in our Fluoride-Free formula, a mineral thats been proven to strengthen and remineralize enamel and help fight sensitivity.Read the nHAP Study here and read more information about it here.We also recommend talking to your dentist about Nano-hydroxyapatite or when making any changes to your oral care routine.",
  },
  {
    id: 2,
    title: "How do subscriptions work?",
    text: "With subscriptions, we send you all 4 months of Toothpaste Bits at once in our refillable glass jar for $32. Shipments after that will be sent every 4 months for $32 after your initial purchase, so you dont have to worry about running out of Bits. Those orders will come in our compostable refill pouches that are meant to be transferred into your glass jar as soon as you receive them.Our refill pouch will disintegrate in home compost within 12-16 weeks. Or if you don't have a home compost, they can be dropped in the compost bin in a number of stores—Starbucks and Whole Foods are the most common.We will send you an email reminder before your order is processed so you can cancel, postpone or even change the flavor of your upcoming Bits before they ship. You can always update the frequency or flavor of your upcoming Bits by logging into your account and making changes there.",
  },
  {
    id: 3,
    title: "Can I purchase just the refill pouches first?",
    text: "Unfortunately, we do not sell refill pouches on their own. However we do offer a 4 month subscription – it costs $32 which breaks down to only $8 per month.The Bits come in a 4oz glass jar in the first shipment and then in compostable refill pouches after that, as our tablets are sensitive to humidity and heat. We recommend transferring the refill to the jar as soon as it is delivered to keep the integrity of the Bits.Being as eco-friendly as possible is super important to us, but there are a few things that are equally important, such as the safety of our customers (and their pets!), which is why we send the first round of Bits in a glass jar with a label that has the full ingredient list, and a warning to keep away from pets. Xylitol is great for teeth, but not great for pups!We suggest using the 1oz small bottles that you already have for travel to keep extra Bits in your bag or for a guest bathroom.",
  },
  {
    id: 4,
    title: "What is the shelf life?",
    text: "With proper storage in a cool and dry place our nHap Bits have a shelf life of 2 years and our Fluoride Bits have a shelf life of 1 1/2 years from the manufacturing date (MFT).",
  },
  {
    id: 5,
    title: "How do I use Toothpaste Bits?",
    text: "Its easy:Put a perfectly portioned Bit into your mouth.Chew the Bit gently until it forms a soft powder.Brush with a wet toothbrush for 2 minutes, it will foam up - just like what youre used to.Spit, smile and repeat twice a day to make your dentist proud and our Earth happy.",
  },
];
export const howUseData: useDataModel[] = [
  {
    id: 1,
    title: "Grape a Toothpaste Bite",
    text: "A single Bite is all you need each time",
    image: use1,
  },
  {
    id: 2,
    title: "Chew Your Bit",
    text: "A softe paste will form in your mouth",
    image: use2,
  },
  {
    id: 3,
    title: "Brush With a Wet Toothbrush",
    text: "It will foam up, just like regular toothpaste",
    image: use3,
  },
];
export const reviewData = [
    {
      id: 1,
      image: `${review1}`,
      title:
        "No mess, cleans and whitens beautifully, and no plastic or repeat containers!",
      name: "Chrissy B.",
    },
    {
      id: 2,
      image: `${review2}`,
      title:
        "I’ve tried a few other brands of toothpaste tablets and these bits are by far the best. They foam up like regular toothpaste and have a great flavor.",
      name: "Britt W.",
    },
    {
      id: 3,
      image: `${review3}`,
      title:
        "I love the sustainable packaging and my teeth have gotten whiter since using this toothpaste. Easy to travel with!",
      name: "Lucy R.",
    },
    {
      id: 4,
      image: `${review4}`,
      title: "Best toothpaste I’ve ever used!",
      name: "Anne L",
    },
    {
      id: 5,
      image: `${review5}`,
      title:
        "I have been using Bits for a year now, and I am very happy with them. My dental hygienist is too! I highly recommend them!",
      name: "JAMES R.",
    },
  ];