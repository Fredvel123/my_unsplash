import { useState } from "react"
import urls from '../../config/endpoints/index.urls.js';
import Head from 'next/head'


export default function Search() {
    const [data, setData] = useState(null)
    const [query, setQuery] = useState('')
    const handlerQuery = e => {
        setQuery(e.target.value);
    }
    const searchImages = async () => {
        const request = await fetch(`${urls.search}/${query}`);
        const response = await request.json();
        setData(response.results);
    }

    const handlerSubmit = e => {
        e.preventDefault();
        searchImages();
    }

    return(
        <>
            <Head>
                <title>Search</title>
            </Head>
            <h2>Here you can search images</h2>
            <form onSubmit={handlerSubmit}>
            <input 
                type="text"
                placeholder="Search some images here"
                onChange={handlerQuery} />
            <button>query</button>
            </form>
            {data !== null ? 
                data.map(item => (
                    <img src={item.urls.small} alt="image" />
                ))
            : <p>Search images</p> } 
        </>
    )
    
}
