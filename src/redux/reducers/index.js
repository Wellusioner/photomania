import { combineReducers } from 'redux'
import Action from './../actions'

const initialState = {
    images: [],
    isFetched: true,
    isLoading: false,
    error: null
};
const fetchImage = (state=initialState, action) => {

    switch(action.type){

        case Action.fetchImage.REQUEST:
            return {
                ...state,
                images: [],
                isFetched: false
            };
        case Action.fetchImage.SUCCESS:
            return {
                ...state,
                images: [...action.payload],
                isFetched: true
            };
        case Action.fetchImage.ERROR:
            return {
                ...state,
                error: action.payload
            };
        case Action.addImage.REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Action.addImage.SUCCESS:
            return {
                ...state,
                images: [...state.images, ...action.payload],
                isLoading: false
            };
        default:
            return state
    }
};

export default combineReducers({
    fetchImage
});