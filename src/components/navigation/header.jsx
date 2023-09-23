"use client"

import { Icons } from "@/config/icons"
import Image from "next/image"
import Button from "@/components/ui/button"
import NavLink from "@/components/ui/nav-link"
import { languages } from "@/config/languages"
import Select from "@/components/ui/select"
import { auth } from "@/lib/auth"
import supabase from "@/db/supabase-client"
import { useRouter } from "next/navigation"
import { languageDecode } from "@/lib/utils"
import responseHandler from "@/lib/response-handler"

export default function Header({ language, user }) {
    const router = useRouter()

    const notification = responseHandler({ language })

    async function updateLanguage(updatedLang) {
        try {
            const res = await auth.update({ user: user, data: { lang: updatedLang }, supabase: supabase, language: language })
            if (res.success) {
                router.refresh()
            } else {
                notification({ message: res.message, type: "error" })
            }
        } catch (err) {
            notification({ message: err.message, type: "error" })
        }
    }

    return (
        <header className='header active' >
            <div className="container__fluid">
                <div className="header__inner">
                    <nav className="header__nav">
                        <div className="header__nav-logo">
                            <div className="header__nav-logo_img">
                                <Image loading='lazy' height={1} width={1} unoptimized={true} title={'logo'} src={'/logo-clean.png'} alt={'logo'} />
                            </div>
                            <ol className="header__nav-ol links">
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
                    <nav className="header__nav">
                        <ol className="header__nav-ol">
                            <div className="header__nav-button">
                                <Select text={language.app.buttons.selectLanguage} activeOption={languageDecode(user?.lang)} setActiveOption={updateLanguage} options={languages} />
                            </div>
                            {/* <li className="header__nav-button">
                                <NavLink href={'/donation'}>
                                    <Button type='secondary'><Icons.heart width='17px' height='17px' />{language.app.buttons.donate}</Button>
                                </NavLink>
                            </li> */}
                            <li className="header__nav-button">
                                {
                                    user ?
                                        (
                                            <NavLink href={'/account'}>
                                                <Button type='primary'><Icons.account width='17px' height='17px' />{language.app.pages.account.meta.title}</Button>
                                            </NavLink>
                                        )
                                        :
                                        (
                                            <NavLink href={'/login'}>
                                                <Button type='primary'>{language.app.buttons.login}</Button>
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