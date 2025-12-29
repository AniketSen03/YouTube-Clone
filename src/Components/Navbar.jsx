import React, { useEffect, useState } from 'react'
import './sidebar.css'
import './navbar.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const Navbar = ({ settoggle }) => {
    const [searchQuery, setsearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggest, setShowSuggest] = useState(false);
    const navigate = useNavigate();

    const startVoiceSearch = () => {
        if (!SpeechRecognition) {
            alert("Mic not supported");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = "en-IN";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setsearchQuery(text);

            setTimeout(() => {
                navigate(`/search/${text}`);
            }, 100);
        };

        recognition.onerror = (e) => {
            console.error("Mic error:", e);
        };
    };


    const handleSearch = () => {
        if (!searchQuery.trim()) return;
        // for now just log (later we navigate or fetch)
        navigate(`/search/${searchQuery}`)

    }
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSuggestions([]);
            return;
        }

        const timer = setTimeout(async () => {
            const res = await axios.get(
                `https://suggestqueries.google.com/complete/search`,
                {
                    params: {
                        client: "firefox",
                        ds: "yt",
                        q: searchQuery,
                    },
                }
            );
            setSuggestions(res.data[1]);
            setShowSuggest(true);
        }, 400); // ✅ debounce

        return () => clearTimeout(timer);
    }, [searchQuery]);


    return (
        <>
            <div className='bg-zinc-950 flex items-center h-14 px-2 fixed z-10 w-full overflow-x-hidden '>
                <div className='flex items-center ml-2 linesgap'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#a1a1aa" className='bi bi-list ' onClick={() => { settoggle(prev => !prev) }} viewBox="0 0 16 16" >
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <div className='flex items-center justify-center mx-4'>
                        <img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" width="32" />
                        <h1 className=' text-zinc-300 font-semibold ml-2 creategap'>YOUTUBE <sup>IN</sup></h1>
                    </div>

                    {/* search bar */}

                    <div className='relative reducegap flex items-center justify-evenly md:mx-52'>
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={(e) => setsearchQuery(e.target.value)}
                            onFocus={() => setShowSuggest(true)}
                            onBlur={() => setTimeout(() => setShowSuggest(false), 200)}
                            className="removesearchbox border-zinc-500 border rounded-l-full px-4 py-2 bg-transparent text-white w-[18em] outline-none  sm:w-[24rem] md:w-[30rem] lg:w-[35rem]"
                            placeholder="Search"
                        />
                        {showSuggest && suggestions.length > 0 && (
                            <div className="absolute top-12 w-[35em] bg-zinc-900 rounded-lg z-50">
                                {suggestions.map((s, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setsearchQuery(s);
                                            navigate(`/search/${s}`);
                                            setShowSuggest(false);
                                        }} className="px-4 py-2 hover:bg-zinc-800 cursor-pointer"
                                    >
                                        🔍 {s}
                                    </div>
                                ))}
                            </div>
                        )}


                        <div className='circle bg-zinc-950 text-zinc-300 p-[14px] rounded-full cursor-pointer' onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg></div>
                        <button className='removemic bg-zinc-600 text-zinc-300 w-8 rounded-full pl-2 ml-2 h-8 cursor-pointer' onClick={startVoiceSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex text-zinc-300 items-center justify-evenly '>
                        <div className='removecreate flex items-center justify-evenly bg-zinc-700 w-24 rounded-full font-semibold mx-2 pr-2'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                            <h1>Create</h1></div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16" className='ml-5'>
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 
                        12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 
                        1 13 6c0 .88.32 4.2 1.22 6" className='text-zinc-200' />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle " viewBox="0 0 16 16" className='ml-5' >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar