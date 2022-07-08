import React from 'react';

export default function Faq() {
    return (
        <div id="faq">
            <section className="py-24 bg-white">
                <div className="px-8 mx-auto max-w-7xl lg:px-16">
                    <div className="text-center">
                    <h2 className="mb-4text-xl font-bold md:text-3xl">
                        Frequently Asked Questions
                    </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                        <div>

                            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                            As an Investor/Trader, How can I participate on the Initial Version? 
                            </h5>
                            <p>
                            Please click {" "}
                                <a
                                    href="https://devdojo.com/questions"
                                    className="text-indigo-500 underline"
                                >
                                     here
                                </a>
                                {" "}to get started
                            </p>

                            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                            How will Investors Benefit?
                            </h5>
                            <p>
                            Not only you are accelerating development around the world, you also make money along the process
                            </p>
                            
                        </div>
                        <div>
                            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                            As an Entrepreneur, how can I participate on the initial version?
                            </h5>
                            <p>
                            Please click {" "}
                                <a
                                    href="https://devdojo.com/questions"
                                    className="text-indigo-500 underline"
                                >
                                    here
                                </a>
                                {" "}to get started
                            </p>
                            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                            How will entrepreneurs benefit?
                            </h5>
                            <p>
                            Entrepreneurs will have access to investors around the world and consulting to take your business to the next level. 
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
