import { motion } from "framer-motion";
import { Server, Shield, BrainCircuit, Activity } from "lucide-react";

const features = [
    {
        icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
        title: "Multi-Agent Swarm",
        description: "Strategist, Communicator, and Overseer agents working in coordinated harmony."
    },
    {
        icon: <Shield className="w-6 h-6 text-blue-400" />,
        title: "Ephemeral Sandboxing",
        description: "Every data analysis runs in an isolated E2B micro-VM that vanishes instantly after execution."
    },
    {
        icon: <Activity className="w-6 h-6 text-purple-400" />,
        title: "Overseer Reporting",
        description: "Real-time, verifiable metrics on AI reasoning and data flow logic."
    },
    {
        icon: <Server className="w-6 h-6 text-emerald-400" />,
        title: "On-Premises Parity",
        description: "SaaS execution speed with the security profile of local, on-premises infrastructure."
    }
];

export function TrustStackVisualizer() {
    return (
        <section id="architecture" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The Trust Stack Architecture</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">Built from the ground up to solve the enterprise AI data security problem.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors border border-white/5"
                        >
                            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-lg">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
