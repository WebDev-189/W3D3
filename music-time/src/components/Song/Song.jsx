import React from "react"
import Container from "./../Container/Container"
import "./Song.css"

function Song({ song, handleDelete }) {
	return (
		<div className="Song">
			<h2>{song.title}</h2>
			<small>{song.artist}</small>
			<Container>
				<p>${song.price}</p>
				<p>{song.genre}</p>
				<p>{song.isGood ? "👍" : "👎"}</p>
				<p style={{ cursor: "pointer" }} onClick={() => handleDelete(song.id)}>
					🗑️
				</p>
			</Container>
		</div>
	)
}

export default Song
