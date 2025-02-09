import { Metadata } from "next";
import Favicon from '@/public/favicon.ico';
import Navbar from "@/components/reusable/Navbar";
import ProfileCard from "@/components/home/ProfileCard";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";

export const metadata: Metadata = {
  title: "Swastik Biswas",
  description: "Swastik Biswas. Software Engineer, Developer. Building desktop applications using Java, C, C++, C#, Python, and web applications using Next.js and Svelte. Experience in Octran Technologies. Student of B.Tech in Computer Science and Engineering at KIIT University.",
  robots: "index, follow",
  icons: [
      {
          rel: 'icon',
          url: Favicon.src
      }
  ],
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <ProfileCard />
      <Skills />
      <Experience />
    </main>
  );
}
