import React from 'react';
import Octicon, {iconsByName} from '@primer/octicons-react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

interface Props {
    sortQuotes: (direction: number) => void,
    setShowLiked: (showLiked: boolean) => void,
    showLiked: boolean,
    touchScreen: boolean
}

const Nav: React.FC<Props> = (props) => {
    return (props.touchScreen
        ? <div>
            <span
                onClick={() => props.sortQuotes(1)}
                className="sort-arrow p-2 m-1"
                >
                <Octicon
                    icon={iconsByName['chevron-up']}
                    size="medium"
                    />
            </span>
            <span
                onClick={() => props.sortQuotes(0)}
                className="sort-arrow p-2 m-1"
                >
                <Octicon
                    icon={iconsByName['chevron-down']}
                    size="medium"
                    />
            </span>
            <span
                onClick={() => props.setShowLiked(!props.showLiked)}
                className={"like-button p-1 mb-2 mr-4 float-right "
                    .concat(props.showLiked ? "like-button-liked" : "like-button-not-liked")}
                >
                <Octicon
                    icon={iconsByName['heart']}
                    size="medium"
                    />
            </span>
            </div>
        : <div>
            <OverlayTrigger
                key={"sort-by-shortest"}
                placement={"top"}
                overlay={
                    <Tooltip id={`sort-by-shortest`}>
                        Sort By Shortest
                    </Tooltip>
                }
                >
                <span
                    onClick={() => props.sortQuotes(1)}
                    className="sort-arrow p-2 m-1"
                    >
                    <Octicon
                        icon={iconsByName['chevron-up']}
                        size="medium"
                        />
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
                <span
                    onClick={() => props.sortQuotes(0)}
                    className="sort-arrow p-2 m-1"
                    >
                    <Octicon
                        icon={iconsByName['chevron-down']}
                        size="medium"
                        />
                </span>
            </OverlayTrigger>
            <OverlayTrigger
                key={"favorites"}
                placement={"top"}
                overlay={
                    <Tooltip id={`show-liked`}>
                        {props.showLiked ? "Show All" : "Favorites"}
                    </Tooltip>
                }
                >
                <span
                    onClick={() => props.setShowLiked(!props.showLiked)}
                    className={"like-button p-1 mb-2 mr-4 float-right "
                        .concat(props.showLiked ? "like-button-liked" : "like-button-not-liked")}
                    >
                    <Octicon
                        icon={iconsByName['heart']}
                        size="medium"
                        />
                </span>
            </OverlayTrigger>
        </div>
    );
};

export default Nav;