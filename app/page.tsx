import Navbar from "@/app/components/navbar";
import HomePage from "@/app/components/home";
import ContentPage from "@/app/components/iedc/ContentPage";

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return (
        <main>
            <Navbar />
            <HomePage />
            <ContentPage />
        </main>
    )
}