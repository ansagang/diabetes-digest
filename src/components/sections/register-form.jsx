"use client"

import { useState, useTransition } from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

import Input from "@/components/ui/input"
import InputPassword from "@/components/ui/input-password"
import Button from "@/components/ui/button"

import supabase from "@/db/supabase-client"

import { auth } from "@/lib/auth"
import responseHandler from "@/lib/response-handler"

export default function RegisterForm({ language }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [lang, setLang] = useState(language.lang)

    const [loading, setLoading] = useState(false)

    const notification = responseHandler({ language })
    const router = useRouter()

    async function register({ email, password, fullname }) {
        try {
            setLoading(true)
            const res = await auth.register({ email, password, fullname, lang, supabase, language })
            notification({ message: res.message, type: res.success ? "success" : "error" })
            if (res.success) {
                router.refresh()
                router.push('/')
            }
        } catch (err) {
            notification({ message: err.message, type: "error" })
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
                            <h2>{language.app.pages.register.sections.register.title}</h2>
                        </div>
                        <div className="auth__info info">
                            <p>{language.app.pages.register.sections.register.info}</p>
                        </div>
                    </div>
                    <form className="auth__form" onSubmit={(e) => {
                        e.preventDefault()
                        register({ email, password, confirmPassword, fullname })
                    }}>
                        <div className="auth__form-input">
                            <label>{language.app.labels.fullname}</label>
                            <Input type='text' placeholder="Әбен Аңсар Ерланұлы" value={fullname} onChange={((e) => setFullname(e.target.value))} />
                        </div>
                        <div className="auth__form-input">
                            <label>{language.app.labels.email}</label>
                            <Input type='text' placeholder="ansagaang@gmail.com" value={email} onChange={((e) => setEmail(e.target.value))} />
                        </div>
                        <div className="auth__form-input">
                            <label>{language.app.labels.password}</label>
                            <InputPassword placeholder="123456789" value={password} onChange={((e) => setPassword(e.target.value))} />
                        </div>
                        <Button form={true} type='primary' className='auth__button' disabled={loading}>{language.app.buttons.register}</Button>
                    </form>
                    <div className="auth__link">
                        <span>{language.app.labels.account}</span> <Link className="link" href={'/login'}>{language.app.buttons.login}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}