import { team } from '../data/team';

const TeamProfiles = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
        {team.map((member) => (
            <article key={member.name} className="flex items-start gap-5 py-6 border-t border-white/10">
                <img
                    src={`${import.meta.env.BASE_URL}${(member.image ?? '/assets/placeholders/researcher.svg').slice(1)}`}
                    alt={member.image ? member.name : `Portrait placeholder for ${member.name}`}
                    className="w-20 sm:w-28 aspect-square object-cover rounded-sm shrink-0"
                    loading="lazy"
                />
                <div className="min-w-0">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-3">{member.bio}</p>
                    <p className="text-sm text-gray-400">
                        <span className="text-gray-300">Skills: </span>
                        {member.skills.length > 0 ? member.skills.join(' · ') : 'To be announced.'}
                    </p>
                </div>
            </article>
        ))}
    </div>
);

export default TeamProfiles;
