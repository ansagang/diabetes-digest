"use client"

import Input from "@/components/ui/input"
import InputPassword from "@/components/ui/input-password"
import Link from "next/link"
import Button from "@/components/ui/button"
import { useState, useTransition } from "react"
import { register } from "@/lib/auth"
import responseHandler from "@/lib/response-handler"
import { useRouter } from "next/navigation"
import supabase from "@/db/supabase-client"

export default function RegisterForm({ language }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [lang, setLang] = useState(language.lang)
    const [isPending, startTransition] = useTransition()

    const notification = responseHandler({ language })
    const router = useRouter()

    async function signup({ email, password, confirmPassword, fullname }) {

        // startTransition(async () => {
        //     try {
        //         const res = await register({ email, password, confirmPassword, fullname, lang, supabase, language })
        //         notification({ message: res.message, type: res.success })
        //         if (res.success) {
        //             router.push('/')
        //         }
        //     } catch (err) {
        //         console.log(err);
        //     }
        // })
        try {
            startTransition(async () => {
                const res = await register({ email, password, confirmPassword, fullname, lang, supabase, language })
                notification({ message: res.message, type: res.success })
                if (res.success) {
                    startTransition(async () => {
                        router.push('/')
                    })
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="auth">
            <div className="container">
                <div className="auth__inner inner__block">
                    <div className="auth__content">
                        <div className="auth__title title">
                            <h2>{language.app.sections.register.title}</h2>
                        </div>
                        <div className="auth__info info">
                            <p>{language.app.sections.register.info}</p>
                        </div>
                    </div>
                    <form action="" className="auth__form">
                        <div className="auth__form-input">
                            <label>{language.app.labels.fullname}</label>
                            <Input type='text' placeholder="Әбен Аңсар Ерланұлы" value={fullname} onChange={((e) => setFullname(e.target.value))} />
                        </div>
                        <div className="auth__form-input">
                            <label>{language.app.labels.email}</label>
                            <Input type='email' placeholder="ansagaang@gmail.com" value={email} onChange={((e) => setEmail(e.target.value))} />
                        </div>
                        <div className="auth__form-input">
                            <label>{language.app.labels.password}</label>
                            <InputPassword placeholder="123456789" value={password} onChange={((e) => setPassword(e.target.value))} />
                        </div>
                        <div className="auth__form-input">
                            <label>{language.app.labels.confirmPassword}</label>
                            <InputPassword placeholder="123456789" value={confirmPassword} onChange={((e) => setConfirmPassword(e.target.value))} />
                        </div>
                        <Button onClick={() => signup({ email, password, confirmPassword, fullname })} type='primary' className='auth__button' disabled={isPending}>{language.app.buttons.register}</Button>
                    </form>
                    <div className="auth__link">
                        <span>{language.app.labels.account}</span> <Link className="link" href={'/login'}>{language.app.buttons.login}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}