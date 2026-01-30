import PublicLayout from "../layouts/PublicLayout";

export default function About() {
    return (
        <PublicLayout>
            <div className="bg-white text-[#444]">

                {/* Hero Section */}
                <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-8 text-gray-800">
                        We pioneered the discount broking model in India.<br />
                        Now, we are breaking ground with our technology.
                    </h1>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 pb-20 border-t border-gray-100 pt-20">
                    <div className="space-y-6 text-[1.05rem] leading-8">
                        <p>
                            We kicked off operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Tradify, a combination of Trade and Modify.
                        </p>
                        <p>
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        </p>
                        <p>
                            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    <div className="space-y-6 text-[1.05rem] leading-8">
                        <p>
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                        </p>
                        <p>
                            <a href="#" className="text-blue-600 hover:text-black transition font-medium">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                        </p>
                        <p>
                            And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#" className="text-blue-600 hover:text-black transition font-medium">blog</a> or see what the media is <a href="#" className="text-blue-600 hover:text-black transition font-medium">saying about us</a>.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-gray-50 py-20 border-t border-gray-100">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-12">People</h2>

                        <div className="flex flex-col items-center">
                            <div className="rounded-full overflow-hidden w-64 h-64 mb-6 border border-gray-200">
                                {/* Placeholder for Founder Image - Using a generic person icon if no image available, or a reliable placeholder */}
                                <img
                                    src="https://zerodha.com/static/images/nithin-kamath.jpg"
                                    alt="Nithin Kamath"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/256?text=Founder'; e.target.className = 'w-full h-full object-cover'; }}
                                />
                            </div>
                            <h3 className="text-xl font-medium text-gray-800">Nithin Kamath</h3>
                            <p className="text-gray-500 mt-2 text-sm">Founder, CEO</p>
                        </div>

                        <div className="max-w-3xl mx-auto mt-12 text-[1.05rem] leading-8 text-left text-gray-600 space-y-4">
                            <p>
                                Nithin bootstrapped and founded Tradify in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Tradify has changed the landscape of the Indian broking industry.
                            </p>
                            <p>
                                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                            </p>
                            <p>
                                Playing basketball is his zen.
                            </p>
                            <p className="font-medium text-center pt-4">
                                Connect on <a href="#" className="text-blue-600 hover:text-black transition">Homepage</a> / <a href="#" className="text-blue-600 hover:text-black transition">TradingQnA</a> / <a href="#" className="text-blue-600 hover:text-black transition">Twitter</a>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </PublicLayout>
    );
}
