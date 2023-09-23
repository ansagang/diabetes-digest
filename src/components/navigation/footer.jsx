import Image from "next/image"
import NavLink from "@/components/ui/nav-link"

export default function Footer({ language }) {
    return (
        <footer className="footer">
            <div className="container__fluid">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <div className="footer__logo-img">
                            <Image loading='lazy' height={1} width={1} unoptimized={true} title={'logo'} src={'/logo.png'} alt={'logo'} />
                        </div>
                    </div>
                    <nav className="footer__nav">
                        <ol className="footer__nav-ol">
                            <li className="footer__nav-ol_title">
                                <p>{language.app.labels.links}</p>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink exact={true} href={'/'}><span>{language.app.pages.main.meta.title}</span></NavLink>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink exact={true} href={'/diabetes'}><span>{language.app.pages.diabetes.meta.title}</span></NavLink>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink href={'/about'}><span>{language.app.pages.about.meta.title}</span></NavLink>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink href={'/donation'}><span>{language.app.pages.donation.meta.title}</span></NavLink>
                            </li>
                        </ol>
                        <ol className="footer__nav-ol">
                            <li className="footer__nav-ol_title">
                                <p>{language.app.labels.diabetes}</p>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink href={'/diabetes/type-1'}><span>{language.app.pages.diabetes.pages.typeOne.meta.title}</span></NavLink>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink href={'/diabetes/type-2'}><span>{language.app.pages.diabetes.pages.typeTwo.meta.title}</span></NavLink>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink href={'/diabetes/gestational'}><span>{language.app.pages.diabetes.pages.gestational.meta.title}</span></NavLink>
                            </li>
                        </ol>
                        <ol className="footer__nav-ol">
                            <li className="footer__nav-ol_title">
                                <p>{language.app.labels.social}</p>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink href={'https://instagram.com/diabetes.digest'}><span>Instagram</span></NavLink>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink href={'/diabetes/type-2'}>Telegram<span></span></NavLink>
                            </li>
                            <li className="footer__nav-li">
                                <NavLink href={'tel:+77010999445'}><span>Phone</span></NavLink>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </footer>
    )
}