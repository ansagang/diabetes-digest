import Background from "@/components/ui/background"

export default async function AuthLayout({ children }) {

    return (
        <div className="wrapper__auth">
            {children}
            <Background image={'background-2.png'} />
        </div>
    )
}