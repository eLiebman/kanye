import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QuoteList from './Components/QuoteList';
import Button from 'react-bootstrap/Button';
import Nav from './Components/Nav'

export default function App() {
    const [showLiked, setShowLiked] = useState(false);
    const [likedQuotes, setLikedQuotes] = useState([]);
    const [quotes, setQuotes] = useState([]);

    // This code allows us to see if the user is on a touchscreen
    // So we can avoid using tooltips on mobile
    const [touchScreen, setTouchScreen] = useState(false);
    window.addEventListener('touchstart', function onFirstTouch() {
        setTouchScreen(true);
        window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);

    const getQuote = async () =>  {
        return axios.get('https://api.kanye.rest')
        .then( res => res.data.quote)
    }

    const sortQuotes = direction => {
        // Sort only the currently visible quotes (likedQuotes? or all quotes?)
        let quotesToSort = showLiked?likedQuotes:quotes;
        let sortedQuotes;
        // Choose Direction
        if (direction === 1) {
            sortedQuotes = quotesToSort.sort((a, b) => a.length - b.length);
        } else if (direction === 0) {
            sortedQuotes = quotesToSort.sort((a, b) => b.length - a.length);
        }
        // Set the appropriate state with sorted quotes
        if (showLiked) {
            setLikedQuotes([...sortedQuotes]);
        } else {
            setQuotes([...sortedQuotes]);
        }
        
    }

    const likeQuote = quote => {
        if (likedQuotes.includes(quote)) {
            let updatedLikedQuotes = likedQuotes.filter( q => q !== quote);
            setLikedQuotes(updatedLikedQuotes);
        } else {
            setLikedQuotes([...likedQuotes, quote]);
        }
    }

    const refreshQuotes = () => {
        setQuotes([]);
    }

    useEffect(() => {
        // Get Quotes until there are 10
        if (quotes.length < 10) {
            getQuote()
                .then(res => {
                    // Don't add duplicates
                    if (!quotes.includes(res)){
                        setQuotes([...quotes, res]);
                    } else {
                        setQuotes([...quotes]);
                    }
                });
        }
    }, [quotes]);

    return (
        <div className="App">
            <h1 className="mx-auto text-center display-4 my-5 text-gothic">Kanye Said What?</h1>
            <Nav
                sortQuotes={sortQuotes}
                showLiked={showLiked}
                setShowLiked={setShowLiked}
                touchScreen={touchScreen}
                />
            <QuoteList
                quotes={showLiked?likedQuotes:quotes}
                likeQuote={ likeQuote }
                likedQuotes={likedQuotes}
                touchScreen={touchScreen}
                />
            {!showLiked
                ?<Button block size="large" className="mb-5" onClick={refreshQuotes}>
                    <p className="lead my-2">Refresh Quotes</p>
                </Button>
                :likedQuotes.length === 0
                ?<h2 className="display-4 text-center">Go back and like some quotes!</h2>
                :null
            }
        </div>
    );
}
