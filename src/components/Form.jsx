import { useState } from "react"

const Form = (props) => {
	const [formState, setFormState] = useState({
		searchTerm: ""
	})

	const handleChange = (event) => {
		// broken down into small components
		// make a new copy of current state
		const newState = {...formState};
		// update the copy
		newState[event.target.name] = [event.target.value];
		//set the state
		setFormState(newState);
		// one line way to do the above 
		// setFormState({...formState, [event.target.name]: [event.target.value]});
	}

	const handleSubmit = (event) => {
		// prevent refresh
		event.preventDefault();
		// pass searchTerm to get Movie 
		props.getMovie(formState.searchTerm);
		// reset form
		setFormState({
			searchTerm: ""
		});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					name="searchTerm" 
					placeholder="Movie Title" 
					value={formState.searchTerm}
					onChange={handleChange}
				/>
				<input 
					type="submit" 
					value="Submit" 
				/>
			</form>
		</div>
	)
}

export default Form