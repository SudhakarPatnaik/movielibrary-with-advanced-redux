import {useState} from 'react'

const AddMovie = ({onAddMovie}) => {

const [name, setMovieName] = useState('');
const [year, setYear] = useState('');

    function onClickSubmit(){
        console.log(name,year);
        onAddMovie({name,year});
    }

     
 return(
     <div>
         <input type='text' placeholder='Movie Name' onChange={(e) => {setMovieName(e.target.value)}}/>
         <input type='number' placeholder='Release Year' onChange={(e) => {setYear(e.target.value)}}/>
         <input type='submit' value='Add Movie' onClick={onClickSubmit}/>
     </div>
 )
}

export default AddMovie;