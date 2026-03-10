import { HeroSection } from "../components/HeroSection";
import { TrustStackVisualizer } from "../components/TrustStackVisualizer";
import { WaitlistForm } from "../components/WaitlistForm";

export default function Home() {
    return (
        <main className="relative">
            <nav className="fixed w-full top-0 z-50 glass-panel border-x-0 border-t-0 py-4 transition-all duration-300">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tighter">
                        DATA<span className="text-indigo-400">-SWARM</span>
                    </div>
                    <a href="#waitlist" className="text-xs md:text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors uppercase">
                        Client Login
                    </a>
                </div>
            </nav>

            <HeroSection />
            <TrustStackVisualizer />
            <WaitlistForm />

            <footer className="py-8 text-center text-sm text-zinc-600 border-t border-white/5 bg-black/50">
                <div className="container mx-auto px-6">
                    &copy; {new Date().getFullYear()} Data-Swarm. The Overseer Model. Isolation-as-a-Service.
                </div>
            </footer>
        </main>
    );
}
