import axios from "axios"
import Api from "../../services/Api";
import { 
        FETCH_ARTISTS_FAIL, 
        FETCH_ARTISTS_REQUEST, 
        FETCH_ARTISTS_SUCCESS
} from "../constants/constants";

export const searchArtists = (term) => async(dispatch) => {
    try {
        dispatch({
            type: FETCH_ARTISTS_REQUEST
        });
        
        const response = await Api.artist.search(term);
        
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