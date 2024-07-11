import { Inter } from "next/font/google"
import Hero from "@/components/sections/hero"
import Skills from "@/components/sections/skills"
import Work from "@/components/sections/work"
import Contact from "@/components/sections/contact"

const inter = Inter({ subsets: ["latin"] }) // this is how to import fonts

export default function Home() {
  return (
    <>
      <nav></nav>
      <Hero />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}
