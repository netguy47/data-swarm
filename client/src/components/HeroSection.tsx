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
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="max-w-4xl mx-auto rounded-2xl overflow-hidden glass-panel border-white/10 shadow-2xl relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-50"></div>
                        <div className="p-1">
                            <div className="relative rounded-xl overflow-hidden aspect-[21/9] bg-zinc-900 border border-white/5">
                                <img
                                    src="/api/placeholder-visual"
                                    alt="Visual Audit Preview"
                                    className="w-full h-full object-cover mix-blend-lighten opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop";
                                    }}
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40 backdrop-blur-[2px]">
                                    <h3 className="text-2xl font-bold tracking-tight mb-2">Visual Audit Intelligence</h3>
                                    <p className="text-zinc-400 text-sm max-w-lg mx-auto">
                                        The Nano-Banana engine generates real-time infrastructure infographics for every audit session.
                                    </p>
                                    <div className="mt-4 px-4 py-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                                        PROTOTYPE_MODE: ACTIVE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
