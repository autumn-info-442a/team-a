import React from "react"
import './SearchBar.css'

const SearchBar = (props) => {
    return (
        <input
        type = "search"
        className = "search"
        placeholder = {"Search organization name"}
        onChange = {props.handleChange}
        />
    )
}

export default SearchBar