import { useState } from "react"
import Container from "./../Container/Container"

function SongForm({ addSong }) {
	const [formData, setFormData] = useState({
		title: "",
		artist: "",
		price: 0,
		genre: "default",
		isGood: false,
	})

	const [message, setMessage] = useState([])

	// const handleSubmit = (event) => {
	// 	// We always need to prevent the default Action of a Form
	// 	// Which is to send an Http request, reloading the page.
	// 	event.preventDefault()
	// 	const states = { title, artist, price, genre }
	// 	const response = []
	// 	for (const key in states) {
	// 		if (!states[key] || states[key] === "default") {
	// 			response.push(<p>Error on {key}</p>)
	// 		}
	// 	}
	// 	if (response.length) {
	// 		setMessage(response)
	// 		setTimeout(() => {
	// 			setMessage([])
	// 		}, 2000)
	// 		return
	// 	}

	// 	// if (!title) {
	// 	// 	setMessage("Please provide a title.")
	// 	// 	setTimeout(() => setMessage(""), 2000)
	// 	// 	return
	// 	// }

	// 	const oneSong = {
	// 		title: title,
	// 		artist,
	// 		price,
	// 		genre,
	// 		isGood,
	// 		id: crypto.randomUUID(),
	// 	}

	// 	addSong(oneSong)

	// 	resetInputs()
	// }

	const handleChange = (event) => {
		const key = event.target.id
		let value
		// if (event.target.type === 'checkbox' || event.target.type === 'radio') {
		if (["radio", "checkbox"].includes(event.target.type)) {
			value = event.target.checked
		} else if (event.target.type === "number") {
			value = event.target.valueAsNumber
		} else {
			value = event.target.value
		}
		setFormData({ ...formData, [key]: value })
	}

	return (
		<form onSubmit={handleSubmit}>
			<Container direction="column">
				<div>
					<label htmlFor="title">Title:</label>
					<input
						type="text"
						id="title"
						value={formData.title}
						// onChange={(event) => setTitle(event.target.value)}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="artist">Artist:</label>
					<input
						type="text"
						id="artist"
						onChange={handleChange}
						value={formData.artist}
					/>
				</div>
				<div>
					<label htmlFor="price">Price:</label>
					<input
						type="number"
						min="0"
						id="price"
						onChange={handleChange}
						value={formData.price}
					/>
				</div>

				<div>
					<select
						name=""
						id="genre"
						value={formData.genre}
						onChange={handleChange}>
						<option disabled value="default">
							Pick a Genre
						</option>
						<option value="funk">Funk</option>
						<option value="rock">Rock</option>
						<option value="indie">Indie</option>
						<option value="pop">Pop</option>
						<option value="metal">Metal</option>
						<option value="hiphop">Hip Hop</option>
						<option value="rnb">R&B</option>
					</select>
				</div>
				<div>
					<label htmlFor="isGood">Is it good?</label>
					<input
						type="checkbox"
						id="isGood"
						onChange={handleChange}
						checked={formData.isGood}
					/>
				</div>
				{/* <p>
					{[
						<span>Hi</span>,
						<p>Again</p>,
						<span>Hey</span>,
						<span>Heyhey</span>,
					]}
				</p> */}
				<div className="message">{message}</div>
				<button>Add That Song</button>
			</Container>
		</form>
	)
}

export default SongForm
