import { useState } from "react"
import Container from "./../Container/Container"

function SongForm({ addSong }) {
	const [title, setTitle] = useState("")
	const [artist, setArtist] = useState("")
	const [price, setPrice] = useState(0)
	const [genre, setGenre] = useState("default")
	const [isGood, setIsGood] = useState(false)

	const [message, setMessage] = useState([])

	const handleTitle = (event) => setTitle(event.target.value)
	const handleArtist = (event) => setArtist(event.target.value)
	// Specific case here if we really want to store Number and not String
	const handlePrice = (event) => setPrice(event.target.valueAsNumber)
	const handleGenre = (event) => setGenre(event.target.value)
	// Specific case for checkbox and radio
	const handleIsGood = (event) => setIsGood(event.target.checked)

	const resetInputs = () => {
		setTitle("")
		setArtist("")
		setPrice(0)
		setGenre("default")
		setIsGood(false)
	}

	const handleSubmit = (event) => {
		// We always need to prevent the default Action of a Form
		// Which is to send an Http request, reloading the page.
		event.preventDefault()
		const states = { title, artist, price, genre }
		const response = []
		for (const key in states) {
			if (!states[key] || states[key] === "default") {
				response.push(<p>Error on {key}</p>)
			}
		}
		if (response.length) {
			setMessage(response)
			setTimeout(() => {
				setMessage([])
			}, 2000)
			return
		}

		// if (!title) {
		// 	setMessage("Please provide a title.")
		// 	setTimeout(() => setMessage(""), 2000)
		// 	return
		// }

		const oneSong = {
			title: title,
			artist,
			price,
			genre,
			isGood,
			id: crypto.randomUUID(),
		}

		addSong(oneSong)

		resetInputs()
	}

	return (
		<form onSubmit={handleSubmit}>
			<Container direction="column">
				<div>
					<label htmlFor="title">Title:</label>
					<input
						type="text"
						id="title"
						value={title}
						// onChange={(event) => setTitle(event.target.value)}
						onChange={handleTitle}
					/>
				</div>

				<div>
					<label htmlFor="artist">Artist:</label>
					<input
						type="text"
						id="artist"
						onChange={handleArtist}
						value={artist}
					/>
				</div>
				<div>
					<label htmlFor="price">Price:</label>
					<input
						type="number"
						min="0"
						id="price"
						onChange={handlePrice}
						value={price}
					/>
				</div>

				<div>
					<select name="" id="genre" value={genre} onChange={handleGenre}>
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
						onChange={handleIsGood}
						checked={isGood}
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
