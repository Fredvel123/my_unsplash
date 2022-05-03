import { useEffect, useState } from "react"
// import { getDiscoverImages } from "./getImages";
import urls from '../../config/endpoints/index.urls.js';

export default function Discover() {
    const [images, setImages] = useState([]);
    const getDiscoverImages = async () => {
        const request = await fetch(urls.discover);
        const response = await request.json();
        setImages(response);
    }
    useEffect(() => {
        getDiscoverImages();
    }, [])

    return(
        <div>
            <h2>This will be the home page</h2>
            {images ? 
                images.map((item, index) => (
                    <img src={`${item.urls.small}`} alt="images" key={index} />
                ))
            : <p>there are no images added yet</p> }
            <button onClick={() => console.log(images) } >Get images</button>
        </div>
    )
}