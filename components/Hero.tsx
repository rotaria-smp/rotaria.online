import { ExternalLink, Map } from 'lucide-react';
import { PanningBackground } from './ui/PanningImage';

export function Hero() {
  const links = {
    discord_url: '#',
    bluemap_url: '#'
  };

  return (
    <section
      id="home"
      className="relative w-full py-32 overflow-hidden"
    >
      <PanningBackground  />
			
			<div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent z-1"></div>


      <div className="parallax-content relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="minecraft-title text-5xl sm:text-6xl md:text-7xl mb-8 text-white">
            Rotaria SMP
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto font-semibold"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            A relaxed, modded survival world where tech, magic, farms, and storytelling all collide.
            Claim a spot, build weird contraptions, trade with neighbors, and help shape each season.
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
              World Map
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="minecraft-card">
              <div className="text-5xl font-bold text-orange-400 mb-3">60+</div>
              <div className="text-xl text-gray-200 font-semibold">Handpicked Mods</div>
            </div>
            <div className="minecraft-card">
              <div className="text-5xl font-bold text-orange-400 mb-3">24/7</div>
              <div className="text-xl text-gray-200 font-semibold">Always Online</div>
            </div>
            <div className="minecraft-card">
              <div className="text-5xl font-bold text-orange-400 mb-3">Friendly</div>
              <div className="text-xl text-gray-200 font-semibold">Active Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
