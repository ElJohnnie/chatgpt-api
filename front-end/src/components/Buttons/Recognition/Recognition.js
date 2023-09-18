import { useEffect, useState } from "react";
import speechRecognition from "../../../usability/speechRecognition";
import './Recognition.css';

function Recognition({param}) {

    const [useParam, setUseParam] = useState(false);
    
    useEffect(() => {
        if(useParam) {
            speechRecognition();
        }
    });

    return (
        <button class="recognition-button" onClick={() => setUseParam(!useParam)}>
            { useParam ? (
            <span class="material-symbols-outlined">mic</span>
            ) : (
                <span class="material-symbols-outlined">
                mic_off
            </span>
            )}
        </button>
    );
}

export default Recognition;