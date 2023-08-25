import { Icons } from "@/config/icons"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/ui/button"

export default function Header({ language, user }) {
    return (
        <header>
            <div className="container__fluid">
                <div className="header__inner inner__small">
                    <nav className="header__nav">
                        <ol className="header__nav-ol">
                            <li className="header__nav-li">
                                <div className="header__nav-logo">
                                    <Image loading='lazy' height={1} width={1} unoptimized={true} title={'logo'} src={'logo.png'} alt={'logo'} />
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <nav className="header__nav">
                        <ol className="header__nav-ol">
                            <li className="header__nav-li">
                                <Link href={'/diabetes'}><h4>{language.app.pages.diabetes.meta.title}</h4></Link>
                            </li>
                            <li className="header__nav-li">
                                <Link href={'/about'}><h4>{language.app.pages.about.meta.title}</h4></Link>
                            </li>
                        </ol>
                    </nav>
                    <nav className="header__nav">
                        <ol className="header__nav-ol">
                            <li className="header__nav-li">
                                {
                                    user ?
                                        (
                                            <Link href={'/account'}>
                                                <Icons.account />
                                                <h4>{language.app.pages.account.meta.title}</h4>
                                            </Link>
                                        )
                                        :
                                        (
                                            <Link href={'/login'}>
                                                <Button type='primary'>{language.app.buttons.signin}</Button>
                                            </Link>
                                        )
                                }
                            </li>
                            <li className="header__nav-li">
                                <Link href={'/donation'}>
                                    <Icons.heart />
                                    <Button type='secondary'>{language.app.buttons.donate}</Button>
                                </Link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}