import { Hero } from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Nav";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <FloatingNavDemo />
      <Hero />
    </div>
  );
}
