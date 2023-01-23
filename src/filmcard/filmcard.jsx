import React from "react"
import classes from "./index.module.css"
export default function FilmCard({ category , name, description, image }) {
	return (
		<div className={classes.container}>
			<div>
				{category}:{name}
			</div>
			<img src={image} alt={name} />
			<div>{description}</div>
		</div>
	)
}