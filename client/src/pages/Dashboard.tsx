import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Activity,
    Shield,
    Zap,
    BarChart3,
    AlertCircle,
    CheckCircle2,
    Eye,
    Settings,
    LayoutDashboard,
    Mail,
    Image as ImageIcon
} from "lucide-react";

interface Stats {
    totalLeads: number;
    activeAudits: number;
    deliveryFailures: number;
    conversionRate: string;
    visualAssets: number;
}

export default function Dashboard() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("/api/dashboard/stats");
                const data = await res.json();
                setStats(data);
            } catch (err) {
                console.error("Failed to load stats", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const statCards = [
        { label: "Total Leads", value: stats?.totalLeads ?? 0, icon: Activity, color: "text-blue-400" },
        { label: "Active Audits", value: stats?.activeAudits ?? 0, icon: Zap, color: "text-amber-400" },
        { label: "Visual Assets", value: stats?.visualAssets ?? 0, icon: ImageIcon, color: "text-indigo-400" },
        { label: "Conversion Rate", value: stats?.conversionRate ?? "0%", icon: BarChart3, color: "text-emerald-400" },
        { label: "Delivery Health", value: (stats ? (100 - (stats.deliveryFailures / stats.totalLeads * 100 || 0)).toFixed(1) : 100) + "%", icon: Shield, color: "text-purple-400" },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 selection:bg-indigo-500/30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
                            <LayoutDashboard className="w-8 h-8 text-indigo-500" />
                            Overseer Command Center
                        </h1>
                        <p className="text-zinc-500 font-medium">Data-Swarm Strategic Intelligence Layer</p>
                    </motion.div>

                    <div className="flex gap-4">
                        <button className="glass-panel px-4 py-2 text-sm font-semibold hover:bg-white/5 transition-colors border border-white/10 rounded-lg flex items-center gap-2">
                            <Settings className="w-4 h-4" /> System Settings
                        </button>
                        <button className="bg-white text-black px-4 py-2 text-sm font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                            Trigger Global Sync
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                    {statCards.map((card, i) => (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform ${card.color}`}>
                                <card.icon size={64} />
                            </div>
                            <div className="relative z-10">
                                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{card.label}</p>
                                <p className="text-3xl font-bold tabular-nums">
                                    {loading ? "..." : card.value}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Visual Intelligence Gallery */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2 glass-panel p-8 rounded-3xl border border-white/5"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold flex items-center gap-3">
                                <ImageIcon className="text-indigo-400" /> Nano-Banana Assets
                            </h2>
                            <button className="text-xs text-zinc-500 hover:text-white transition-colors">View All Assets &rarr;</button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2].map((id) => (
                                <div key={id} className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/5 group">
                                    <img
                                        src={`https://images.unsplash.com/photo-1639762681485-${id === 1 ? '074b7f938ba0' : '486c66cf1d4f'}?q=80&w=2832&auto=format&fit=crop`}
                                        alt="Visual Audit"
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-xs font-mono text-indigo-400 mb-1">AUDIT_STAGED_00{id}</p>
                                        <p className="text-sm font-bold">Systems Vision Infographic</p>
                                    </div>
                                    <button 
                                        title="View Asset"
                                        aria-label="View Asset"
                                        className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Live Intelligence Feed */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold flex items-center gap-3">
                                <Activity className="text-amber-400" /> Swarm Heartbeat
                            </h2>
                            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                        </div>

                        <div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-purple-500/10 rounded-lg"><Shield className="w-4 h-4 text-purple-400" /></div>
                                <div>
                                    <p className="text-sm font-bold">Postmaster Remediation</p>
                                    <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                                        Identified invalid handshake on `@openai.com`. Lead moved to Cooldown.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-indigo-500/10 rounded-lg"><Zap className="w-4 h-4 text-indigo-400" /></div>
                                <div>
                                    <p className="text-sm font-bold">Strategic Activation</p>
                                    <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                                        CommunicatorAgent generated 5 new Systems Vision drafts for High-PBS targets.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start opacity-50">
                                <div className="p-2 bg-zinc-500/10 rounded-lg"><CheckCircle2 className="w-4 h-4 text-zinc-500" /></div>
                                <div>
                                    <p className="text-sm font-bold">Cycle Complete</p>
                                    <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                                        Synchronized 14 leads with Google Sheets successfully.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <button className="w-full py-3 bg-zinc-900 border border-white/10 rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-colors">
                                View Debug Logs
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
