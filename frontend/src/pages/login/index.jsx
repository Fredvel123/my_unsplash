import { useState } from "react";
import Head from "next/head";
import { Header, IconBack } from "../../styles/login";
import Inputs from "./Inputs";


export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handlerSubmit = e => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    return (
        <>
            <Head>
                <title>Log In</title>
            </Head>
            <Header>
                <div className="head">
                    <a href="/">
                        <IconBack />
                    </a>
                    <h2>LOG IN</h2> 
                </div>
                <h3>Hi, what's up! Welcome Back to usplash app</h3>
            </Header>
            <form onSubmit={handlerSubmit}>
                <Inputs type='email' text='Write your email here' state={email} setState={setEmail} />
                <Inputs type='password' text='write your passwod here' state={password} setState={setPassword} />
                <button>Log In</button>
            </form>
        </>
    )
}