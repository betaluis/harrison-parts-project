import MyForm from "@/components/formComponents/MyForm"
import { HarrisonPartsList } from "@/components/parts/HarrisonPartsList"

export type HarrisonPartType = {
    item: string,
    part_number: string,
    description: string,
    price: number,
    availability: boolean
}

export default async function Home() {

    return (
        <>
            <nav className="bg-black w-full text-white p-4">Navbar</nav>
            <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main>
                    <HarrisonPartsList />
                    <div className="pb-8 w-80">
                        <MyForm />
                    </div>
                </main>
                <footer>Footer</footer>
            </div>
        </>
    );
}
