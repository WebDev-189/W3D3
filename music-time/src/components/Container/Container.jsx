import React from "react"

function Container({ children, direction = "row" }) {
	const styling = {
		display: "flex",
		flexDirection: direction,
		flexWrap: "wrap",
		gap: "2rem",
		justifyContent: "center",
	}
	return <div style={styling}>{children}</div>
}

export default Container
