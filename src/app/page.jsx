import Link from "next/link";
import Projectpage from "./Pages/projects/page";
import Services from "./Pages/services/page";
export default function Home() {
  return (
    <main className="">
      <Projectpage />
      <Services/>
    </main>
  );
}
