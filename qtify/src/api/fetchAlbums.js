import axios from "axios"


const TOPAPI = "https://qtify-backend-labs.crio.do/albums/top"
const NEWAPI = "https://qtify-backend-labs.crio.do/albums/new"

export const getTopAlbums = async () =>{
    try {
        let response = await axios.get(TOPAPI)
        return response.data
    } catch (e) {
        return e.response
    }
}

export const getNewAlbums = async () =>{
    try {
        let response = await axios.get(NEWAPI)
        return response.data
    } catch (e) {
        return e.response
    }
}