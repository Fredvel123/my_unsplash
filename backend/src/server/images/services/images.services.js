import url_keys from '../../../config/url_api/url_keys.js'
import axios from 'axios';


export const discoverImages = async (req, res) => {
    const url = `${url_keys.url}/photos/?client_id=${url_keys.secret_key}`
    try {
        const request = await axios.get(url);
        const response = await request.data;
        res.json(response)
    } catch (err) {
        res.json(err)
    }
}

export const searchImages = async (req, res) => {
    const {query} = req.params;
    const url = `${url_keys.url}/search/photos?query=${query}&client_id=${url_keys.secret_key}`
    try {
        const request = await axios.get(url);
        const response = await request.data;
        res.json(response);
    } catch (err) {
        res.json(err)
    }
}


