import Header from "@/components/header/Header.jsx";
import Projectpage from "./Pages/Project/page.jsx";
import Services from "./Pages/services/servicespage.jsx";
import Testimonial from "@/components/Testimonial.jsx";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Projectpage />
      <Services />
      <Testimonial />
    </main>
  );
}
