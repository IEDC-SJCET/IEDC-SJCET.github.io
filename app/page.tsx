import { Navbar } from "@/components/navbar";
import { HomePage } from "@/components/home";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <main>
      <Navbar />
      <HomePage />
    </main>
  )
}

