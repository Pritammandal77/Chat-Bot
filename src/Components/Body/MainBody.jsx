import React, { useContext, useRef } from 'react';
import './MainBody.css'
import { AuraContext } from '../Context/AuraContext';
import Home from '../Home/Home';


function MainBody() {

    const { data , inputData } = useContext(AuraContext)
    console.log(inputData)

    let formattedText;
    if (data.text) {
        formattedText = data.text.replaceAll(/\*\*(.*?)\*\*/g, (match, word) => `<b>${word}</b>`)
            .replaceAll(/\*\s*(.*?)\s*\*/g, '<ul><li>$1</li></ul>')
            .replaceAll("`", ' ')
    }

    return (
        <>
            <div className="container">
                {data.text ? (
                    <div className="responseContainer">
                        <pre dangerouslySetInnerHTML={{ __html: formattedText }} className="response" />
                    </div>

                ) : (
                    <Home/>
                )}

            </div>
        </>
    );
}

export default MainBody;
