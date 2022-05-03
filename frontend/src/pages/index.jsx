import Head from 'next/head'
import Discover from '../components/discover'
import Header from '../components/header'

export default function Home() {
  return (
    <div >
      <Head>
        <title>My ToDo App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100&family=Montserrat:wght@300&family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>       
      <a href="search">Search images</a>
      <Discover />   
      
      {/* <Header /> */}
    </div>
  )
}
