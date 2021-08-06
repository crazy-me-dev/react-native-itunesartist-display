import {
    searchArtistsReducer
} from "./artistReducers"

import {combineReducers } from "redux"

export default combineReducers({
    searchArtists: searchArtistsReducer
})