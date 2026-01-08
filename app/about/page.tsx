"use client";
import Header from "@/components/Header/Header";
import React from "react";

export default function AboutPage(): React.JSX.Element {
    return (
        <>
            <Header />  
            <main className="min-h-screen bg-gray-50 text-gray-800">
                <section className="bg-white border-t border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the world with confidence</h2>
                            <p className="text-gray-600 mb-6">
                                TravelExplorer is built for curious travelers who want delightful, well-planned journeys.
                                We combine curated guides, smart trip planning and local insight to help you discover more.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="/trips"
                                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
                                >
                                    Browse Trips
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-block border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                                >
                                    Get in touch
                                </a>  
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full">
                            <div className="w-full rounded-lg overflow-hidden shadow-lg">
                                <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                                    <svg  
                                        className="w-24 h-24 text-indigo-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h4l3-8 3 16 3-6 4 4" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-16">
                    <h3 className="text-2xl font-semibold mb-6">What we offer</h3>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <div className="text-blue-600 mb-3">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l3 7h7l-5.5 4.2L21 22l-9-6-9 6 3.5-8.8L1 9h7z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold mb-2">Curated itineraries</h4>
                            <p className="text-sm text-gray-600">Ready-made trips tailored to different tastes and lengths.</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <div className="text-green-500 mb-3">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold mb-2">Smart planning</h4>
                            <p className="text-sm text-gray-600">Tools to help you build the perfect trip from flights to activities.</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <div className="text-yellow-500 mb-3">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l3 7h7l-5.5 4.2L21 22l-9-6-9 6 3.5-8.8L1 9h7z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold mb-2">Local insights</h4>
                            <p className="text-sm text-gray-600">Recommendations from locals and travel experts for authentic experiences.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white border-t border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-6 py-12">
                        <h3 className="text-2xl font-semibold mb-8">Meet the team</h3>
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {[
                                { name: "Ava Chen", role: "Founder & CEO" },
                                { name: "Liam Patel", role: "Head of Product" },
                                { name: "Maya Rossi", role: "Community & Partnerships" },
                            ].map((p) => (
                                <div key={p.name} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                                        {p.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                                    </div>
                                    <div>
                                        <div className="font-medium">{p.name}</div>
                                        <div className="text-sm text-gray-500">{p.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-12">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg p-8 text-white">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-xl font-semibold">Ready to start your next adventure?</h4>
                                <p className="text-indigo-100 mt-1">Find trips, plan faster, and explore with confidence.</p>
                            </div>
                            <div className="flex gap-3">
                                <a href="/trips" className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium">Explore Trips</a>
                                <a href="/signup" className="border border-white px-4 py-2 rounded-md text-white">Sign up</a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="border-t bg-white">
                    <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
                        <div>© {new Date().getFullYear()} TravelExplorer. All rights reserved.</div>
                        <div className="space-x-4 mt-3 md:mt-0">
                            <a href="/privacy" className="hover:text-gray-700">Privacy</a>
                            <a href="/terms" className="hover:text-gray-700">Terms</a>
                        </div>
                    </div>
                </footer>
            </main>
        </>

    );
}