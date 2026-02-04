import React from 'react';
import PublicLayout from '../layouts/PublicLayout';
import { Link } from 'react-router-dom';

export default function Products() {
    return (
        <PublicLayout>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-4">Tradify Products</h1>
                    <h3 className="text-xl text-gray-500 mb-8">Sleek, modern, and intuitive trading platforms</h3>
                    <p className="text-gray-600">
                        Check out our <a href="#" className="text-blue-600 hover:text-blue-700">investment offerings <i className="fas fa-arrow-right text-xs"></i></a>
                    </p>
                </div>

                <div className="border-t border-gray-100">
                    {/* Product 1: Kite */}
                    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-3/5">
                            {/* Placeholder for Kite Image */}
                            <div className="bg-blue-50 w-full aspect-[16/10] rounded-md flex items-center justify-center border border-blue-100">
                                <span className="text-blue-200 text-6xl font-bold">Kite</span>
                            </div>
                        </div>
                        <div className="md:w-2/5 md:pl-10">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Kite</h2>
                            <p className="text-gray-600 leading-7 mb-6">
                                Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
                            </p>
                            <div className="flex space-x-6 mb-6">
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Try demo <i className="fas fa-arrow-right text-xs"></i></a>
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Learn more <i className="fas fa-arrow-right text-xs"></i></a>
                            </div>
                            <div className="flex space-x-4">
                                <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition">
                                    <i className="fab fa-google-play"></i>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase">Get it on</div>
                                        <div className="text-sm font-semibold">Google Play</div>
                                    </div>
                                </button>
                                <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition">
                                    <i className="fab fa-apple"></i>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase">Download on the</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product 2: Console */}
                    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div className="md:w-3/5">
                            {/* Placeholder for Console Image */}
                            <div className="bg-purple-50 w-full aspect-[16/10] rounded-md flex items-center justify-center border border-purple-100">
                                <span className="text-purple-200 text-6xl font-bold">Console</span>
                            </div>
                        </div>
                        <div className="md:w-2/5 md:pr-10">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Console</h2>
                            <p className="text-gray-600 leading-7 mb-6">
                                The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
                            </p>
                            <div className="flex space-x-6 mb-6">
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Learn more <i className="fas fa-arrow-right text-xs"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Product 3: Coin */}
                    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-3/5">
                            {/* Placeholder for Coin Image */}
                            <div className="bg-green-50 w-full aspect-[16/10] rounded-md flex items-center justify-center border border-green-100">
                                <span className="text-green-200 text-6xl font-bold">Coin</span>
                            </div>
                        </div>
                        <div className="md:w-2/5 md:pl-10">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Coin</h2>
                            <p className="text-gray-600 leading-7 mb-6">
                                Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
                            </p>
                            <div className="flex space-x-6 mb-6">
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Coin <i className="fas fa-arrow-right text-xs"></i></a>
                            </div>
                            <div className="flex space-x-4">
                                <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition">
                                    <i className="fab fa-google-play"></i>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase">Get it on</div>
                                        <div className="text-sm font-semibold">Google Play</div>
                                    </div>
                                </button>
                                <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition">
                                    <i className="fab fa-apple"></i>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase">Download on the</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product 4: Kite Connect API */}
                    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div className="md:w-3/5">
                            {/* Placeholder for API Image */}
                            <div className="bg-gray-50 w-full aspect-[16/10] rounded-md flex items-center justify-center border border-gray-100">
                                <span className="text-gray-300 text-6xl font-bold">API</span>
                            </div>
                        </div>
                        <div className="md:w-2/5 md:pr-10">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Kite Connect API</h2>
                            <p className="text-gray-600 leading-7 mb-6">
                                Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
                            </p>
                            <div className="flex space-x-6 mb-6">
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Kite Connect <i className="fas fa-arrow-right text-xs"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Product 5: Varsity mobile */}
                    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-3/5">
                            {/* Placeholder for Varsity Image */}
                            <div className="bg-blue-50 w-full aspect-[16/10] rounded-md flex items-center justify-center border border-blue-100">
                                <span className="text-blue-200 text-6xl font-bold">Varsity</span>
                            </div>
                        </div>
                        <div className="md:w-2/5 md:pl-10">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Varsity mobile</h2>
                            <p className="text-gray-600 leading-7 mb-6">
                                An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition">
                                    <i className="fab fa-google-play"></i>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase">Get it on</div>
                                        <div className="text-sm font-semibold">Google Play</div>
                                    </div>
                                </button>
                                <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition">
                                    <i className="fab fa-apple"></i>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase">Download on the</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                {/* The Zerodha Universe */}
                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <p className="text-xl text-gray-600 mb-8">Want to know more about our technology stack? Check out the <a href="#" className="text-blue-600 hover:text-blue-700">Zerodha.tech</a> blog.</p>

                    <h2 className="text-4xl text-gray-800 font-semibold mt-20 mb-4">The Zerodha Universe</h2>
                    <p className="text-gray-600 mb-12">Extend your trading and investment experience even further with our partner platforms</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                        <Link to="#" className="group">
                            <div className="h-16 w-32 bg-gray-100 mx-auto mb-4 flex items-center justify-center rounded text-gray-400 font-bold">Fund House</div>
                            <p className="text-xs text-gray-500 max-w-[200px] mx-auto">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                        </Link>
                        <Link to="#" className="group">
                            <div className="h-16 w-32 bg-gray-100 mx-auto mb-4 flex items-center justify-center rounded text-gray-400 font-bold">Streak</div>
                            <p className="text-xs text-gray-500 max-w-[200px] mx-auto">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                        </Link>
                        <Link to="#" className="group">
                            <div className="h-16 w-32 bg-gray-100 mx-auto mb-4 flex items-center justify-center rounded text-gray-400 font-bold">Sensibull</div>
                            <p className="text-xs text-gray-500 max-w-[200px] mx-auto">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                        </Link>
                        <Link to="#" className="group">
                            <div className="h-16 w-32 bg-gray-100 mx-auto mb-4 flex items-center justify-center rounded text-gray-400 font-bold">Smallcase</div>
                            <p className="text-xs text-gray-500 max-w-[200px] mx-auto">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                        </Link>
                        <Link to="#" className="group">
                            <div className="h-16 w-32 bg-gray-100 mx-auto mb-4 flex items-center justify-center rounded text-gray-400 font-bold">Tijori</div>
                            <p className="text-xs text-gray-500 max-w-[200px] mx-auto">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                        </Link>
                        <Link to="#" className="group">
                            <div className="h-16 w-32 bg-gray-100 mx-auto mb-4 flex items-center justify-center rounded text-gray-400 font-bold">Ditto</div>
                            <p className="text-xs text-gray-500 max-w-[200px] mx-auto">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                        </Link>
                    </div>

                    <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded mt-16 hover:bg-blue-700 transition">
                        Sign up now
                    </button>
                </div>
            </div>
        </PublicLayout>
    );
}
