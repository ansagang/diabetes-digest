"use client"

import Input from "@/components/ui/input"
import InputPassword from "@/components/ui/input-password"
import Link from "next/link"
import Button from "@/components/ui/button"
import { providers } from "@/config/providers"
import { useState, useTransition } from "react"
import { login } from "@/lib/auth"
import responseHandler from "@/lib/response-handler"
import { useRouter } from "next/navigation"
import supabase from "@/db/supabase-client"

export default function LoginForm({ language }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPending, startTransition] = useTransition()

    const notification = responseHandler({ language })
    const router = useRouter()

    async function signin({ email, password, provider }) {

        startTransition(async () => {
            try {
                const res = await login({ email, password, supabase, provider, language })
                notification({ message: res.message, type: res.success })
                if (res.success) {
                    router.push('/')
                    router.refresh()
                }
            } catch (err) {
                console.log(err);
            }
        })
    }


    return (
        <section className="auth">
            <div className="container">
                <div className="auth__inner inner__block">
                    <div className="auth__content">
                        <div className="auth__title title">
                            <h2>{language.app.sections.login.title}</h2>
                        </div>
                        <div className="auth__info info">
                            <p>{language.app.sections.login.info}</p>
                        </div>
                    </div>
                    <form action="" className="auth__form">
                        <div className="auth__form-input">
                            <label>{language.app.labels.email}</label>
                            <Input type='email' placeholder="ansagaang@gmail.com" value={email} onChange={((e) => setEmail(e.target.value))} />
                        </div>
                        <div className="auth__form-input">
                            <label>{language.app.labels.password}</label>
                            <InputPassword placeholder="123456789" value={password} onChange={((e) => setPassword(e.target.value))} />
                        </div>
                        <Button onClick={() => signin({ email: email, password: password })} type='primary' className='auth__button' disabled={isPending}>{language.app.buttons.login}</Button>
                        {/* <Link className="auth__reset link" href={'/reset-password'}>{language.app.labels.resetPassword}</Link> */}
                        <div className="auth__providers">
                            {
                                providers ?
                                    (
                                        providers.length > 0 ?
                                            (
                                                providers.map((provider) => (
                                                    <button onClick={() => signin({ provider: provider.title })} title={provider.title} className="auth__provider">
                                                        {provider.logo}
                                                    </button>
                                                ))
                                            )
                                            :
                                            null
                                    )
                                    :
                                    null
                            }
                        </div>
                    </form>
                    <div className="auth__link">
                        <span>{language.app.labels.noaccount}</span> <Link className="link" href={'/register'}>{language.app.buttons.register}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}