import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <Link href="/pages/projects">
        <p className="m-4 p-4 rounded-lg bg-blue-500 w-40 text-center text-white">
          Projects
        </p>
      </Link>
    </main>
  );
}
