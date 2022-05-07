import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState } from 'react';
import { useEffect } from 'react';

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

  // function will run once when the component loads ONLY
  // WILL ONLY repeat if any value in the array changes.
  useEffect(() => {
    const moviesArray = ['The Dark Knight Rises', 'Spider-Man: No Way Home', 'Batman V Superman: Dawn Of Justice', 'Frozen', 'Everything Everywhere All at Once', 'Avengers: Infinity War', 'Avengers: Endgame']
    const item = moviesArray[Math.floor(Math.random()*moviesArray.length)]
    getMovie(item)
  }, [])

  return (
    <div className="App">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie} />
    </div>
  );
}

//http://www.omdbapi.com/?apikey=8e2fa05a&t=godfather

export default App;
