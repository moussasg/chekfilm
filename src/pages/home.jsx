import React, {useState} from "react"
import FilterBtn from "../filtrebtn" // li tfiltri 
import Blacn from "../assets/bl.jpg" 
import FilmCard from "../filmcard/filmcard"//li atribut t3 filmfform 3tinaha lhada filmcard 
import FilmForm from "../filmform/filmform" // li fihom les inputs
import kdima from "../constant/const" // notre constanates
export default function Home () { // 'info' le nom de notre constante
const [info , setFilm] = useState(kdima)/////inite state avec nos film
const Addfilm = (e) => {  // setfilm ndirolha ldakhel(ancien cst , newfilm)
e.preventDefault() // bach bla manrelodi la pages
const formdata = new FormData(e.target) // formdata ndiroh dakhel fromentries
const newfilm = Object.fromEntries(formdata) // newfilm nzidoha dakhel setfilm
    newfilm.image = Blacn // j'ai ajouter une image static
    setFilm([...info , newfilm ]) // add newfilm to useState	 
 } // info c le nom de notre constante // 
 const handleFilter = (e) => {
    const filtervalue = e.target.value // get value from select
    if (filtervalue === "all") {
        setFilm(kdima) // si c all on remet tout voitures a l'etat initial
    } else {
        // filter les voiture qui ont la meme categorie que la valeur selection "filter"
        const filterefilm = kdima.filter((el) => el.catégorie === filtervalue)
        setFilm(filterefilm) // on set les voitures filtrer
    }
}
 return ( 
    <>
    <h1> Film App </h1>
<FilmForm Addfilm={Addfilm} />{/* 3tina lfilmform props Addfilm*/}
<FilterBtn handleFilter={handleFilter} />
    <div>
        {info.map((el) => ( 
        <FilmCard key={el.id} {...el} /> // 
    ) )}
        </div>
    </>
 ) }