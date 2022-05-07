// // destructure the movie prop
// const MovieDisplay = ({ movie }) => {
//   if (movie) {
//     // destructuring properties of movie
//     const { Title, Poster, Writer } = movie;
//     return (
//       <div>
//         <h1>{Title}</h1>
//         <img src={Poster} alt={Title} />
//         <h3>{Writer}</h3>
//       </div>
//     );
//   } else {
//     return <></>
//   }
// };

// export default MovieDisplay;

const MovieDisplay = ({movie}) => {
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