import { Shield, Crown, Wrench } from 'lucide-react';

const iconMap = {
  crown: Crown,
  shield: Shield,
  wrench: Wrench,
};

export function Staff() {
  const staff: Array<{
    id: number;
    name: string;
    role: string;
    icon_type: string;
    description: string;
  }> = [
    {
      id: 1,
      name: 'Aurora',
      role: 'Owner',
      icon_type: 'crown',
      description: 'Handles vision, community tone, and long–term planning.'
    },
    {
      id: 2,
      name: 'Kestrel',
      role: 'Admin',
      icon_type: 'shield',
      description: 'Moderation, events, and support tickets.'
    },
    {
      id: 3,
      name: 'Patch',
      role: 'Tech Lead',
      icon_type: 'wrench',
      description: 'Modpack tweaks, performance profiling, backend maintenance.'
    },
    {
      id: 4,
      name: 'Mira',
      role: 'Community Helper',
      icon_type: 'shield',
      description: 'Welcomes new players and organizes build collabs.'
    }
  ];

  return (
    <section id="staff" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="minecraft-title text-4xl sm:text-5xl mb-4 text-orange-400">Our Staff Team</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto font-semibold">
            These are the people keeping Rotaria SMP stable, friendly, and moving forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member) => {
            const IconComponent = iconMap[member.icon_type as keyof typeof iconMap] || Shield;
            return (
              <div
                key={member.id}
                className="minecraft-card text-center hover:border-orange-500 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-orange-600" style={{ boxShadow: 'inset -2px -2px 0 rgba(0,0,0,0.3), inset 2px 2px 0 rgba(255,255,255,0.2)' }}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="minecraft-title text-xl mb-2 text-white">{member.name}</h3>
                <p className="text-orange-400 font-bold mb-2">{member.role}</p>
                <p className="text-sm text-gray-300 font-semibold">{member.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="minecraft-card inline-block">
            <h3 className="minecraft-title text-2xl mb-3 text-orange-400">Want to Help Out?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl font-semibold">
              We occasionally open helper or tester spots. If you like organizing, fixing, or welcoming newcomers, keep an eye out.
            </p>
            <a
              href="#"
              className="minecraft-button-primary"
            >
              Future Applications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
