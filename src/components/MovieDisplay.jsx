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
	const { Title, Poster, Writer, Genre, Released, Plot } = movie ? movie : {};
	return !!movie && <div>
		<h1>{Title}</h1>
		<img src={Poster} alt={Title}></img>
		<h3>{Writer}</h3>
		<h3>{Genre}</h3>
		<h3>{Released}</h3>
		<p>{Plot}</p>
	</div>
}

export default MovieDisplay