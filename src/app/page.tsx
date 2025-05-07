// import NavBar from "../components/navBar";
// import Hero from "@/src/components/hero";
// import { Metadata } from "next";
import getCopyData, { ReturnedResponse } from "../utils/getCopyData";
import dynamic from "next/dynamic";
import LoadingWrapper from "../components/loadingWrapper";

const AboutMe = dynamic(() => import("../components/aboutAndSkills"), {
  ssr: false,
});
const Work = dynamic(() => import("../components/work"), {
  ssr: false,
});
const Contact = dynamic(() => import("../components/contact"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/footer"), {
  ssr: false,
});

const HeroHeader = dynamic(() => import("../components/HeroHeader"), {
  ssr: false,
});

const Timeline = dynamic(() => import("../components/timeline"), {
  ssr: false,
});

const SkillBricks = dynamic(() => import("../components/aboutAndSkills/skillBricks"), {
  ssr: false,
});

export default async function Home() {
  const { data, error }: ReturnedResponse = await getCopyData();

  if (error) {
    return;
  }

  const { hero, about, contact, previousWork, navigation, footer } = data;
  


  return (
    <LoadingWrapper>
      {/* <NavBar data={navigation} /> */}
      <HeroHeader />
      <AboutMe data={about} />
      <Timeline
        items={previousWork.companies.list.map((w) => ({
          date:        w.duration || "",
          title:       w.role      || "",
          company:     w.companyTitle,
          logo: w.logo || "",
          description: w.projects[0]?.description || "",
          bullets:     w.projects.map((p) => p.description || p.name),
          link_company: w.link_company || ""
        }))}
      />
      <SkillBricks data={about} />

      {/* <Hero data={hero} /> */}
      
      {/* <Work data={previousWork} />
      <Contact data={contact} />
      <Footer data={footer} /> */}
    </LoadingWrapper>
  );
}
