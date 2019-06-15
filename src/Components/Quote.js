import React from 'react';
import kanye from '../kanye.png';
import Octicon, {Heart} from '@primer/octicons-react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Quote = ({ quote, likeQuote, liked, key }) => {
    return (
        <tr className="quote-row">
            <td>
                <img src={kanye} alt="kanye" className="kanye-img float-left d-inline align-middle" />
            </td>
            <td>
                <p className="lead d-inline-block mr-5 w-75 pablo-text"><strong>{quote}</strong></p>
                <OverlayTrigger
                    key={key}
                    placement={"right"}
                    overlay={
                        <Tooltip id={`save-${key}`}>
                            {liked?"Saved":"Save"}
                    </Tooltip>
                    }
                >
                    <span className="float-right like-button ml-5 my-auto p-3" onClick={() => likeQuote(quote)}>
                        <Octicon icon={Heart} size="medium" className={liked ? "like-button-liked" : "like-button-not-liked"} />
                    </span>
                </OverlayTrigger>
            </td>
        </tr>
    );
};

export default Quote;