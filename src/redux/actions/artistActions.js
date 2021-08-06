import axios from "axios"
import { 
        FETCH_ARTISTS_FAIL, 
        FETCH_ARTISTS_REQUEST, 
        FETCH_ARTISTS_SUCCESS
} from "../constants/constants";

const artistsEndpoint = 'https://itunes.apple.com/';

export const searchArtists = (term) => async(dispatch) => {
    try {
        dispatch({
            type: FETCH_ARTISTS_REQUEST
        });
        
        const response = await axios.get(`${artistsEndpoint}search?term=${term}`);
        
        dispatch({
            type: FETCH_ARTISTS_SUCCESS,
            payload: response.data.results
        });
        
    } catch (error) {
        dispatch({
            type: FETCH_ARTISTS_FAIL,
            payload: error.message
        })
    }
}