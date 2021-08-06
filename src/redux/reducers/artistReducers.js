import{
    FETCH_ARTISTS_FAIL,
    FETCH_ARTISTS_REQUEST,
    FETCH_ARTISTS_SUCCESS
} from "../constants/constants"

const initialState = {
    loading: false,
    artists: []
}

export const searchArtistsReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_ARTISTS_REQUEST:
            return{
                ...state,
                loading: true,                
            }
        
        case FETCH_ARTISTS_SUCCESS:
            return{
                ...state,
                loading: false,
                artists: action.payload
            }
        
        case FETCH_ARTISTS_FAIL:
            return {
                ...state,
                loading: false,
                artists: action.payload
            }
        
        default: 
            return state
    }
}
