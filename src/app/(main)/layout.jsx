import Footer from "@/components/navigation/footer"
import Header from "@/components/navigation/header"

export default async function MainLayout({ children }) {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}