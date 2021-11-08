import React from 'react';
import './ranking.css';

const Ranking = () => {
    return (
        <div className="Ranking_container">
            <div className="Ranking_message">
                <span>Brandon, your current ranking is...</span>
            </div>
            <div className="Ranking_rank">
                <span>#1</span>
            </div>
        </div>
    )
}
export default Ranking;