import React from 'react';
import Quote from './Quote';
import Table from 'react-bootstrap/Table';

const QuoteList = ({ likeQuote, quotes, likedQuotes }) => {
    return (
        <Table striped border hover>
            <tbody>
                { quotes.map( (quote, index) => {
                    return <Quote
                                quote={quote}
                                likeQuote={likeQuote}
                                key={index}
                                liked={likedQuotes.includes(quote)}
                                />
                })}
            </tbody>
        </Table>
    );
};

export default QuoteList;