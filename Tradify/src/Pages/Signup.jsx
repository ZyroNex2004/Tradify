import React from 'react';
import PublicLayout from "../layouts/PublicLayout";
import landingImg from "../assets/landing.svg";

export default function Signup() {
    return (
        <PublicLayout>
            <div className="container mx-auto px-4 py-20 md:py-28">
                <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24">

                    {/* Image Section - Hidden on small screens if desired, or kept */}
                    <div className="w-full md:w-5/12 flex justify-center fade-in">
                        <img
                            src={landingImg}
                            alt="Tradify Sign up"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="w-full md:w-5/12 max-w-sm">
                        <div className="text-center md:text-left mb-10">
                            <h1 className="text-3xl font-semibold text-gray-800 mb-2 leading-tight">
                                Signup now
                            </h1>
                            <p className="text-gray-500 text-base">
                                Or track your existing application
                            </p>
                        </div>

                        <div className="">
                            <div className="mb-6 relative">
                                <label htmlFor="mobile" className="block text-xs font-semibold text-gray-400 mb-1 pl-1 uppercase tracking-wider">
                                    Mobile number
                                </label>
                                <div className="flex items-end">
                                    <span className="pb-2 pr-2 text-gray-800 font-medium text-lg">
                                        +91
                                    </span>
                                    <input
                                        type="text"
                                        id="mobile"
                                        className="flex-1 w-full pb-2 border-b border-gray-300 focus:border-gray-800 outline-none transition-colors text-gray-800 font-medium text-lg placeholder-gray-300"
                                        placeholder="Your 10 digit mobile number"
                                        autoFocus
                                    />
                                </div>
                                <p className="text-[11px] text-gray-400 mt-2">
                                    You will receive an OTP on your number
                                </p>
                            </div>

                            <button className="w-full bg-[#387ed1] hover:bg-[#2a62a5] text-white font-semibold py-2.5 px-6 rounded shadow hover:shadow-lg transition duration-300 mb-6 text-lg">
                                Continue
                            </button>

                            <div className="text-center text-sm font-medium">
                                <a href="#" className="text-[#387ed1] hover:text-[#2a62a5] transition">Want to open an NRI account?</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center space-y-2">
                    <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        I authorize Tradify to contact me even if my number is registered on DND. I authorize Tradify to fetch my KYC information from the C-KYC registry with my PAN. <br />
                        Please visit <a href="#" className="text-[#387ed1]">this article</a> to know more.
                    </p>
                    <p className="text-xs text-gray-400">
                        By continuing, you agree to our <a href="#" className="text-[#387ed1]">Terms & Conditions</a> and <a href="#" className="text-[#387ed1]">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </PublicLayout>
    );
}
