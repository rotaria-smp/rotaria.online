import { ExternalLink, Map, MessageCircle } from 'lucide-react';
// import { useServerLinks } from '../hooks/useServerLinks';

export function Footer() {
  const links = [] //useServerLinks();

  return (
    <footer className="bg-gray-950 border-t-4 border-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="minecraft-title text-xl text-emerald-400 mb-4">ModdedCrate SMP</h3>
            <p className="text-gray-300 font-semibold">
              A premium modded Minecraft server dedicated to providing the best gameplay experience
              for our community.
            </p>
          </div>

          <div>
            <h3 className="minecraft-title text-xl text-emerald-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="#staff" className="text-gray-300 hover:text-emerald-400 transition-colors font-semibold">
                  Staff
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors font-semibold">
                  Rules
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="minecraft-title text-xl text-emerald-400 mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href={links?.discord_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors font-semibold"
              >
                <MessageCircle size={20} />
                Discord Server
              </a>
              <a
                href={links?.bluemap_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors font-semibold"
              >
                <Map size={20} />
                Bluemap
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors font-semibold"
              >
                <ExternalLink size={20} />
                Wiki
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t-4 border-gray-900 text-center text-gray-400">
          <p className="font-semibold">&copy; {new Date().getFullYear()} ModdedCrate SMP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
