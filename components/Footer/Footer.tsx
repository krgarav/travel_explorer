'use client '
import React from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-white">Travel Explorer</h3>
                        <p className="mt-2 text-sm text-gray-300">
                            Expert corporate travel management & solutions.
                        </p>
                        <div className="flex space-x-3 mt-4">
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12a10 10 0 10-11.5 9.9v-7H8.5v-2.9h2V9.1c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.6h2.2l-.4 2.9h-1.8v7A10 10 0 0022 12z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700"
                                aria-label="Twitter"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 5.9c-.6.3-1.2.5-1.8.6.6-.4 1-1 1.3-1.7-.6.4-1.3.6-2 .8-.6-.6-1.4-1-2.3-1-1.8 0-3.2 1.6-2.8 3.3C9.7 8 7.1 6.5 5.6 4.3c-.7 1.2-.2 2.6 1 3.3-.5 0-1-.2-1.4-.4v.1c0 1.4 1 2.6 2.4 2.9-.4.1-.9.1-1.3.1-.3 0-.6 0-.9-.1.6 1.8 2.4 3 4.4 3-1.6 1.2-3.6 2-5.8 2-.4 0-.8 0-1.2-.1 2 1.3 4.3 2 6.8 2 8.1 0 12.5-6.8 12.5-12.7v-.6c.8-.6 1.4-1.4 1.9-2.2-.7.3-1.5.5-2.3.6z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.98 3.5A2.5 2.5 0 102.5 6a2.5 2.5 0 002.48-2.5zM3 8.98h3.96V21H3V8.98zM9.98 8.98h3.8v1.63h.05c.53-1 1.83-2 3.77-2 4.04 0 4.79 2.66 4.79 6.12V21h-3.96v-5.22c0-1.24 0-2.83-1.72-2.83-1.72 0-1.98 1.34-1.98 2.73V21h-3.96V8.98z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white">Corporate Office</h4>
                        <address className="not-italic mt-3 text-sm text-gray-300 space-y-2">
                            <div>Travel Explorer Inc.</div>
                            <div>123 Explorer Lane, Suite 400</div>
                            <div>San Francisco, CA 94107</div>
                            <div>
                                Phone:{" "}
                                <a href="tel:+15551234567" className="text-indigo-300 hover:underline">
                                    +1 (555) 123-4567
                                </a>
                            </div>
                            <div>
                                Email:{" "}
                                <a href="mailto:office@travelexplorer.com" className="text-indigo-300 hover:underline">
                                    office@travelexplorer.com
                                </a>
                            </div>
                            <div>Hours: Mon—Fri, 9:00 AM — 6:00 PM (PST)</div>
                        </address>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Contact Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Travel Explorer Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}