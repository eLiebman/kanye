import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QuoteList from './Components/QuoteList';
import Octicon, {iconsByName} from '@primer/octicons-react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function App() {
    const [showLiked, setShowLiked] = useState(false);
    const [likedQuotes, setLikedQuotes] = useState([]);
    const [quotes, setQuotes] = useState([]);

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
        if (quotes.length < 10) {
            getQuote()
                .then(res => {
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
            
            <h1 className="mx-auto text-center display-4 my-5 text-gothic">Kanye Says:</h1>
            
            <OverlayTrigger
                key={"sort-by-shortest"}
                placement={"top"}
                overlay={
                    <Tooltip id={`sort-by-shortest`}>
                        Sort By Shortest
                    </Tooltip>
                }
            >
                <span onClick={() => sortQuotes(1)} className="sort-arrow p-2 mb-2">
                    <Octicon icon={iconsByName['chevron-up']} size="medium" className="sort-arrow" />
                </span>    
            </OverlayTrigger>
            
            <OverlayTrigger
                key={"sort-by-longest"}
                placement={"top"}
                overlay={
                    <Tooltip id={`sort-by-longest`}>
                        Sort By Longest
                    </Tooltip>
                }
            >
                <span onClick={() => sortQuotes(0)} className="sort-arrow p-2 mb-2">
                    <Octicon icon={iconsByName['chevron-down']} size="medium" className="sort-arrow" />
                </span>
            </OverlayTrigger>

            

            <OverlayTrigger
                key={"favorites"}
                placement={"top"}
                overlay={
                    <Tooltip id={`show-liked`}>
                        {showLiked ? "Show All" : "Favorites"}
                    </Tooltip>
                }
            >
                <span onClick={() => setShowLiked(!showLiked)} className="like-button p-1 mb-2 mr-4 float-right">
                    <Octicon icon={iconsByName['heart']} size="medium" className={showLiked ? "like-button-liked" : "like-button-not-liked"} />
                </span>    
            </OverlayTrigger>
            
            <QuoteList
                quotes={showLiked?likedQuotes:quotes}
                likeQuote={ likeQuote }
                likedQuotes={likedQuotes}
                />
            {showLiked
                ?null
                :<Button block size="large" className="mb-5" onClick={refreshQuotes}>
                    <p className="lead my-2">Refresh Quotes</p>
                </Button>
            }
        </div>
    );
}
