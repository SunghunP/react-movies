import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState } from 'react';

function App() {

  const API_KEY="8e2fa05a";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    // make API call
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
    );
    // convert the response to js object
    const data = await response.json();
    // updating the state to that object
    setMovie(data);
  }

  return (
    <div className="App">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie} />
    </div>
  );
}

//http://www.omdbapi.com/?apikey=8e2fa05a&t=godfather

export default App;
