import { inventory, pharmsys, serverup, smwatthub, ucmotors, ycdir } from ".";

const projects = [
  {
    id: 1,
    name: "Ultracom Motors",
    web_link: "https://uc-motor.vercel.app",
    category: "web",
    description:
      "This is a demo website for uc motors, an electric bike, motors and tricycle dealer",
    image: ucmotors,
  },
  {
    id: 2,
    name: "SmartWatt Hub",
    web_link: "https://smartwatthub.vercel.app",
    category: "web",
    description:
      "A all-in-one platform connecting shopping,delivery and errand",
    image: smwatthub,
  },
  {
    id: 3,
    name: "Inventory Management System",
    web_link: "https://inventory-delta-seven.vercel.app/dashboard",
    category: "web",
    description:
      "A demo inventory system for shops and also for personal inventory intake",
    image: inventory,
  },
  {
    id: 4,
    name: "Server Up",
    web_link: "https://serverup-two.vercel.app/",
    category: "web",
    description: "A demo website for a digital studio company",
    image: serverup,
  },
  {
    id: 5,
    name: "PharmSys",
    web_link: "https://pharmacy-frontend-one.vercel.app/",
    category: "web",
    description: "A demo website for a pharmacy management system",
    image: pharmsys,
  },
  {
    id: 6,
    name: "YC Directory",
    web_link: "https://startups-directory-chi.vercel.app/",
    category: "web",
    description:
      "A demo website for a startup discovery platform for investors or potential clients",
    image: ycdir,
  },
];

export { projects };
