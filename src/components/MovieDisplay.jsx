const MovieDisplay = (props) => {
	return props.movie && <div>
		<h1>{props.movie.Title}</h1>
	</div>
}

export default MovieDisplay