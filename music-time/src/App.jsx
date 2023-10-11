import "./App.css"
import { useState } from "react"
import Song from "./components/Song/Song"
import Container from "./components/Container/Container"
import SongForm from "./components/SongForm/SongForm"
import SongFormExtended from "./components/SongForm/SongFormExtended"
const songsData = [
	{
		title: "Maggot Brain",
		artist: "Parliament Funkadelic",
		price: 24,
		genre: "Funk",
		isGood: true,
		id: crypto.randomUUID(),
	},
]

function App() {
	const [songs, setSongs] = useState(songsData)
	const [showForm, setShowForm] = useState(false)

	const handleAddSong = (song) => {
		const copy = [...songs]
		copy.push(song)
		setSongs(copy)
	}

	const handleDelete = (id) => {
		const newSongs = songs.filter((song) => song.id !== id)
		setSongs(newSongs)
	}

	return (
		<>
			<h1>Songs. They rythm your life. :)</h1>

			<button onClick={() => setShowForm(!showForm)}>Add a song</button>

			{showForm && <SongFormExtended addSong={handleAddSong} />}

			<Container>
				{songs.map((song) => {
					return <Song key={song.id} song={song} handleDelete={handleDelete} />
				})}
			</Container>
		</>
	)
}

export default App
