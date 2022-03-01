import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()
    return (
        <input>
        </input>
    )
}

export default SearchForm