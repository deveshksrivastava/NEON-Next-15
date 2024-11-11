import { HeaderLearning } from "@/components/HeaderLearning"
import Link from "next/link"

export default async function LRLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto w-full max-w-7xl h-svh">
            <HeaderLearning />
            <div className="px-4 py-2 max-h-screen">
                {children}
            </div>
            <nav>
                <ul className="flex gap-4 bottom-0 ">
                    <Link href="/data-fetching" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">Data Fetching</h1>
                    </Link>
                    <Link href="/dynamic-db-fetch" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">Dynamic DB Fetch</h1>
                    </Link>
                    <Link href="/loading-ui" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">Loading UI</h1>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
  