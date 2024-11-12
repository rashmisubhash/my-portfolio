import Hero from "@/src/components/hero";
import AboutMe from "../components/aboutAndSkills";
import Work from "../components/work";
import Contact from "../components/contact";
import { Metadata } from "next";
import getCopyData, { ReturnedResponse } from "../utils/getCopyData";

const DESCRIPTION =
  "Serving Sass.css and servers 💁🏾‍♀️✨. Hi, I'm Michi — a Front-End Developer & User-Empathy Enthusiast. Crafting smooth, intuitive, and accessible websites. Welcome to My Developer Portfolio Site";

export const metadata: Metadata = {
  title: "ChellScript",
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: `${process.env.SITE_URL}`,
    title: "ChellScript",
    description: DESCRIPTION,
  },
  twitter: {
    title: "ChellScript",
    card: "summary_large_image",
    description: DESCRIPTION,
  },
};

export default async function Home() {
  const { data, error }: ReturnedResponse = await getCopyData();

  if (error) {
    return;
  }

  const { hero, about, contact, previousWork } = data;

  return (
    <>
      <Hero data={hero} />
      <AboutMe data={about} />
      <Work data={previousWork} />
      <Contact data={contact} />
    </>
  );
}
