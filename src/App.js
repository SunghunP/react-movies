import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'
import { useState } from 'react';

function App() {

  const [movie, setMovie] = useState(null)

  return (
    <div className="App">
      <Form />
      <MovieDisplay movie={movie} />
    </div>
  );
}

//http://www.omdbapi.com/?apikey=8e2fa05a&t=godfather

export default App;
