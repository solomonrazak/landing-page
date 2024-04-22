import Link from "next/link";
import Header from "@/components/header/Header";
export default function Home() {
  return (
    <main className="">
      <Header />
      <Link href="/pages/projects">
        <p className="m-4 p-4 rounded-lg bg-blue-500 w-40 text-center text-white">
          Projects
        </p>
      </Link>
    </main>
  );
}
