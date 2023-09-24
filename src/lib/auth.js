import { loginValidation, registerValidation } from "./validation";
import supabaseErrors from "@/db/supabase-errors";

export const auth = {
    getUser: (props) => getUser(props),
    login: (props) => login(props),
    register: (props) => register(props),
    update: (props) => update(props),
    signOut: (props) => signOut(props)
    // logino: (props) => logino(props)
}

export async function getUser({ supabase }) {
    // const res = await fetch(`${process.env.URL}/api/auth/login-session?lang=en`, {
    //     method: 'POST',
    //     body: JSON.stringify({ session: session }),
    // })
    // const data = await res.json()

    // return data

    try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            const { data, error } = await supabase.from("profiles").select("*").eq("id", session?.user?.id).single();
            if (!error) {
                return {
                    success: true,
                    data: data
                }
            } else {
                return {
                    success: false,
                }
            }
        } else {
            return {
                success: false,
            }
        }
    } catch (err) {
        return {
            success: false,
        }
    }
}

export async function login({ email, password, supabase, provider, language }) {
    // const res = await fetch(`/auth/login?lang=${language.lang}`, {
    //     method: 'POST',
    //     body: JSON.stringify({ email: email, password: password, provider: provider }),
    // })
    // const data = await res.json()

    // return data

    try {
        if (provider) {
            const { error } = await supabase.auth.signInWithOAuth({ provider: provider, options: { redirectTo: `${process.env.URL || window.location.origin}/auth/callback` } });
            if (!error) {
                return {
                    success: true,
                    message: language.res.loginResult
                }
            } else {
                throw {
                    success: false,
                    message: error.toString()
                }
            }
        } else {
            const errors = loginValidation({ email, password, language })
            if (errors.length === 0) {
                const { data } = await supabase.from("profiles").select().eq('email', email).maybeSingle();
                if (data) {
                    const { error } = await supabase.auth.signInWithPassword({
                        email,
                        password
                    })
                    console.log(error);
                    if (!error) {
                        return {
                            success: true,
                            message: language.res.loginResult
                        }
                    } else {
                        const res = supabaseErrors({ error, language })
                        return res
                    }
                } else {
                    return {
                        success: false,
                        message: language.res.userNotFoundError
                    }
                }
            } else {
                return {
                    success: false,
                    message: errors
                }
            }
        }
    } catch (err) {
        return {
            success: false,
            message: err.message
        }
    }
}

export async function update({ user, data, supabase, language }) {
    try {
        if (user) {
            const { error } = await supabase.from("profiles").update(data).eq("email", user.email)
            if (!error) {
                return {
                    success: true,
                    language: language.res.updateResult
                }
            } else {
                const res = supabaseErrors({ error, language })
                return res
            }
        } else {
            return {
                success: false,
                message: language.res.accountRequired
            }
        }
    } catch (err) {
        return {
            success: false,
            message: err.message
        }
    }
}

export async function register({ email, supabase, language, lang, password, fullname }) {
    try {
        const errors = registerValidation({ email, password, language })
        if (errors.length === 0) {
            const { data } = await supabase.from("profiles").select("*").eq("email", email).maybeSingle();
            if (data) {
                return {
                    success: false,
                    message: language.res.emailExistsError
                }
            } else {
                const { error } = await supabase.auth.signUp({
                    email: email,
                    password: password,
                    options: {
                        data: {
                            lang: lang,
                            role: 'user',
                            full_name: fullname,
                            email: email
                        }
                    }
                })

                if (!error) {
                    return {
                        success: true,
                        message: language.res.registrationResult
                    }
                } else {
                    const res = supabaseErrors({ error, language })
                    return res
                }
            }
        } else {
            return {
                success: false,
                message: errors
            }
        }
    } catch (err) {
        return {
            success: false,
            message: err.message
        }
    }
}

export async function signOut({ supabase, language}) {
    try {
        const { error } = await supabase.auth.signOut()

        if (!error) {
            return {
                success: true,
            }
        } else {
            const res = supabaseErrors({ error, language })
            return res
        }
    } catch (err) {
        return {
            success: false,
            message: err.message
        }
    }
}