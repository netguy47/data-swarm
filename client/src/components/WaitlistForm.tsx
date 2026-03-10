import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            // Simulating API hook for ReceptionistAgent
        }
    };

    return (
        <section id="waitlist" className="py-24 relative overflow-hidden">
            <div className="gradient-glow bottom-0 right-1/4"></div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto glass-panel p-8 md:p-14 rounded-3xl text-center border border-white/10"
                >
                    {submitted ? (
                        <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                            <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-6" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">You're on the list</h3>
                            <p className="text-zinc-400 text-lg">Our Receptionist Agent will contact you shortly to schedule your "Audit Swarm" pilot.</p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Pilot Access</h2>
                            <p className="text-zinc-400 mb-10 text-lg max-w-lg mx-auto">Deploy the Data-Swarm on your secure infrastructure today.</p>

                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your enterprise email"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-zinc-500 text-lg"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-lg shadow-lg shadow-indigo-500/20"
                                >
                                    Join Waitlist <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
