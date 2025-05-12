import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { ReactNode } from "react";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black text-emerald-400">
      <div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
