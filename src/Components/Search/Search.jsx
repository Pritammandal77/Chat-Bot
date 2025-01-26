import React, { useContext, useState } from 'react';
import './Search.css'
import { AuraContext } from '../Context/AuraContext';

function Search() {

    const { newInformation } = useContext(AuraContext)

    const [inputValue, setInputValue] = useState("")

    //used to get the input"s value
    const handleInput = (e) => {
        setInputValue(e.target.value)
        console.log(typeof inputValue)
    }

    const handleSubmit = () => {
        newInformation(inputValue)
        console.log(inputValue)
        setInputValue("")
        alert("Getting Data , please wait ...")  
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <>
            <div className="searchContainer">
                <div className="searchDiv">
                    <input type="text" placeholder='Ask Anything To AuraAI...' className="input"
                        onChange={handleInput} value={inputValue}
                        onKeyDown={handleKeyDown} />
                    <i className="fa-regular fa-paper-plane" id="searchBtn"
                        onClick={handleSubmit}></i>
                </div>

            </div>

        </>
    );
}

export default Search;
