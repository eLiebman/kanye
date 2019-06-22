import React from 'react';
import kanye from '../kanye.png';
import Octicon, {Heart} from '@primer/octicons-react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

interface Props {
    quote: string,
    likeQuote: (quote: string) => void,
    liked: boolean,
    index: number,
    touchScreen: boolean
}

const Quote: React.FC<Props> = (props) => {

    return (
        <tr className="quote-row">
            <td>
                <img
                    src={kanye}
                    alt="kanye"
                    className="kanye-img float-left align-middle d-none d-md-block"
                    />
            </td>
            <td>
                <p className="lead d-inline-block mt-3 w-75">
                    <strong>
                        {props.quote}
                    </strong>
                </p>
                {props.touchScreen
                    ? <span
                        onClick={() => props.likeQuote(props.quote)}
                        className={"float-right like-button my-auto p-4 "
                            .concat(props.liked ? "like-button-liked" : "like-button-not-liked")}
                        >
                        <Octicon icon={Heart} size="medium" />
                      </span>
                    : <OverlayTrigger
                        key={props.index}
                        placement={"right"}
                        overlay={
                            <Tooltip id={`save-${props.index}`}>
                                {props.liked?"Saved":"Save"}
                            </Tooltip>
                        }
                        >
                        <span
                            onClick={() => props.likeQuote(props.quote)}
                            className={"float-right like-button my-auto p-4 "
                                .concat(props.liked ? "like-button-liked" : "like-button-not-liked")}
                            >
                            <Octicon icon={Heart} size="medium" />
                        </span>
                      </OverlayTrigger>
                }
            </td>
        </tr>
    );
};

export default Quote;