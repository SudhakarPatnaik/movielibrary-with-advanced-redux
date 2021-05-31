import * as actions from './actionTypes';

export default function reducer(state=[], action) {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@ IN REDUCER', action.type);  
    switch(action.type) {
        /*case actions.VIEW_MOVIES : 
        return [action.payload];*/

        case 'moviesLoaded' : 
        return action.payload;

        case 'deleteMovieTriggered' : 
        return action.payload;

        // case actions.DELETE_MOVIE :
        //     return action.payload.id;

        case 'addMovies' :
            return [...state, 
                {id: action.payload.id, name : action.payload.movieName, year : action.payload.year}
            ];

        case actions.UPDATE_MOVIE :
            return state;

        default : return state;
    }
} 