import React from "react";


function Filter({searching}){


    return (
        <form className="searchfor">
            <input type="text" className="search-input" onChange={searching} placeholder="Search for Transactions here"></input>
            <button>Search</button>
        </form>
    )
}

export default Filter