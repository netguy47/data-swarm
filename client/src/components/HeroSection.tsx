import { motion } from "framer-motion";
import { ShieldCheck, ChevronRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="gradient-glow top-20 left-1/4"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-sm font-medium mb-8">
                        <ShieldCheck className="w-4 h-4 text-indigo-400" />
                        <span className="text-zinc-300">The Ultimate Trust Stack</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        Data-Swarm: <br />
                        <span className="gradient-text">Isolation-as-a-Service</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Execute your most sensitive enterprise AI workloads in ephemeral, zero-persistence E2B Firecracker micro-VMs. Complete auditability. Zero data retention.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={async () => {
                                try {
                                    const res = await fetch("/api/create-checkout-session", { method: "POST" });
                                    const data = await res.json();
                                    if (data.url) window.location.href = data.url;
                                } catch (err) {
                                    console.error("Payment failed", err);
                                }
                            }}
                            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                        >
                            Initialize Swarm <ChevronRight className="w-4 h-4" />
                        </button>
                        <a href="#architecture" className="glass-panel text-zinc-300 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                            Architecture Docs
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
