import { useState } from 'react';

//function MoviesTable() {  // either like this
const MoviesTable = ({ movies, onDelete, onUpdate }) => { //or like this
    const [name, setName] = useState('');
    const [year, setYear] = useState('');

    const update = (id) => {
        onUpdate({ id, name, year });
    }
        return (
            <table >
                <tr>
                    <th>Movie Name</th>
                    <th>Year</th>
                </tr>
                {movies && movies.length > 1 && movies.map((movie) => (
                    <tr>
                        <td><input type='text' value={movie.name} onChange={(e) => { setName(e.target.value) }} /></td>
                        <td><input type='text' value={movie.year} onChange={(e) => { setYear(e.target.value) }} /></td>
                        <td>
                            <input type='button' value='Delete' onClick={() => { onDelete(movie.id) }} />
                            <input type='button' value='Update' onClick={() => { update(movie.id) }} />
                        </td>
                    </tr>
                ))
                }
            </table>
        );
    }

    export default MoviesTable;