"use client"

import { useState } from "react"

import { useRouter } from "next/navigation"
import Link from "next/link"

import Input from "@/components/ui/input"
import InputPassword from "@/components/ui/input-password"
import Button from "@/components/ui/button"

import supabase from "@/db/supabase-client"
// import { supabase } from "@/db/supabase"

import responseHandler from "@/lib/response-handler"
import { auth } from "@/lib/auth"

import { providers } from "@/config/providers"

export default function Login({ language }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const notification = responseHandler({ language })
    const router = useRouter()

    async function login({ email, password, provider }) {
        try {
            setLoading(true)
            const res = await auth.login({ email, password, supabase, provider, language })
            notification({ message: res.message, type: res.success ? 'success' : 'error' })
            if (res.success) {
                router.push('/')
            }
        } catch (err) {
            notification({ message: err.message, type: 'error' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="auth">
            <div className="container">
                <div className="auth__inner inner__block">
                    <div className="auth__content">
                        <div className="auth__title title">
                            <h2>{language.app.pages.login.sections.login.title}</h2>
                        </div>
                        <div className="auth__info info">
                            <p>{language.app.pages.login.sections.login.info}</p>
                        </div>
                    </div>
                    <form id="form" className="auth__form" onSubmit={(e) => {
                        e.preventDefault()
                        login({ email: email, password: password })
                    }}>
                        <div className="auth__form-input">
                            <label>{language.app.labels.email}</label>
                            <Input type='text' placeholder="ansagang@gmail.com" value={email} onChange={((e) => setEmail(e.target.value))} />
                        </div>
                        <div className="auth__form-input">
                            <label>{language.app.labels.password}</label>
                            <InputPassword placeholder="123456789" value={password} onChange={((e) => setPassword(e.target.value))} />
                        </div>
                        <Button form={true} type='primary' className='auth__button' disabled={loading}>{language.app.buttons.login}</Button>
                        {/* <Link className="auth__reset link" href={'/reset-password'}>{language.app.labels.resetPassword}</Link> */}
                        <div className="auth__providers">
                            {
                                providers ?
                                    (
                                        providers.length > 0 ?
                                            (
                                                providers.map((provider, key) => (
                                                    <button key={key} type="button" onClick={() => login({ provider: provider.title })} title={provider.title} className="auth__provider">
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