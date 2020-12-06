import React from "react"

const SearchBar = (props) => {
    const BarStyling = {width:"20rem", background:"#F2F1F9", border:"none", padding:"0.5rem"}
    return (
        <input
        type = "search"
        className = "search"
        style = {BarStyling}
        placeholder = {"search organization"}
        onChange = {props.handleChange}
        />
    )
}

export default SearchBar