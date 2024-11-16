import Footer from "@/components/Footer"
import { Header } from "@/components/header"
import { HeaderLearning } from "@/components/HeaderLearning"
import Link from "next/link"

export default async function LRLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col">
            <Header />
            <div className="px-4 py-2 flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}
  