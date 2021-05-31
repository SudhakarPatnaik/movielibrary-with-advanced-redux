import axios from 'axios';

const service = ({ dispatch }) => next => async action => {
    //console.log('NEXT : ', next);

    if (action.type === 'viewMovies') {
        console.log('ACTION :', action);
        next(action);
        const { url, method, data, onSuccess, onError } = action.payload;
        try {
            const baseURL = 'http://localhost:5000/';
            const response = await axios.request('http://localhost:5000/moviesList');
            dispatch({ type: onSuccess, payload: response.data });
        } catch (error) {
            dispatch({ type: onError, payload: error })
        }
    } else if (action.type === 'addMovies') {
        console.log('add movies');
        next(action);
        const { url, method, data, onSuccess, onError } = action.payload;
        try {
            const response = await axios.request('http://localhost:5000/movieslist', {
                method: method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            dispatch({ type: onSuccess, payload: data });
        } catch (error) {
            dispatch({ type: onError, payload: error })
        }
    } else if (action.type === 'deleteMovieTriggered') {
        console.log('delete movies');
        next(action);
        const { url, method, data, onSuccess, onError } = action.payload;
        try {
            const response = await  axios.request(`http://localhost:5000/movieslist/${data.id}`,{
                method: 'DELETE'
              }) 
        dispatch({ type: onSuccess, payload: data });
    } catch (error) {
        dispatch({ type: onError, payload: error })
    }
} else {
    console.log('NEXT : ACTION :', next, action);
return next(action);
    }
    
};

export default service;