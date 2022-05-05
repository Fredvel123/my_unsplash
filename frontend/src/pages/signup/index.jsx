import { useState } from 'react';
import Head from "next/head";
// components
import Inputs from "./Inputs";
// styled components
import { Header, Header_title, IconBack } from "../../styles/signup";
import regex from './regex';
import { Form } from '../../styles/signup/form';


export default function Signup() {
    const [name, setName] = useState({value: '', isValid: null})
    const [nickName, setNickName] = useState({value: '', isValid: null})
    const [email, setEmail] = useState({value: '', isValid: null})
    const [password, setPassword] = useState({value: '', isValid: null})
    const [confirmPasswd, setConfirmPasswd] = useState({value: '', isValid: null})
    
    const handlerSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(nickName);
        console.log(email);
        console.log(password);
        console.log(confirmPasswd);
    }
    const validatePassword = () => {
        if(password.value === confirmPasswd.value) {
            setConfirmPasswd({...confirmPasswd, isValid: true})
        } else {
            setConfirmPasswd({...confirmPasswd, isValid: false})
        }
    }
    return(

        <>
            <Head>
                <title>
                    Sign Up
                </title>
            </Head>
            <Header>
                <a href="/"><IconBack /></a>
                <h2>Sign up</h2>
            </Header>
            <Header_title>
                <h3>Hi, please register yourself to get started</h3>
            </Header_title>
            <Form onSubmit={handlerSubmit}>
                <Inputs type='text' text='Alexander Fernandez' state={name} setState={setName} expression={regex.name}  />
                <Inputs type='text' text='alex_fer59' state={nickName} setState={setNickName} expression={regex.user}/>
                <Inputs type='email' text='alex.fer@gmail.com' state={email} setState={setEmail} expression={regex.email}/>
                <Inputs type='password' text='Type your password here' state={password} setState={setPassword} expression={regex.password}/>
                <Inputs type='password' text='Confirm your password' state={confirmPasswd} setState={setConfirmPasswd} callback={validatePassword} />
                <button>Register</button>
            </Form>
        </>
    )
}