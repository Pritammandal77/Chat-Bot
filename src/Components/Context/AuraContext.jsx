import { useState } from "react";
import { createContext, useEffect } from "react";
import axios from 'axios'


export const AuraContext = createContext();

export const AuraProvider = ({ children }) => {

    const [inputData, setInputData] = useState("")

    const [data, setData] = useState([]);
 
    const newInformation = (data) => {
        setInputData(data) 
    }

    const apiKey = import.meta.env.VITE_API_KEY;

    const handleSearch = async () => {
       if(inputData){
        console.log("Getting data")
        try {
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
                method: "post",
                data: {
                    contents: [
                        {
                            parts: [{ text: `${inputData}` }]
                        }
                    ]
                },
            });
            console.log(response.data);
            // console.log(response.data.candidates[0].content.parts[0]);
            setData(response.data.candidates[0].content.parts[0])
            
        } catch (error) {
            console.error("Error occurred:", error);
        }
       } 
    };
    
    useEffect(() => {
        handleSearch()
    }, [inputData]);



    return <AuraContext.Provider value={{data, newInformation, handleSearch,inputData}}>
        {children}
    </AuraContext.Provider>
}