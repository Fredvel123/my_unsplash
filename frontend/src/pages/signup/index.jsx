import Head from "next/head";
// components
import Inputs from "./Inputs";
// styled components
import { Header, Header_title, IconBack } from "../../styles/signup";

export default function Signup() {
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
            <form >
                <Inputs type='text' text='' />
                <Inputs type='password' text='Write your password here' />
            </form>
        </>
    )
}