import { ADD_TO_HISTORY } from "../actions/newsActions";

const initialState = {
    history: [],
}

const newsReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_TO_HISTORY:
            
            return{
             ...state,
             history: [action.payload, ...state.history].slice(0, 10),
            };
        
        default:
            return state;
    }
};

export default newsReducer;