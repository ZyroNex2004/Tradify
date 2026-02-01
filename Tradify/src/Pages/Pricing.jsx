import React, { useState } from "react";
import PublicLayout from "../layouts/PublicLayout";
import pricingEqImg from "../assets/pricing-eq.svg";
import otherTradesImg from "../assets/other-trades.svg";
import OpenAccount from "../Components/OpenAccount";

export default function Pricing() {
    const [activeTab, setActiveTab] = useState("equity");

    // Handle hash on mount and change
    React.useEffect(() => {
        const hash = window.location.hash.replace('#tab-', '');
        if (["equity", "currency", "commodity"].includes(hash)) {
            setActiveTab(hash);
        }
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        window.location.hash = `tab-${tab}`;
    };

    const charges = {
        equity: [
            {
                category: "Brokerage",
                delivery: "Zero Brokerage",
                intraday: "0.03% or ₹20/exec. order whichever is lower",
            },
            {
                category: "STT/CTT",
                delivery: "0.1% on buy & sell",
                intraday: "0.025% on the sell side",
            },
            {
                category: "Transaction charges",
                delivery: "NSE: 0.00335%, BSE: 0.00375%",
                intraday: "NSE: 0.00335%, BSE: 0.00375%",
            },
            {
                category: "GST",
                delivery: "18% on (brokerage + SEBI charges + transaction charges)",
                intraday: "18% on (brokerage + SEBI charges + transaction charges)",
            },
            {
                category: "SEBI charges",
                delivery: "₹10 / crore",
                intraday: "₹10 / crore",
            },
            {
                category: "Stamp charges",
                delivery: "0.015% or ₹1500 / crore on buy side",
                intraday: "0.003% or ₹300 / crore on buy side",
            },
        ],
        currency: [
            {
                category: "Brokerage",
                futures: "0.03% or ₹20/exec. order whichever is lower",
                options: "0.03% or ₹20/exec. order whichever is lower",
            },
            {
                category: "STT/CTT",
                futures: "Nil",
                options: "Nil",
            },
            {
                category: "Transaction charges",
                futures: "NSE: 0.0009% | BSE: 0.00022%",
                options: "NSE: 0.035% | BSE: 0.001%",
            },
            {
                category: "GST",
                futures: "18% on (brokerage + SEBI charges + transaction charges)",
                options: "18% on (brokerage + SEBI charges + transaction charges)",
            },
            {
                category: "SEBI charges",
                futures: "₹10 / crore",
                options: "₹10 / crore",
            },
            {
                category: "Stamp charges",
                futures: "0.002% or ₹200 / crore on buy side",
                options: "0.0001% or ₹10 / crore on buy side",
            },
        ],
        commodity: [
            {
                category: "Brokerage",
                futures: "0.03% or ₹20/exec. order whichever is lower",
                options: "0.03% or ₹20/exec. order whichever is lower",
            },
            {
                category: "STT/CTT",
                futures: "0.01% on sell side (Non-Agri)",
                options: "0.05% on sell side",
            },
            {
                category: "Transaction charges",
                futures: "MCX: 0.0021%",
                options: "MCX: 0.0418%",
            },
            {
                category: "GST",
                futures: "18% on (brokerage + SEBI charges + transaction charges)",
                options: "18% on (brokerage + SEBI charges + transaction charges)",
            },
            {
                category: "SEBI charges",
                futures: "₹10 / crore",
                options: "₹10 / crore",
            },
            {
                category: "Stamp charges",
                futures: "0.002% or ₹200 / crore on buy side",
                options: "0.003% or ₹300 / crore on buy side",
            },
        ],
    };

    return (
        <PublicLayout>
            <div className="bg-white text-gray-800">

                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl text-gray-700 font-semibold mb-4">Charges</h1>
                    <p className="text-lg text-gray-500 mb-12">List of all charges and taxes</p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="flex flex-col items-start">
                            <img src={pricingEqImg} alt="Free Equity" className="w-40 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Free equity delivery</h3>
                            <p className="text-gray-500 text-sm">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <img src={otherTradesImg} alt="Intraday" className="w-40 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Intraday and F&O trades</h3>
                            <p className="text-gray-500 text-sm">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <img src={pricingEqImg} alt="MF" className="w-40 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Free direct MF</h3>
                            <p className="text-gray-500 text-sm">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                        </div>
                    </div>
                </div>

                {/* Tabs and Tables Section */}
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="flex space-x-12 border-b mb-8 text-lg text-gray-500 relative">
                        {["equity", "currency", "commodity"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`pb-4 capitalize hover:text-blue-600 transition relative ${activeTab === tab ? "text-blue-600 font-medium" : ""
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600 border border-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {activeTab === 'equity' ? (
                                        <>
                                            <th className="p-4 border font-semibold">Category</th>
                                            <th className="p-4 border font-semibold">Equity delivery</th>
                                            <th className="p-4 border font-semibold">Equity intraday</th>
                                        </>
                                    ) : activeTab === 'currency' ? (
                                        <>
                                            <th className="p-4 border font-semibold">Category</th>
                                            <th className="p-4 border font-semibold">Currency futures</th>
                                            <th className="p-4 border font-semibold">Currency options</th>
                                        </>
                                    ) : (
                                        <>
                                            <th className="p-4 border font-semibold">Category</th>
                                            <th className="p-4 border font-semibold">Commodity futures</th>
                                            <th className="p-4 border font-semibold">Commodity options</th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {charges[activeTab].map((row, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition">
                                        <td className="p-4 border font-medium text-gray-800">{row.category}</td>
                                        <td className="p-4 border">{row.delivery || row.futures}</td>
                                        <td className="p-4 border">{row.intraday || row.options}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Charges Explained / Additional Info */}
                <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-500 leading-relaxed">
                    <h3 className="text-xl text-gray-700 font-medium mb-4">Charges explained</h3>
                    <div className="space-y-4">
                        <p><strong className="text-gray-700">Securities Transaction Tax (STT)</strong>: Tax levied by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                        <p><strong className="text-gray-700">Transaction/Turnover Charges</strong>: Exchange transaction charges + Clearing corporations charges. Generally includes a small fee charged by the exchange.</p>
                        <p><strong className="text-gray-700">GST</strong>: Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges).</p>
                        <p><strong className="text-gray-700">SEBI Charges</strong>: Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                        <p><strong className="text-gray-700">Stamp charges</strong>: Stamp duty by the government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                    </div>
                </div>

                <OpenAccount />

            </div>
        </PublicLayout>
    );
}
