import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield,
    Brain,
    MessageSquare,
    Eye,
    Lock,
    Cpu,
    Database,
    Terminal,
    ChevronRight,
    CheckCircle2,
    AlertTriangle,
    Globe,
    Zap
} from 'lucide-react';

// --- UI Components ---

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full max-w-7xl px-6 py-3 rounded-full border border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border-t-zinc-700/30"
        >
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center group-hover:rotate-[15deg] transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    <Database className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-black tracking-tighter text-zinc-100 uppercase leading-none">Data Swarm</span>
                    <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest leading-none mt-1">Orchestration</span>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-[13px] font-bold text-zinc-400 uppercase tracking-widest">
                <a href="#how-it-works" className="hover:text-blue-400 transition-colors relative group">
                    Infrastructure
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full" />
                </a>
                <a href="#trust-stack" className="hover:text-blue-400 transition-colors relative group">
                    Trust Stack
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full" />
                </a>
                <a href="#request" className="hover:text-blue-400 transition-colors relative group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full" />
                </a>
            </div>
            <button className="px-6 py-2.5 rounded-full bg-zinc-100 text-zinc-950 text-xs font-black uppercase tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-95">
                Deploy Now
            </button>
        </motion.div>
    </nav>
);

const HeroSection = () => (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, 60, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/15 blur-[150px] rounded-full"
            />
            <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay" />
        </div>

        <div className="container relative z-10 max-w-5xl text-center space-y-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
                <Lock className="w-3.5 h-3.5" /> <span className="pt-0.5">Isolated Environment: E2B Firecracker 0.14.2</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-9xl font-black tracking-tight leading-[0.85] text-zinc-100"
            >
                Isolation-as-a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Service</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-2xl mx-auto text-lg md:text-2xl text-zinc-400 font-light leading-relaxed tracking-tight"
            >
                Automate high-stakes data acquisition with zero-persistence integrity.
                Engineered for the age of autonomous enterprise swarms.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-5 justify-center pt-6"
            >
                <button className="h-16 px-12 rounded-2xl bg-blue-600 text-white text-sm font-black uppercase tracking-widest hover:bg-blue-500 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center justify-center gap-3 group shadow-[0_20px_40px_rgba(37,99,235,0.3)]">
                    Initialize Swarm <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <button className="h-16 px-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md text-zinc-300 text-sm font-black uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-3">
                    Architecture Docs
                </button>
            </motion.div>
        </div>

        {/* Floating Terminal Snippet */}
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.2 }}
            className="mt-20 w-full max-w-4xl overflow-hidden rounded-t-[32px] border border-zinc-800 bg-zinc-950/90 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,1)] relative"
        >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent" />
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/50 bg-zinc-900/30">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-800" />
                    <div className="w-3 h-3 rounded-full bg-zinc-800" />
                    <div className="w-3 h-3 rounded-full bg-zinc-800" />
                </div>
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.3em] font-bold">nexus_sentinel_node_v1.0.4</span>
                <div className="w-12" />
            </div>
            <div className="p-8 font-mono text-[13px] space-y-3 text-zinc-400">
                <div className="flex gap-3">
                    <span className="text-zinc-600">01</span>
                    <p className="text-blue-500 font-bold">$ swarm init --isolate --deep-audit</p>
                </div>
                <div className="flex gap-3">
                    <span className="text-zinc-600">02</span>
                    <p>[SYSTEM] Requesting Firecracker Micro-VM instance...</p>
                </div>
                <div className="flex gap-3">
                    <span className="text-zinc-600">03</span>
                    <p>[SYSTEM] <span className="text-emerald-500">Handshake Secure.</span> Kernel isolation established.</p>
                </div>
                <div className="flex gap-3">
                    <span className="text-zinc-600">04</span>
                    <p className="text-indigo-400">[STRATEGIST] Analyzing Professional DNA... Lead Density: HIGH</p>
                </div>
                <div className="flex gap-3">
                    <span className="text-zinc-600">05</span>
                    <p className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-4 font-bold">[OVERSEER] Integrity Verified. PBS Calibration: 96.8/100</p>
                </div>
                <div className="flex gap-3">
                    <span className="text-zinc-600">06</span>
                    <p className="animate-pulse">_</p>
                </div>
            </div>
        </motion.div>
    </section>
);

const TrustStack = () => {
    const layers = [
        {
            title: "Overseer Layer",
            desc: "High-level governance. Aggregates multi-agent logs into binary reports for manual human judgment.",
            icon: Eye,
            color: "from-blue-500 to-cyan-500",
            accent: "blue",
        },
        {
            title: "Strategist Layer",
            desc: "Deep professional DNA analysis. Calibrates PBS scores to ensure lead quality density.",
            icon: Brain,
            color: "from-indigo-500 to-purple-500",
            accent: "indigo",
        },
        {
            title: "Communicator Layer",
            desc: "Targeted outreach engine. Orchestrates secure protocols through ephemeral sandbox channels.",
            icon: MessageSquare,
            color: "from-emerald-500 to-teal-500",
            accent: "emerald",
        },
        {
            title: "Sandbox Layer",
            desc: "Zero-persistence micro-VMs ensure absolute environment isolation for every execution cycle.",
            icon: Shield,
            color: "from-orange-500 to-red-500",
            accent: "orange",
        },
    ];

    return (
        <section id="trust-stack" className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-zinc-900/50" />
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-zinc-900/50" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 border-b border-zinc-800 pb-12">
                    <div className="max-w-2xl space-y-6 text-left">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-blue-500 font-mono text-xs font-black uppercase tracking-[0.4em]"
                        >
                            The Architecture of Truth
                        </motion.div>
                        <h2 className="text-5xl font-black text-zinc-100 tracking-tight leading-none">The Trust Stack</h2>
                        <p className="text-zinc-400 text-xl font-light">
                            Governance shouldn't be an afterthought. Data-Swarm is built from the kernel up to maintain Information Integrity.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-3 px-5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black pt-0.5">Live Sync: 9ms Latency</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {layers.map((layer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group p-10 rounded-[40px] border border-zinc-800 bg-zinc-900/10 backdrop-blur-md relative transition-all hover:bg-zinc-900/30 hover:border-zinc-700/50 shadow-2xl"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-[40px] bg-gradient-to-r ${layer.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]`} />

                            <div className={`w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center mb-10 border border-zinc-800 group-hover:scale-110 transition-transform group-hover:border-${layer.accent}-500/50 shadow-inner`}>
                                <layer.icon className={`w-8 h-8 text-zinc-400 group-hover:text-zinc-100 transition-colors`} />
                            </div>

                            <h3 className="text-2xl font-black text-zinc-100 mb-4 tracking-tight">{layer.title}</h3>
                            <p className="text-base text-zinc-500 leading-relaxed font-medium mb-10 group-hover:text-zinc-400 transition-colors">
                                {layer.desc}
                            </p>

                            <div className="space-y-4 pt-4 border-t border-zinc-800/50">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 group-hover:text-emerald-500 transition-colors" />
                                    <span className="text-[9px] font-mono text-zinc-600 uppercase font-black tracking-widest pt-0.5">Audit-Ready Logs</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 group-hover:text-emerald-500 transition-colors" />
                                    <span className="text-[9px] font-mono text-zinc-600 uppercase font-black tracking-widest pt-0.5">TLS Encryption</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const InfrastructureSection = () => (
    <section id="how-it-works" className="py-40 border-y border-zinc-900 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
                <div className="space-y-4">
                    <span className="text-blue-500 font-mono text-xs font-black uppercase tracking-[0.5em]">The Infrastructure</span>
                    <h2 className="text-5xl md:text-7xl font-black text-zinc-100 leading-[0.9] tracking-tight">
                        Firecracker <br />
                        <span className="text-blue-500">Isolation.</span>
                    </h2>
                </div>
                <p className="text-zinc-400 text-xl font-light leading-relaxed">
                    Standard scrapers leave footprints. They execute scripts on shared servers, risking data leakage and process contamination. We run on ephemeral hardware.
                </p>
                <div className="grid grid-cols-1 gap-10">
                    <div className="flex gap-6 group">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors shadow-xl">
                            <Cpu className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="text-zinc-100 font-black mb-2 text-xl tracking-tight">Ephemeral Sandboxing</h4>
                            <p className="text-zinc-500 text-base leading-relaxed">Every script is executed in a dedicated Firecracker micro-VM with its own independent kernel. Wiped instantly on completion.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 group">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors shadow-xl">
                            <Terminal className="w-8 h-8 text-indigo-400" />
                        </div>
                        <div>
                            <h4 className="text-zinc-100 font-black mb-2 text-xl tracking-tight">Process Verification</h4>
                            <p className="text-zinc-500 text-base leading-relaxed">Automated system audits ensure that every byte acquired meets your standards. Integrity mismatch triggers instant termination.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative group">
                <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent)] rounded-[60px] blur-[80px] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-[4/5] rounded-[50px] border border-zinc-800/80 bg-zinc-950/50 backdrop-blur-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] flex flex-col p-1">
                    <div className="h-14 border-b border-zinc-900/50 flex items-center px-8 justify-between">
                        <div className="flex gap-2.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/30" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                            <div className="w-3 h-3 rounded-full bg-green-500/30" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span className="text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-widest pt-0.5">Sandbox Terminal</span>
                        </div>
                        <div className="w-10" />
                    </div>
                    <div className="flex-1 p-10 space-y-6 font-mono text-[12px] leading-relaxed">
                        <div className="flex gap-5">
                            <span className="text-zinc-700 font-bold shrink-0">11:47:01</span>
                            <span className="text-blue-500 font-black shrink-0">[AUTH]</span>
                            <span className="text-zinc-100">Initializing Firecracker-882... <span className="text-zinc-500 italic">done</span></span>
                        </div>
                        <div className="flex gap-5">
                            <span className="text-zinc-700 font-bold shrink-0">11:47:05</span>
                            <span className="text-zinc-500 font-black shrink-0">[INFO]</span>
                            <span className="text-zinc-100 italic">Allocating isolated kernel stack: OK</span>
                        </div>
                        <div className="flex gap-5 bg-blue-500/5 p-4 rounded-2xl border border-blue-500/10">
                            <Globe className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <span className="text-zinc-200">Retrieving LinkedIn lead packet #220... <span className="text-blue-400 font-bold">In Progress</span></span>
                        </div>
                        <div className="flex gap-5">
                            <span className="text-zinc-700 font-bold shrink-0">11:47:12</span>
                            <span className="text-emerald-500 font-black shrink-0">[DONE]</span>
                            <span className="text-zinc-100 font-bold underline decoration-zinc-800 underline-offset-8 decoration-2">Acquired: Manager Ops Strategy (JetBlue)</span>
                        </div>
                        <div className="flex gap-5">
                            <span className="text-zinc-700 font-bold shrink-0">11:47:15</span>
                            <span className="text-red-500 font-black shrink-0">[WIPE]</span>
                            <span className="text-zinc-400 uppercase tracking-tighter">Destroying environment ID: fc-0.14.2-x</span>
                        </div>
                        <div className="pt-4 flex items-center gap-2">
                            <span className="w-2.5 h-5 bg-blue-500 animate-pulse" />
                            <span className="text-zinc-700">Awaiting next instruction...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WaitlistForm = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                console.error("Failed to sync with Overseer mapping.");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="request" className="py-40 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-20 rounded-[64px] border border-zinc-800/50 bg-gradient-to-b from-zinc-900/30 to-zinc-950 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />

                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                className="space-y-12"
                            >
                                <div className="space-y-6">
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                            <Zap className="w-8 h-8 text-blue-400" />
                                        </div>
                                    </div>
                                    <h2 className="text-5xl font-black text-zinc-100 tracking-tight">Request Audit Swarm</h2>
                                    <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                                        Deploy your first autonomous data pipeline. Secure enterprise handshake required.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-5 max-w-2xl mx-auto p-2 rounded-3xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-md">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@enterprise.com"
                                        className="flex-1 h-16 px-8 rounded-2xl bg-transparent text-zinc-100 text-lg placeholder:text-zinc-600 focus:outline-none focus:ring-0 transition-all border-none"
                                    />
                                    <button
                                        disabled={loading}
                                        className="h-16 px-10 rounded-2xl bg-zinc-100 text-zinc-950 text-sm font-black uppercase tracking-widest hover:bg-white active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                    >
                                        {loading ? 'INITIALIZING SWARM...' : 'START DEPLOYMENT'}
                                    </button>
                                </form>
                                <div className="flex items-center justify-center gap-6 pt-4 text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-black font-mono">
                                    <span className="flex items-center gap-2"><Shield className="w-3 h-3" /> Encrypted Link</span>
                                    <span className="flex items-center gap-2"><Lock className="w-3 h-3" /> Zero-Trust Verified</span>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8 py-10"
                            >
                                <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-4xl font-black text-zinc-100 tracking-tight">Handshake Complete</h2>
                                    <p className="text-zinc-400 text-lg font-light max-w-md mx-auto">
                                        The Strategist Agent has been assigned to your domain. The first integrity report will arrive in ~2m.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-8 py-3 rounded-xl border border-zinc-800 text-zinc-500 text-xs font-black uppercase tracking-widest hover:text-zinc-300 hover:border-zinc-700 transition-all mt-4"
                                >
                                    Reset Handshake
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-20 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all">
                    <Database className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-black tracking-tighter text-zinc-300 uppercase">Data Swarm</span>
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black">Orchestration Engine</span>
                </div>
            </div>

            <p className="text-zinc-600 text-[10px] font-mono font-black uppercase tracking-[0.4em]">
                © 2026 DATA-SWARM | VERSION 1.0.4-SENTINEL | ALL RIGHTS RESERVED
            </p>

            <div className="flex gap-8">
                <a href="#" aria-label="Terminal" className="text-zinc-700 hover:text-blue-500 transition-colors"><Terminal className="w-5 h-5" /></a>
                <a href="#" aria-label="Security" className="text-zinc-700 hover:text-indigo-500 transition-colors"><Shield className="w-5 h-5" /></a>
                <a href="#" aria-label="CPU" className="text-zinc-700 hover:text-emerald-500 transition-colors"><Cpu className="w-5 h-5" /></a>
            </div>
        </div>
        {/* Subtle grid pattern in footer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </footer>
);

import { Route, Switch } from "wouter";
import Dashboard from "./pages/Dashboard";

// --- Main App Component ---

export default function App() {
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/">
                <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-600/40 font-sans tracking-tight">
                    <Navbar />
                    <main>
                        <HeroSection />
                        <TrustStack />
                        <InfrastructureSection />
                        <WaitlistForm />
                    </main>
                    <Footer />
                </div>
            </Route>
        </Switch>
    );
}
