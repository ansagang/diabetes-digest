'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import supabase from '@/db/supabase-client'
import { login, register } from '@/lib/auth'
import responseHandler from '@/lib/response-handler'

export default function Login({ language }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [lang, setLang] = useState('')
  const [username, setUsername] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()
  // const debouncedValue = useDebounce(email, 1000)
  // console.log(debouncedValue);

  // const [value, setValue] = useLocalStorage('value', '')
  // console.log(value);

  const notification = responseHandler({ language })

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          lang: lang,
          user_name: username
        }
      }
    })
    console.log(error);
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  // create file with user functions update create i tak dalee i in oauth signin sdelat after function with user update lang

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const githubSignIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github", options: { redirectTo: `${location.origin}/auth/callback` } });
    router.refresh()
  }

  const googleSignIn = async () => {
    const error = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${location.origin}/auth/callback` } });
    console.log(error);
    router.refresh()
  }

  async function signin({ email, password, provider }) {
    const res = await login({ email, password, supabase, provider, language })
    notification({ message: res.message, type: res.success })
    router.refresh()
  }

  async function signup({ email, lang, password, confirmPassword, username }) {
    const res = await register({ email, supabase, language, lang, password, confirmPassword, username })
    notification({ message: res.message, type: "warning" })
    router.refresh()
  }

  //   console.log(
  //     `%c                                                  
  // %c                                                  
  // %c    ____  ______        __         _     _        
  //    / ___||  _ \\ \\      / /__  _ __| | __| |___    
  //    \\___ \\| |_) \\ \\ /\\ / / _ \\| '__| |/ _\` / __|   
  //     ___) |  __/ \\ V  V / (_) | |  | | (_| \\__ \\   
  //    |____/|_|     \\_/\\_/ \\___/|_|  |_|\\__,_|___/   
  // %c                                                  

  //    ---                                      ---   
  // %c   Если ты нашел какой-то баг или уязвимость на   
  //    сайте, или у тебя есть другой технический      
  //     опрос, пиши сюда - help@spworlds.ru           
  // %c   ---                                      ---   
  // %c                                                  `,
  //     'font-size: 13px; background: #15151B; color: #8F8F94; border-radius: 16px 16px 0px 0px',
  //     'font-size: 13px; background: #15151B; color: #8F8F94',
  //     'font-size: 13px; background: #15151B; color: white',
  //     'font-size: 13px; background: #15151B; color: #8F8F94',
  //     'font-size: 13px; background: #15151B; color: white',
  //     'font-size: 13px; background: #15151B; color: #8F8F94',
  //     'font-size: 13px; background: #15151B; color: #8F8F94; border-radius: 0px 0px 16px 16px'
  //   );


  return (
    <>
      <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="password"
        name="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <input name="lang" onChange={(e) => setLang(e.target.value)} value={lang} />
      <input name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
      <button onClick={() => signin({ provider: 'github', supabase })}>github</button>
      <button onClick={() => signin({ provider: 'google', supabase })}>google</button>
      <button onClick={() => signin({ email, password })}>server signin</button>
      <button onClick={() => signup({ email, lang, password, confirmPassword, username })}>server signup</button>
      <div className="title">
        <h1>Hello world</h1>
      </div>
      <button onClick={() => setValue()}>fawf</button>
    </>
  )
}