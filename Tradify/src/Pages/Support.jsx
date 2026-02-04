
import PublicLayout from "../layouts/PublicLayout";
import { Link } from "react-router-dom";

export default function Support() {
    const supportTopics = [
        {
            title: "Account Opening",
            icon: "fa-user-plus",
            links: [
                { name: "Getting started", url: "#" },
                { name: "Online", url: "#" },
                { name: "Offline", url: "#" },
                { name: "Charges", url: "#" },
                { name: "Company, Partnership and HUF", url: "#" },
                { name: "Non Resident Indian (NRI)", url: "#" },
            ],
        },
        {
            title: "Your Tradify Account",
            icon: "fa-user",
            links: [
                { name: "Login credentials", url: "#" },
                { name: "Your Profile", url: "#" },
                { name: "Account modification", url: "#" },
                { name: "CMR & DP ID", url: "#" },
                { name: "Nomination", url: "#" },
                { name: "Transfer and conversion of shares", url: "#" },
            ],
        },
        {
            title: "Trading and Markets",
            icon: "fa-chart-line",
            links: [
                { name: "Trading FAQs", url: "#" },
                { name: "Kite", url: "#" },
                { name: "Margins", url: "#" },
                { name: "Product and order types", url: "#" },
                { name: "Corporate actions", url: "#" },
                { name: "Kite features", url: "#" },
            ],
        },
        {
            title: "Funds",
            icon: "fa-wallet",
            links: [
                { name: "Fund withdrawal", url: "#" },
                { name: "Adding funds", url: "#" },
                { name: "Adding bank accounts", url: "#" },
                { name: "eMandates", url: "#" },
            ],
        },
        {
            title: "Console",
            icon: "fa-tachometer-alt",
            links: [
                { name: "IPO", url: "#" },
                { name: "Portfolio", url: "#" },
                { name: "Funds statement", url: "#" },
                { name: "Profile", url: "#" },
                { name: "Reports", url: "#" },
                { name: "Referral program", url: "#" },
            ],
        },
        {
            title: "Coin",
            icon: "fa-coins",
            links: [
                { name: "Understanding mutual funds and Coin", url: "#" },
                { name: "Coin app", url: "#" },
                { name: "Coin web", url: "#" },
                { name: "Transactions and reports", url: "#" },
                { name: "National Pension Scheme (NPS)", url: "#" },
            ],
        },
    ];

    return (
        <PublicLayout>
            <div className="bg-[#387ed1] text-white py-16 px-4 md:px-0">
                <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-xl font-medium mb-2 hidden md:block">Support Portal</h4>
                    </div>
                    <div className="text-sm underline space-x-4 hidden md:block">
                        <a href="#" className="hover:no-underline">Track tickets</a>
                        <a href="#" className="hover:no-underline">Console</a>
                        <a href="#" className="hover:no-underline">Kite</a>
                        <a href="#" className="hover:no-underline">Coin</a>
                        <a href="#" className="hover:no-underline">Videos</a>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <h2 className="text-2xl md:text-3xl font-light leading-snug w-full md:w-1/2">
                        Search for an answer or browse help topics to create a ticket
                    </h2>
                    <div className="w-full md:w-1/2 relative">
                        <input
                            type="text"
                            placeholder="Eg: how do i activate F&O, why is my order rejected ..."
                            className="w-full p-4 pl-4 pr-10 text-gray-700 rounded shadow-md focus:outline-none"
                        />
                        <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <div className="flex flex-wrap gap-4 mt-4 text-sm underline opacity-90">
                            <a href="#">Track account opening</a>
                            <a href="#">Track segment activation</a>
                            <a href="#">Intraday margins</a>
                            <a href="#">Kite user manual</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-4">
                <h3 className="text-xl text-gray-600 mb-8 font-light">
                    To create a ticket, select a relevant topic
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                    {supportTopics.map((topic, index) => (
                        <div key={index} className="flex flex-col">
                            <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                                <i className={`fas ${topic.icon} text-lg`}></i> {topic.title}
                            </h4>
                            <ul className="space-y-2 text-blue-600 pl-6">
                                {topic.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline text-sm">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
