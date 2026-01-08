"use client";
import React, { useState } from "react";

type Status = { type: "idle" | "success" | "error"; message?: string };

export default function ContactPage(): React.JSX.Element {
    const [contactStatus, setContactStatus] = useState<Status>({ type: "idle" });
    const [subscribeStatus, setSubscribeStatus] = useState<Status>({ type: "idle" });
    const [quickStatus, setQuickStatus] = useState<Status>({ type: "idle" });

    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formEl = e.currentTarget;
        const form = new FormData(e.currentTarget);
        const name = String(form.get("name") || "").trim();
        const email = String(form.get("email") || "").trim();
        const message = String(form.get("message") || "").trim();

        if (!name || !email || !message) {
            setContactStatus({ type: "error", message: "Please fill out all fields." });
            return;
        }
        setContactStatus({ type: "idle" });
        // fake async
        await new Promise((r) => setTimeout(r, 600));
        setContactStatus({ type: "success", message: "Message sent. We'll be in touch soon." });
        formEl.reset();
    };

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = String(form.get("email") || "").trim();
        if (!email) {
            setSubscribeStatus({ type: "error", message: "Please provide an email." });
            return;
        }
        setSubscribeStatus({ type: "idle" });
        await new Promise((r) => setTimeout(r, 500));
        setSubscribeStatus({ type: "success", message: "Subscribed! Check your inbox." });
        e.currentTarget.reset();
    };

    const handleQuick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const feedback = String(form.get("feedback") || "").trim();
        if (!feedback) {
            setQuickStatus({ type: "error", message: "Please enter feedback." });
            return;
        }
        setQuickStatus({ type: "idle" });
        await new Promise((r) => setTimeout(r, 400));
        setQuickStatus({ type: "success", message: "Thanks for the quick feedback!" });
        e.currentTarget.reset();
    };

    const statusBadge = (s: Status) => {
        if (s.type === "idle") return null;
        const base = "text-sm px-2 py-1 rounded-md";
        if (s.type === "success") return <div className={`${base} bg-green-100 text-green-800`}>{s.message}</div>;
        return <div className={`${base} bg-red-100 text-red-800`}>{s.message}</div>;
    };

    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-3xl font-semibold text-gray-900 mb-4">Contact</h1>
                <p className="text-gray-600 mb-8">Choose a quick option below to get in touch.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Contact Form */}
                    <section className="bg-white shadow-sm rounded-lg p-5">
                        <h2 className="text-lg font-medium mb-3">Send a message</h2>
                        <form onSubmit={handleContactSubmit} className="space-y-3">
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Name</label>
                                <input name="name" type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Email</label>
                                <input name="email" type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Message</label>
                                <textarea name="message" rows={3} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm hover:bg-indigo-700">
                                    Send
                                </button>
                                {statusBadge(contactStatus)}
                            </div>
                        </form>
                    </section>

                    {/* Subscribe */}
                    <section className="bg-white shadow-sm rounded-lg p-5">
                        <h2 className="text-lg font-medium mb-3">Subscribe</h2>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Email</label>
                                <input name="email" type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-200" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-emerald-600 text-white px-3 py-2 rounded-md text-sm hover:bg-emerald-700">
                                    Subscribe
                                </button>
                                {statusBadge(subscribeStatus)}
                            </div>
                            <p className="text-xs text-gray-500">Get occasional updates about travel deals.</p>
                        </form>
                    </section>

                    {/* Quick Feedback */}
                    <section className="bg-white shadow-sm rounded-lg p-5">
                        <h2 className="text-lg font-medium mb-3">Quick feedback</h2>
                        <form onSubmit={handleQuick} className="space-y-3">
                            <div>
                                <label className="sr-only">Feedback</label>
                                <input name="feedback" type="text" placeholder="One-line feedback" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-200" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-yellow-500 text-white px-3 py-2 rounded-md text-sm hover:bg-yellow-600">
                                    Send
                                </button>
                                {statusBadge(quickStatus)}
                            </div>
                            <p className="text-xs text-gray-500">Keep it short — one sentence is fine.</p>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}