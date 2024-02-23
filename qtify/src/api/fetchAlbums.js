import axios from "axios"

const ENDPOINT = "https://qtify-backend-labs.crio.do"

export const getTopAlbums = async () =>{
    try {
        let response = await axios.get(`${ENDPOINT}/albums/top`);
        return response.data;
    } catch (e) {
        return e.response;
    }
}

export const getNewAlbums = async () =>{
    try {
        let response = await axios.get(`${ENDPOINT}/albums/new`);
        return response.data;
    } catch (e) {
        return e.response;
    }
}

export const getSongs = async () =>{
    try {
        let response = await axios.get(`${ENDPOINT}/songs`);
        return response.data;
    } catch (e) {
        return e.response;
    }
}

export const getGenres = async () =>{
    try {
        let response = await axios.get(`${ENDPOINT}/genres`);
        return response.data
    } catch (e) {
        return e.response;
    }
}