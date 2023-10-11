import "./App.css"
import Contact from "./components/Contact"
import jsonContacts from "./contacts.json"
import { useState } from "react"

function App() {
	const [contacts, setContacts] = useState(jsonContacts.slice(0, 2))
	const handleAddContact = () => {
		if (contacts.length === jsonContacts.length) return

		const arrayOfIds = contacts.map((contact) => contact.id)
		// console.log(arrayOfIds)
		// console.log(jsonContacts.length)
		const unknownContacts = jsonContacts.filter(
			(contact) => !arrayOfIds.includes(contact.id)
		)
		const randomContact =
			unknownContacts[Math.floor(Math.random() * unknownContacts.length)]

		setContacts([...contacts, randomContact])

		// const copy = [...contacts]
		// copy.push(randomContact)
		// setContacts(copy)
		// console.log(unknownContacts.length)
	}
	const handleSortByName = () => {
		const copy = [...contacts]
		copy.sort((a, b) =>
			a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
		)

		setContacts(copy)
		// setContacts(
		// 	contacts.toSorted((a, b) =>
		// 		a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
		// 	)
		// )
	}
	const handleSortByPop = () => {
		const copy = [...contacts]
		copy.sort((a, b) => b.popularity - a.popularity)
		setContacts(copy)
	}

	const handleDelete = (uniqueId) => {
		setContacts(contacts.filter((contact) => contact.id !== uniqueId))
	}

	return (
		<div className="App">
			<h1>LAB | React IronContacts</h1>
			<div>
				<button onClick={handleAddContact}>Add Contact</button>
				<button onClick={handleSortByName}>Sort by Name</button>
				<button onClick={handleSortByPop}>Sort by popularity</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>picture</th>
						<th>name</th>
						<th>popularity</th>
						<th>won Oscar</th>
						<th>won Emmy</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((contact) => {
						return (
							<Contact
								key={contact.id}
								contact={contact}
								handleDelete={handleDelete}
								setContacts={setContacts}
							/>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default App
