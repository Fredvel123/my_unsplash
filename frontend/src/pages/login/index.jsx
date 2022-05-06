import { useState } from "react";
import Head from "next/head";
// styled components
import { Header, IconBack } from "../../styles/login";
import { Form } from "../../styles/login/form";
// components
import Inputs from "./Inputs";
// urls
import urls from '../../config/endpoints/index.urls';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null)


    const registerUser = async () => {
        const sendInfo = await fetch(urls.login, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        });
        const response = await sendInfo.json();
        setData(response)
    }

    const handlerSubmit = e => {
        e.preventDefault();
        registerUser();
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
            <Form onSubmit={handlerSubmit}>
                <Inputs type='email' text='Write your email here' state={email} setState={setEmail} />
                <Inputs type='password' text='write your passwod here' state={password} setState={setPassword} />
                <button>Log In</button>
            </Form>
        </>
    )
}