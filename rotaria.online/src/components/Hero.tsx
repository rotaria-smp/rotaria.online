import { ExternalLink, Map } from 'lucide-react';

type HeroLinks = {
  discord_url?: string;
  bluemap_url?: string;
};

export function Hero() {
  const links: HeroLinks = {};

  return (
    <section
      id="home"
      className="parallax-minecraft relative w-full h-screen pt-32 overflow-hidden"
    >
      {/* Smooth scrolling background */}
      <div className="minecraft-scroll-layer">
        <div className="minecraft-scroll-image" />
        <div className="minecraft-scroll-image" />
        <div className="minecraft-scroll-image" />
      </div>

      {/* Foreground content */}
      <div className="parallax-content absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="minecraft-title text-5xl sm:text-6xl md:text-7xl mb-8 text-white">
            ModdedCrate SMP
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto font-semibold"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            Experience Minecraft like never before with our custom modded server.
            Join a thriving community of players exploring new dimensions, technologies, and adventures.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href={links?.discord_url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button-primary inline-flex items-center gap-3"
            >
              <ExternalLink size={24} />
              Join Discord
            </a>
            <a
              href={links?.bluemap_url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button-secondary inline-flex items-center gap-3"
            >
              <Map size={24} />
              View Bluemap
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="minecraft-card">
              <div className="text-5xl font-bold text-emerald-400 mb-3">100+</div>
              <div className="text-xl text-gray-200 font-semibold">Custom Mods</div>
            </div>
            <div className="minecraft-card">
              <div className="text-5xl font-bold text-emerald-400 mb-3">24/7</div>
              <div className="text-xl text-gray-200 font-semibold">Server Uptime</div>
            </div>
            <div className="minecraft-card">
              <div className="text-5xl font-bold text-emerald-400 mb-3">Active</div>
              <div className="text-xl text-gray-200 font-semibold">Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
