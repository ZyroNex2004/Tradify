import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-16 text-gray-600 text-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Logo & Socials */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Logo className="h-5 w-auto" />
                            <span className="font-semibold text-lg text-gray-900">TRADIFY</span>
                        </div>
                        <p className="text-sm">
                            © 2010 - 2024, Tradify Broking Ltd. All rights reserved.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="hover:text-blue-600"><i className="fab fa-twitter"></i> Twitter</a>
                            <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook"></i> Facebook</a>
                            <a href="#" className="hover:text-blue-600"><i className="fab fa-instagram"></i> Instagram</a>
                            <a href="#" className="hover:text-blue-600"><i className="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                        <hr className="my-4 md:hidden" />
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-600">About</a></li>
                            <li><a href="#" className="hover:text-blue-600">Products</a></li>
                            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600">Referral programme</a></li>
                            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-600">Tradify.tech</a></li>
                            <li><a href="#" className="hover:text-blue-600">Press & media</a></li>
                            <li><a href="#" className="hover:text-blue-600">Tradify Cares (CSR)</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
                            <li><a href="#" className="hover:text-blue-600">Support portal</a></li>
                            <li><a href="#" className="hover:text-blue-600">Z-Connect blog</a></li>
                            <li><a href="#" className="hover:text-blue-600">List of charges</a></li>
                            <li><a href="#" className="hover:text-blue-600">Downloads & resources</a></li>
                            <li><a href="#" className="hover:text-blue-600">Videos</a></li>
                            <li><a href="#" className="hover:text-blue-600">Market overview</a></li>
                            <li><a href="#" className="hover:text-blue-600">How to file a complaint?</a></li>
                            <li><a href="#" className="hover:text-blue-600">Status of your complaints</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Account */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Account</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-600">Open an account</a></li>
                            <li><a href="#" className="hover:text-blue-600">Fund transfer</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-xs text-gray-500 space-y-4">
                    <p>
                        Tradify Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Tradify Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Tradify Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Tradify Broking Ltd., #153/154, 4th Cross, J.P. Nagar 4th Phase, Opp. Clarence Public School, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@tradify.com, for DP related to dp@tradify.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p>
                        Smart Online Dispute Resolution | Grievances Redressal Mechanism
                    </p>
                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your email and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Tradify and offering such services, please create a ticket here.
                    </p>
                </div>

                <div className="flex justify-center gap-6 mt-8 text-sm font-medium">
                    <a href="#" className="hover:text-blue-600">NSE</a>
                    <a href="#" className="hover:text-blue-600">BSE</a>
                    <a href="#" className="hover:text-blue-600">MCX</a>
                    <a href="#" className="hover:text-blue-600">Terms & conditions</a>
                    <a href="#" className="hover:text-blue-600">Policies & procedures</a>
                    <a href="#" className="hover:text-blue-600">Privacy policy</a>
                    <a href="#" className="hover:text-blue-600">Disclosure</a>
                    <a href="#" className="hover:text-blue-600">For investor's attention</a>
                    <a href="#" className="hover:text-blue-600">Investor charter</a>
                </div>
            </div>
        </footer>
    );
}
