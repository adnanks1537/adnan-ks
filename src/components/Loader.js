import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onComplete();
                    return 100;
                }
                return prev + 1;
            });
        }, 30);
    }, [onComplete]);

    return (
        <section id="loader">
            <div className="loader-wrapper">
                <div className="loading-text">LOADING</div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="percentage">{progress}%</div>
            </div>
        </section>
    );
};

export default Loader;
