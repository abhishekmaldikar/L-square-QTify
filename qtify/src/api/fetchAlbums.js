import axios from "axios"


const API = "https://qtify-backend-labs.crio.do/albums/top"

export const getTopAlbums = async () =>{
    try {
        let response = await axios.get(API)
        return response.data
    } catch (e) {
        return e.response
    }
}