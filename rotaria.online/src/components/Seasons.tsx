
type Season = {
  id: number;
  title: string;
  start: string;
  end?: string;
  description: string;
  status: 'active' | 'completed';
  features: string[];
  cta?: { label: string; url: string };
};

const mockSeasons: Season[] = [
  {
    id: 2,
    title: 'Season 2',
    start: '2024-10-01',
    description:
      'A fresh world with expanded tech progression, mystical exploration and revamped economy systems.',
    status: 'active',
    features: [
      'Expanded Tech & Magic Trees',
      'Refined Quest System',
      'Player-run Market',
      'New World Generation'
    ]
  },
  {
    id: 1,
    title: 'Season 1',
    start: '2024-06-01',
    end: '2024-09-25',
    description:
      'Our inaugural journey: establishing community roots, testing mod synergy and shaping the long-term vision.',
    status: 'completed',
    features: [
      'Founding Community',
      'Baseline Modpack',
      'Prototype Economy',
      'Exploration Focus'
    ],
    cta: { label: 'View Season 1 Archive', url: '#' }
  }
];

export function Seasons() {
  return (
    <section id="seasons" className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="minecraft-title text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
          Server Seasons
        </h2>
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-semibold"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
        >
          Each season refines progression, balance and community goals. Explore what has
          shaped the world so far.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {mockSeasons.map((season) => {
          const isActive = season.status === 'active';
          return (
            <div
              key={season.id}
              className="minecraft-card flex flex-col gap-5 animate-[hero-fade-in_0.8s_ease-out_forwards]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="minecraft-title text-3xl text-white mb-2">
                    {season.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-300">
                    {season.start}
                    {season.end ? ` — ${season.end}` : ' — Present'}
                  </p>
                </div>
                <span
                  className={isActive ? 'minecraft-badge minecraft-badge-active' : 'minecraft-badge minecraft-badge-completed'}
                >
                  {isActive ? 'ACTIVE' : 'COMPLETED'}
                </span>
              </div>

              <p className="text-gray-200 font-medium leading-relaxed">
                {season.description}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {season.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm font-semibold text-emerald-300"
                  >
                    <span className="h-2 w-2 bg-emerald-500 inline-block" />
                    {f}
                  </li>
                ))}
              </ul>

              {season.cta && (
                <div className="pt-2">
                  <a
                    href={season.cta.url}
                    className="minecraft-button-secondary inline-flex items-center gap-2"
                  >
                    {season.cta.label}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
