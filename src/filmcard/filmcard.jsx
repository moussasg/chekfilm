import React from "react"
import classes from "./index.module.css"
export default function FilmCard({ category , name, description, image }) {
	return ( // categori , name , descr... , djebnahom m form t3 filmform
		<div className={classes.container}>
			<div>
				{category}:{name}
			</div>
			<img src={image} alt={name} />
			<div>{description}</div>
		</div>
	)
}