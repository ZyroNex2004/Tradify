
import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuDropdown({ onClose }) {
    return (
        <div className="absolute top-16 right-0 w-full sm:w-[600px] md:w-[800px] bg-white border shadow-lg rounded-b-lg z-50 p-8 animate-fade-in-down">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section (Products) has its own internal grid */}
                <div className="space-y-8">
                    <div className="flex items-start justify-between">
                        <Link to="/products/kite" className="flex flex-col items-center group text-center space-y-2 w-1/3" onClick={onClose}>
                            <img src="https://zerodha.com/static/images/products/kite-logo.svg" alt="Kite" className="h-10 w-10 mb-1" />
                            <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition">Kite</span>
                            <span className="text-xs text-gray-500">Trading platform</span>
                        </Link>
                        <Link to="/products/console" className="flex flex-col items-center group text-center space-y-2 w-1/3" onClick={onClose}>
                            <img src="https://zerodha.com/static/images/products/console.svg" alt="Console" className="h-10 w-10 mb-1" />
                            <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition">Console</span>
                            <span className="text-xs text-gray-500">Backoffice</span>
                        </Link>
                        <Link to="/products/kite-connect" className="flex flex-col items-center group text-center space-y-2 w-1/3" onClick={onClose}>
                            <img src="https://zerodha.com/static/images/products/kite-connect.svg" alt="Kite Connect" className="h-10 w-10 mb-1" />
                            <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition">Kite Connect</span>
                            <span className="text-xs text-gray-500">Trading APIs</span>
                        </Link>
                    </div>
                    <div className="flex items-start justify-center">
                        <Link to="/products/coin" className="flex flex-col items-center group text-center space-y-2" onClick={onClose}>
                            <img src="https://zerodha.com/static/images/products/coin.svg" alt="Coin" className="h-10 w-10 mb-1" />
                            <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition">Coin</span>
                            <span className="text-xs text-gray-500">Mutual funds</span>
                        </Link>
                    </div>
                </div>

                {/* Right Section (Links lists) */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Utilities */}
                    <div>
                        <h3 className="font-medium text-gray-800 mb-3">Utilities</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/brokerage-calculator" className="hover:text-blue-600 block" onClick={onClose}>Brokerage calculator</Link></li>
                            <li><Link to="/margin-calculator" className="hover:text-blue-600 block" onClick={onClose}>Margin calculator</Link></li>
                            <li><Link to="/sip-calculator" className="hover:text-blue-600 block" onClick={onClose}>SIP calculator</Link></li>
                            <li><Link to="/black-scholes-calculator" className="hover:text-blue-600 block" onClick={onClose}>Black Scholes calculator</Link></li>
                        </ul>
                    </div>

                    {/* Updates */}
                    <div>
                        <h3 className="font-medium text-gray-800 mb-3">Updates</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/z-connect" className="hover:text-blue-600 block" onClick={onClose}>Z-Connect blog</Link></li>
                            <li><Link to="/pulse" className="hover:text-blue-600 block" onClick={onClose}>Pulse News</Link></li>
                            <li><Link to="/circulars" className="hover:text-blue-600 block" onClick={onClose}>Circulars / Bulletin</Link></li>
                            <li><Link to="/ipos" className="hover:text-blue-600 block" onClick={onClose}>IPOs</Link></li>
                        </ul>
                    </div>

                    {/* Education */}
                    <div className="flex flex-col space-y-6">
                        <div>
                            <h3 className="font-medium text-gray-800 mb-2">Education</h3>
                            <Link to="/varsity" className="flex items-center space-x-2 group" onClick={onClose}>
                                <img src="https://zerodha.com/static/images/products/varsity.png" alt="Varsity" className="h-8 w-8" />
                                <span className="text-sm text-gray-600 group-hover:text-blue-600">Varsity</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/tradingqna" className="flex items-center space-x-2 group" onClick={onClose}>
                                <img src="https://zerodha.com/static/images/products/tqna.png" alt="TradingQnA" className="h-8 w-8" />
                                <span className="text-sm text-gray-600 group-hover:text-blue-600">TradingQnA</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
