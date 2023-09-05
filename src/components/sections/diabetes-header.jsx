"use client"

import NavLink from "@/components/ui/nav-link"
import { usePathname } from "next/navigation"

export default function DiabetesHeader({ language, title, routes }) {

    return (
        <section className="diabetes-header">
            <div className="container">
                <div className="diabetes-header__inner inner">
                    <div className="diabetes-header__title title">
                        <h1>{title}</h1>
                    </div>
                    <div className="diabetes-header__links">
                        {
                            routes ?
                                (
                                    routes.length > 0 ?
                                        (
                                            routes.map((route, key) => (
                                                // <div key={key} className="diabetes-header__link">
                                                //     <NavLink exact={route.exact} href={route.url}>{route.title}</NavLink>
                                                // </div>
                                                <NavLink exact={route.exact} href={route.url} key={key} className="diabetes-header__link">
                                                    {route.title}
                                                </NavLink>
                                            ))
                                        )
                                        :
                                        null
                                )
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}