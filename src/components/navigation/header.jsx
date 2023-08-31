"use client"

import { Icons } from "@/config/icons"
import Image from "next/image"
import Button from "@/components/ui/button"
import NavLink from "@/components/ui/nav-link"
import useScrollDirection from "@/hooks/use-scroll-direction"
import { useState, useEffect } from "react"

export default function Header({ language, user }) {
    // const [sticky, setSticky] = useState(true)

    // useScrollDirection({
    //     effect: ({ prevPos, currPos }) => {
    //         const isShow = currPos.y > prevPos.y
    //         if (isShow !== sticky) setSticky(isShow)
    //     }
    // })

    // useEffect(() => {
    //     if (window.scrollY === 0) {
    //         setSticky(true)
    //     }
    // }, [sticky])
    return (
        // <header className={sticky ? "header active" : "header"} >
        <header className='header active' >
            <div className="container">
                <div className="header__inner">
                    <nav className="header__nav">
                        <div className="header__nav-logo">
                            <div className="header__nav-logo_img">
                                <Image loading='lazy' height={1} width={1} unoptimized={true} title={'logo'} src={'logo.png'} alt={'logo'} />
                            </div>
                            {/* <div className="header__nav-logo_title">
                                <h1>{language.app.meta.title}</h1>
                            </div> */}
                            <ol className="header__nav-ol">
                                <li className="header__nav-li">
                                    <NavLink exact={true} href={'/'}><span>{language.app.pages.main.meta.title}</span></NavLink>
                                </li>
                                <li className="header__nav-li">
                                    <NavLink href={'/diabetes'}><span>{language.app.pages.diabetes.meta.title}</span></NavLink>
                                </li>
                                <li className="header__nav-li">
                                    <NavLink href={'/about'}><span>{language.app.pages.about.meta.title}</span></NavLink>
                                </li>
                            </ol>
                        </div>
                    </nav>
                    {/* <nav className="header__nav">
                        <ol className="header__nav-ol">
                            <li className="header__nav-li">
                                <NavLink exact={true} href={'/'}><h4>{language.app.pages.main.meta.title}</h4></NavLink>
                            </li>
                            <li className="header__nav-li">
                                <NavLink href={'/diabetes'}><h4>{language.app.pages.diabetes.meta.title}</h4></NavLink>
                            </li>
                            <li className="header__nav-li">
                                <NavLink href={'/about'}><h4>{language.app.pages.about.meta.title}</h4></NavLink>
                            </li>
                        </ol>
                    </nav> */}
                    <nav className="header__nav">
                        <ol className="header__nav-ol">
                            <li className="header__nav-button">
                                <NavLink href={'/donation'}>
                                    {/* <Icons.heart /> */}
                                    <Button type='primary'><Icons.heart width='17px' height='17px' />{language.app.buttons.donate}</Button>
                                </NavLink>
                            </li>
                            <li className="header__nav-button">
                                {
                                    user ?
                                        (
                                            <NavLink href={'/account'}>
                                                <Button type='secondary'><Icons.account width='17px' height='17px' />{language.app.pages.account.meta.title}</Button>
                                            </NavLink>
                                        )
                                        :
                                        (
                                            <NavLink href={'/login'}>
                                                <Button type='secondary'>{language.app.buttons.login}</Button>
                                            </NavLink>
                                        )
                                }
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header >
    )
}