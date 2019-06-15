import React from 'react';
import Quote from './Quote';
import Table from 'react-bootstrap/Table';

const QuoteList = ({ likeQuote, quotes, likedQuotes, touchScreen }) => {
    return (
        <Table striped hover>
            <tbody>
                { quotes.map( (quote, index) => {
                    return <Quote
                                quote={quote}
                                likeQuote={likeQuote}
                                key={index}
                                index={index}
                                liked={likedQuotes.includes(quote)}
                                touchScreen={touchScreen}
                                />
                })}
            </tbody>
        </Table>
    );
};

export default QuoteList;