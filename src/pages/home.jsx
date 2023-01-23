import React, {useState} from "react"
import Blacn from "../assets/bl.jpg"
import FilmCard from "../filmcard/filmcard"
import FilmForm from "../filmform/filmform"
import kdima from "../constant/const"
export default function Home () {
const [info , setFilm] = useState(kdima)/////init state avec nos film
const Addfilm = (e) => { 
e.preventDefault() // bach bla manrelodi la pages
    const formdata = new FormData(e.target) // formdata ndiroh dakhel fromentries
    const newfilm = Object.fromEntries(formdata)
    newfilm.image = Blacn // jai ajouter une image static
    setFilm([...info , newfilm ]) // add newfilm to useState	 
 }
 return (
    <>
    <h1> Film App </h1>
    <FilmForm Addfilm={Addfilm} />
    <div>
        {info.map((el) => ( 
        <FilmCard key={el.id} {...el} />
    ) )}
        </div>
    </>
 ) }