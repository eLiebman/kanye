import React from 'react';
import Octicon, {iconsByName} from '@primer/octicons-react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Nav = ({sortQuotes, setShowLiked, showLiked, touchScreen}) => {
    return (touchScreen
            ? <div>
                <span onClick={() => sortQuotes(1)} className="sort-arrow p-2 m-1">
                    <Octicon icon={iconsByName['chevron-up']} size="medium" className="sort-arrow" />
                </span>
                <span onClick={() => sortQuotes(0)} className="sort-arrow p-2 m-1">
                    <Octicon icon={iconsByName['chevron-down']} size="medium" className="sort-arrow" />
                </span>
                <span onClick={() => setShowLiked(!showLiked)} className="like-button p-1 mb-2 mr-4 float-right">
                    <Octicon icon={iconsByName['heart']} size="medium" className={showLiked ? "like-button-liked" : "like-button-not-liked"} />
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
                    <span onClick={() => sortQuotes(1)} className="sort-arrow p-2 m-1">
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
                    <span onClick={() => sortQuotes(0)} className="sort-arrow p-2 m-1">
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
            </div>
    );
};

export default Nav;