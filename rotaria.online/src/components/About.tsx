import { Zap, Users, Globe, Shield } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'Custom Modpack',
      description: 'Carefully curated mods for the ultimate gameplay experience, featuring tech, magic, and exploration.'
    },
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join a welcoming community of players who love to build, explore, and collaborate together.'
    },
    {
      icon: Globe,
      title: 'Global Server',
      description: 'High-performance server with low latency, accessible to players from around the world.'
    },
    {
      icon: Shield,
      title: 'Protected Gameplay',
      description: 'Grief protection, claim systems, and active moderation ensure a safe and fun environment.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="minecraft-title text-4xl sm:text-5xl mb-4 text-emerald-400">About Our Server</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto font-semibold">
            ModdedCrate SMP is a premium modded Minecraft server designed for players who want more than vanilla Minecraft offers.
            Our carefully balanced modpack creates endless possibilities for creativity and adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="minecraft-card hover:border-emerald-500 transition-all transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-600 shrink-0" style={{ boxShadow: 'inset -2px -2px 0 rgba(0,0,0,0.3), inset 2px 2px 0 rgba(255,255,255,0.2)' }}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 minecraft-title">{feature.title}</h3>
                    <p className="text-gray-300 font-semibold">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="minecraft-card border-emerald-500/50">
          <h3 className="minecraft-title text-2xl mb-6 text-emerald-400">Server Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-400 text-lg">Version:</span>
              <span className="text-gray-200 font-semibold text-lg">1.20.1 (Modded)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-400 text-lg">Mod Loader:</span>
              <span className="text-gray-200 font-semibold text-lg">Forge/Fabric</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-400 text-lg">Players:</span>
              <span className="text-gray-200 font-semibold text-lg">50 Max</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-400 text-lg">Difficulty:</span>
              <span className="text-gray-200 font-semibold text-lg">Normal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
