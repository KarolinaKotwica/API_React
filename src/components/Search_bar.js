import { useState } from "react";

const Search_bar = ({onSubmit}) => {
    const [term, setTerm] = useState('')

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const handleFromSubmit = (e) => {
        e.preventDefault();
         
        onSubmit(term);
    }

    return (
        <div>
            <form onSubmit={handleFromSubmit}>
                <input value={term} type='text' onChange={handleChange}></input>
            </form>
        </div>
    )
}


export default Search_bar;