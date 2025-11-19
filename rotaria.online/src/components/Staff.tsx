import { Shield, Crown, Wrench } from 'lucide-react';

const iconMap = {
  crown: Crown,
  shield: Shield,
  wrench: Wrench,
};

export function Staff() {
  const staff  = []

  return (
    <section id="staff" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="minecraft-title text-4xl sm:text-5xl mb-4 text-emerald-400">Our Staff Team</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto font-semibold">
            Meet the dedicated team working behind the scenes to keep ModdedCrate SMP running smoothly
            and ensure everyone has an amazing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member) => {
            const IconComponent = iconMap[member.icon_type as keyof typeof iconMap] || Shield;
            return (
              <div
                key={member.id}
                className="minecraft-card text-center hover:border-emerald-500 transition-all transform hover:scale-105"
              >
                <div className="relative inline-block mb-6">
                  <div className={`w-28 h-28 bg-gradient-to-br ${member.color_gradient} p-2 mx-auto`} style={{ boxShadow: 'inset -4px -4px 0 rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.5)' }}>
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center border-2 border-gray-900">
                      <IconComponent size={48} className="text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="minecraft-title text-2xl font-bold mb-2">{member.name}</h3>
                <div className="text-emerald-400 font-bold text-lg mb-3">{member.role}</div>
                <p className="text-sm text-gray-300 font-semibold">{member.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="minecraft-card inline-block">
            <h3 className="minecraft-title text-2xl mb-3 text-emerald-400">Interested in Joining the Team?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl font-semibold">
              We're always looking for passionate and dedicated players to help moderate and
              improve our server. Applications are reviewed monthly.
            </p>
            <a
              href="#"
              className="minecraft-button-primary"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
