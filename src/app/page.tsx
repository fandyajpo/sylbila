import Landing from "@/components/landing";
import Galery from "@/components/galery";
import Story from "@/components/story";
import Navbar from "@/components/layout/navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />

      <Galery />
      <Story />
    </main>
  );
}
