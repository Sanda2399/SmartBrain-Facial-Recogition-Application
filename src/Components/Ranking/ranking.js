import React from 'react';
import './ranking.css';

const Ranking = (props) => {
    return (
        <div className="Ranking_container">
            <div className="Ranking_message">
                <span>{`${props.UserName}, your current entry count is...`}</span>
            </div>
            <div className="Ranking_rank">
                <span>{`#${props.UserEntries}`}</span>
            </div>
        </div>
    )
}
export default Ranking;