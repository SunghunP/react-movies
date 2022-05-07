const MovieDisplay = ({movie, Title, Poster, Writer, Genre, Released, Plot}) => {
	return !!movie && <div>
		<h1>{movie.Title}</h1>
		<img src={movie.Poster} alt={movie.Title}></img>
		<h3>{movie.Writer}</h3>
		<h3>{movie.Genre}</h3>
		<h3>{movie.Released}</h3>
		<p>{movie.Plot}</p>
	</div>
}

export default MovieDisplay