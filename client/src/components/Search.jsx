import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowLeft } from "react-icons/fa";
import useMobile from '../hooks/useMobile';

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSearchPage, setIsSearchPage] = useState(false);
    const [isMobile] = useMobile();
    const [isListening, setIsListening] = useState(false);
    const params = useLocation();
    const searchText = params.search.slice(3);

    useEffect(() => {
        const isSearch = location.pathname === "/search";
        setIsSearchPage(isSearch);
    }, [location]);

    const redirectToSearchPage = () => {
        navigate("/search");
    };

    const handleOnChange = (e) => {
        const value = e.target.value;
        const url = `/search?q=${value}`;
        navigate(url);
    };

    // 🎤 Voice Search Function
    const startVoiceSearch = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Your browser does not support voice search.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-IN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();
        setIsListening(true);

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript;
            setIsListening(false);

            // Navigate to search with spoken words
            const url = `/search?q=${speechResult}`;
            navigate(url);
        };

        recognition.onerror = () => {
            setIsListening(false);
            alert("Voice search error. Please try again.");
        };

        recognition.onend = () => setIsListening(false);
    };

    return (
        <div className='w-full min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200'>
            <div>
                {isMobile && isSearchPage ? (
                    <Link to={"/"} className='flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md'>
                        <FaArrowLeft size={20}/>
                    </Link>
                ) : (
                    <button className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200'>
                        <IoSearch size={22}/>
                    </button>
                )}
            </div>

            <div className='w-full h-full'>
                {!isSearchPage ? (
                    <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
                        <TypeAnimation
                            sequence={[
                                'Search "milk"', 1000,
                                'Search "bread"', 1000,
                                'Search "sugar"', 1000,
                                'Search "paneer"', 1000,
                                'Search "chocolate"', 1000,
                                'Search "curd"', 1000,
                                'Search "rice"', 1000,
                                'Search "egg"', 1000,
                                'Search "chips"',
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                ) : (
                    <div className='w-full h-full flex items-center'>
                        <input
                            type='text'
                            placeholder='Search for atta, dal, and more.'
                            autoFocus
                            defaultValue={searchText}
                            className='bg-transparent w-full h-full outline-none'
                            onChange={handleOnChange}
                        />
                        {/* 🎤 Voice Search Button */}
                        <button 
                            onClick={startVoiceSearch}
                            className={`ml-2 p-2 rounded-full ${isListening ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                        >
                            <FaMicrophone size={18}/>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
