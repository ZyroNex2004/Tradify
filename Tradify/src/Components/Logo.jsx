import React from 'react';

const Logo = ({ className = "h-8 w-auto" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={className}
            fill="none"
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" /> {/* Blue-600 */}
                    <stop offset="100%" stopColor="#1D4ED8" /> {/* Blue-700 */}
                </linearGradient>
            </defs>
            {/* Modern T shape */}
            <path
                d="M20 20 H80 A 5 5 0 0 1 85 25 V 40 A 5 5 0 0 1 80 45 H 60 V 85 A 5 5 0 0 1 55 90 H 45 A 5 5 0 0 1 40 85 V 45 H 20 A 5 5 0 0 1 15 40 V 25 A 5 5 0 0 1 20 20 Z"
                fill="url(#logoGradient)"
                stroke="none"
            />
            {/* Accent detail for specialized feel */}
            <path
                d="M60 45 V 20"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
            />
        </svg>
    );
};

export default Logo;
