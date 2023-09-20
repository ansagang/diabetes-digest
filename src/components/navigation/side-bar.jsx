import NavLink from "@/components/ui/nav-link"

export default function Sidebar({language, routes}) {
    return (
        <aside className="sidebar">
            <div className="sidebar__inner">
                <nav className="sidebar__nav">
                    <ol className="sidebar__ol">
                        {
                            routes ?
                            (
                                routes.length > 0 ?
                                (
                                    routes.map((route) => (
                                        <li className="sidebar__li">
                                            <NavLink exact={route.exact} href={route.url}>{route.icon}<span>{route.title}</span></NavLink>
                                        </li>
                                    ))
                                )
                                :
                                null
                            )
                            :
                            null
                        }
                    </ol>
                </nav>
            </div>
        </aside>
    )
}