import { useState } from "react";
import './Search_bar.css'

const Search_bar = ({onSubmit}) => {
    const [term, setTerm] = useState('')

    const handleChange = (e) => {
        setTerm(e.target.value.replace(/[0-9]/, ''))
    }

    const handleFromSubmit = (e) => {
        e.preventDefault();
         
        onSubmit(term);
    }

    return (
        <div>
            <form onSubmit={handleFromSubmit}>
                <input className="buttonSubmit" value={term} type='text' onChange={handleChange}></input>
            </form>
        </div>
    )
}


export default Search_bar;