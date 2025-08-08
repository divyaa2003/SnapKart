import React, { useState } from 'react';

export default function VoiceSearch({ onSearch }) {
    const [isListening, setIsListening] = useState(false);

    const startListening = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Your browser does not support Voice Recognition");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-IN'; // Indian English accent
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();
        setIsListening(true);

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript;
            setIsListening(false);
            onSearch(speechResult); // Pass result to parent
        };

        recognition.onerror = () => {
            setIsListening(false);
            alert("Voice recognition error. Please try again.");
        };

        recognition.onend = () => setIsListening(false);
    };

    return (
        <button 
            onClick={startListening} 
            style={{
                background: isListening ? "red" : "green",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "50%",
                cursor: "pointer"
            }}
        >
            🎤
        </button>
    );
}
