import * as actions from './actionTypes';

//arrow function
// export const addMovies = (movieData,id) => ({
//         type : actions.ADD_MOVIE,
//         payload : {
//         id : id,
//         movieName : movieData.name,
//         year : movieData.year
//       }
// });

//normal function
export function addMovies(movieData,id) {
    return {
        type : actions.ADD_MOVIE,
        payload : {
        id : id,
        movieName : movieData.name,
        year : movieData.year
      }
    }
}

export function deleteMovies(id) {
    return {
        type : actions.DELETE_MOVIE,
        payload : {
        id : id
      }
    }
}