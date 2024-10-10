// src/Marquee.js
import React from 'react';
import './Marquee.css';

const Marquee = () => {
    return (
        <div className="marquee">
            <div className="marquee-content">
                <span>Latest News: Headline of Latest News Article 1 - Time: 10:30 AM, 10th Oct 2024</span>
                <span>Headline of Latest News Article 2 - Time: 09:00 AM, 10th Oct 2024</span>
                <span>Headline of Latest News Article 3 - Time: 08:15 AM, 10th Oct 2024</span>
            </div>
        </div>
    );
};

export default Marquee;
