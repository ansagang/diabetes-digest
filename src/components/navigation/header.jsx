import { Icons } from "@/config/icons"
import Image from "next/image"
import Button from "@/components/ui/button"
import NavLink from "@/components/ui/nav-link"

export default function Header({ language, user }) {
    return (
        <header>
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
                            <li className="header__nav-li">
                                <NavLink href={'/donation'}>
                                    {/* <Icons.heart /> */}
                                    <Button type='primary'><Icons.heart width='15px' height='15px' fill="#FFFFFF" />{language.app.buttons.donate}</Button>
                                </NavLink>
                            </li>
                            <li className="header__nav-buttons">
                                {
                                    user ?
                                        (
                                            <NavLink href={'/account'}>
                                                <Icons.account />
                                                <span>{language.app.pages.account.meta.title}</span>
                                            </NavLink>
                                        )
                                        :
                                        (
                                            <NavLink href={'/login'}>
                                                <Button type='secondary'>{language.app.buttons.signin}</Button>
                                            </NavLink>
                                        )
                                }
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}