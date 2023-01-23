import React from "react"
export default function FilterBtn({ handleFilter }) {
	return (
		<select onChange={(e) => handleFilter(e)}>
			<option value="all">All</option>
			<option value="guere">guere</option>
			<option value="action">action</option>
            <option value="documentaire">documentaire</option>
            <option value="aventure">aventure</option>
		</select>
	)
}
