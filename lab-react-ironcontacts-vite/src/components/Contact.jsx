function Contact({ contact, handleDelete, setContacts }) {
	const handleDeleteAgain = (id) => {
		setContacts((currentState) => {
			return currentState.filter((contact) => contact.id !== id)
		})
	}

	return (
		<tr>
			<td>
				<img
					style={{
						width: "10rem",
					}}
					src={contact.pictureUrl}
					alt=""
				/>
			</td>
			<td>{contact.name}</td>
			<td>{contact.popularity.toFixed(2)}</td>
			<td>{contact.wonOscar && "Oscar"}</td>
			<td>{contact.wonEmmy ? "Emmy" : ""}</td>
			<td>
				<button onClick={() => handleDelete(contact.id)}>Delete</button>
				<button onClick={() => handleDeleteAgain(contact.id)}>
					Delete again
				</button>
			</td>
		</tr>
	)
}

export default Contact
