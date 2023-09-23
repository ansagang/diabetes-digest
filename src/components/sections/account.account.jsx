"use client"

import { useState } from "react"

import { useRouter } from "next/navigation"

import { auth } from "@/lib/auth"
import responseHandler from "@/lib/response-handler"

import Input from "@/components/ui/input"
import Button from "@/components/ui/button"

import supabase from "@/db/supabase-client"

export default function Account({ language, user }) {

    const notification = responseHandler({ language })
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState(user.email)
    const [fullname, setFullname] = useState(user.full_name)
    const router = useRouter()

    async function update() {
        try {
            setLoading(true)
            const res = await auth.update({ user, data: {email: email, full_name: fullname}, supabase, language })
            notification({ message: res.message, type: res.success ? 'success' : 'error' })
            if (res.success) {
                router.refresh()
            }
        } catch (err) {
            notification({ message: err.message, type: 'error' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="account">
            {/* <div className="container"> */}
                <div className="account__inner">
                    <div className="account__title title">
                        <h1>{language.app.pages.account.sections.details.title}</h1>
                    </div>
                    <div className="account__settings">
                        <form className="account__settings-form" onSubmit={(e) => {
                            e.preventDefault()
                            update()
                        }}>
                            <div className="account__settings-form_line">
                                <div className="account__settings-form_input">
                                    <label>{language.app.labels.email}</label>
                                    <Input type='text' placeholder="ansagang@gmail.com" value={email} onChange={((e) => setEmail(e.target.value))} />
                                </div>
                                <div className="account__settings-form_input">
                                    <label>{language.app.labels.fullname}</label>
                                    <Input type='text' placeholder="Ansar Aben" value={fullname} onChange={((e) => setFullname(e.target.value))} />
                                </div>
                            </div>
                            <Button form={true} type='primary' className='account__settings-form_button' disabled={loading || email === user.email && fullname === user.full_name}>{language.app.buttons.login}</Button>
                        </form>
                    </div>
                </div>
            {/* </div> */}
        </section>
    )
}