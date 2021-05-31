import './App.css';
import MoviesTable from './MoviesTable';
import AddMovie from './AddMovie';
import {useState, useEffect} from 'react'
import store from './store/store';
import {addMovies, deleteMovies} from './store/actions';

function App() {
  const[moviesList , setMoviesList] = useState([]);
  const[refresh , setRefresh] = useState([false]);

  const unsubscribe = store.subscribe(()=>{
    console.log('*******STORE CHANGED*********',store.getState())
    setMoviesList(store.getState());
    //setRefresh(false); 
  })

  useEffect(() => {   
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@ IN USEEFFECT');  
    store.dispatch({
      type: 'viewMovies',
      payload : {
        url: 'movieslist',
        method: 'GET',
        onSuccess: 'moviesLoaded',
        onError: 'movieFetchFailed'
      }
    }
    );
    setRefresh(false);  
  }, [refresh])

  const addMovie = (movieData) => {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@ IN ADDMOVIE');
    store.dispatch({
        type : 'addMovies',
        payload : {
        url: 'movieslist',
        method: 'POST',
        onSuccess: 'addMovies',
        onError: 'addMovieFailed',
          data : {
            id : store.getState().length + 1,
            movieName : movieData.name,
            year : movieData.year
          }
      }
    }
    );
    setRefresh(true);  
  }

  const deleteMovie = (id) => {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@ IN deleteMOVIE');
    store.dispatch({
        type : 'deleteMovieTriggered',
        payload : {
        url: 'movieslist',
        method: 'DELETE',
        onSuccess: 'deleteMovie',
        onError: 'deleteMovieFailed',
          data : {
            id : id
          }
      }
    }
    );
    setRefresh(true);
  }

  const onUpdate = async(movieData) => {
    console.log(movieData)

    //store.getState().find(movie => movie.id == movieData.id)
    await fetch(`http://localhost:5000/movieslist/${movieData.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(movieData)
    })
    setRefresh(true);            
  }

  return (
    <div className="App">
      <h1>MOVIE LIBRARY</h1>
      <header className="App-header">
        <h3>Movies in Store</h3>
        <AddMovie onAddMovie={addMovie}></AddMovie>
        <MoviesTable movies={moviesList} onDelete={deleteMovie} onUpdate={onUpdate}></MoviesTable>       
      </header>
    </div>
  );
}

export default App;
