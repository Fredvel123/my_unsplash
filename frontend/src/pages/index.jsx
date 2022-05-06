import Head from 'next/head'
import Discover from '../components/discover'

export default function Home() {
  return (
    <div >
      <Head>
        <title>My Unsplash App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100&family=Montserrat:wght@300&family=Poppins&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"></link>
      </Head>       
      
      <a href="search">Search images</a>
      <a href="signup">create an account here</a>
      <a href="login">You already have an account?</a>
      {/* <Discover />    */}
      
      {/* <Header /> */}
    </div>
  )
}
