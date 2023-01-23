import React from "react"
import classes from "./index.module.css"
export default function FilmForm({ Addfilm }) { // props jebnaha m home.jsx
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				margin: "20px",
			}}
		>  {/* hado nedohom props l filmcard*/}
		<form className={classes.container} onSubmit={(e) => Addfilm(e)}>
		<label htmlFor="id">id</label> 
<input type="text" name="id"  value="" /> {/* hado nedohom props l carcard*/}
<label htmlFor="name">name</label> {/* name */}
<input type="text" name="name"  value=""/>
<label htmlFor="description">description</label>{/* description */}
<input type="text" name="description"  value="" />
<label htmlFor="category">category</label> {/* category */}
				<input type="text" name="category"  value=""/>
				<button type="submit">Add Car</button>
			</form>
		</div>
	)
}
