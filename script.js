// src/App.js
import React from 'react';
import 'style.css';
import Marquee from './Marquee';

const App = () => {
    return (
        <div>
            <header>
                <h1>Welcome to The Highway</h1>
                {/* Navigation goes here */}
            </header>

            <Marquee />

            <section id="latest-news">
                <h2>Latest News</h2>
                {/* Latest news articles go here */}
            </section>

            {/* Other sections */}
        </div>
    );
};

export default App;
