import React from 'react';
import Quote from './Quote';
import Table from 'react-bootstrap/Table';

interface Props {
    likeQuote: (quote: string) => void,
    quotes: string[],
    likedQuotes: string[],
    touchScreen: boolean
}

const QuoteList: React.FC<Props> = (props) => {
    return (
        <Table striped hover>
            <tbody>
                { props.quotes.map( (quote: string, index: number) => {
                    return <Quote
                        quote={quote}
                        likeQuote={props.likeQuote}
                        key={index}
                        index={index}
                        liked={props.likedQuotes.includes(quote)}
                        touchScreen={props.touchScreen}
                        />
                })}
            </tbody>
        </Table>
    );
};

export default QuoteList;