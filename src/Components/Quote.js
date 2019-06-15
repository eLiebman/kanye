import React from 'react';
import kanye from '../kanye.png';
import Octicon, {Heart} from '@primer/octicons-react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Quote = ({ quote, likeQuote, liked, index }) => {
    return (
        <tr className="quote-row">
            <td>
                <img src={kanye} alt="kanye" className="kanye-img float-left align-middle d-none d-md-block" />
            </td>
            <td>
                <p className="lead d-inline-block mt-3 w-75"><strong>{quote}</strong></p>
                <OverlayTrigger
                    key={index}
                    placement={"right"}
                    overlay={
                        <Tooltip id={`save-${index}`}>
                            {liked?"Saved":"Save"}
                        </Tooltip>
                    }
                >
                    <span className="float-right like-button my-auto p-4" onClick={() => likeQuote(quote)} >
                        <Octicon icon={Heart} size="medium" className={liked ? "like-button-liked" : "like-button-not-liked"} />
                    </span>
                </OverlayTrigger>
            </td>
        </tr>
    );
};

export default Quote;