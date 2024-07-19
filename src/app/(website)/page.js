import Hero from "@/components/page/Hero";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";



export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <main className="ml-48">
        {session && (
          <>
            <Hero session={session}/>
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
          </>
        )}
    </main>
  );
}
