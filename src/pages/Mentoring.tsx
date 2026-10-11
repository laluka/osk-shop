import PageIntro from '../components/PageIntro';
import { team } from '../data/team';

const durations = [
    { id: 'hour', label: '1 Hour', detail: 'A question or technical blocker.', placeholder: '/assets/placeholders/mentoring-1h.svg' },
    { id: 'day', label: '1 Day', detail: 'A focused review or deep dive.', placeholder: '/assets/placeholders/mentoring-1d.svg' },
    { id: 'week', label: '1 Week', detail: 'Time to work through a larger project.', placeholder: '/assets/placeholders/mentoring-1w.svg' },
] as const;

const Mentoring = () => (
    <div className="pb-16">
        <PageIntro
            title="Mentoring"
            description="Technical help and learning sessions for individuals and teams. Book by the hour, day, or week."
        />

        <div className="container mx-auto px-4">
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Researchers & Skills</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                    {team.map((member) => (
                        <li key={member.name}>
                            <strong className="font-semibold text-white">{member.name}</strong>
                            {' — '}
                            {member.skills.length > 0 ? member.skills.join(', ') : 'Skills to be announced.'}
                        </li>
                    ))}
                </ul>
            </section>

            <section aria-labelledby="booking-title">
                <h2 id="booking-title" className="text-xl font-semibold mb-3">Book a Session</h2>
                <p className="text-sm text-gray-300 max-w-2xl mb-6">
                    Choose a researcher and duration to email us about a session. We'll confirm the topic and availability together.
                </p>

                <div className="space-y-7">
                    {team.map((member, index) => (
                        <section key={member.name} aria-labelledby={`booking-researcher-${index}`} className="border-t border-white/10 pt-5">
                            <h3 id={`booking-researcher-${index}`} className="font-semibold mb-3">{member.name}</h3>
                            <div className="grid grid-cols-3 gap-3 sm:gap-5">
                                {durations.map((duration) => {
                                    const image = member.bookingImages?.[duration.id] ?? duration.placeholder;
                                    const subject = encodeURIComponent(`Mentoring: ${member.name} / ${duration.label}`);
                                    return (
                                        <a
                                            key={duration.id}
                                            href={`mailto:loukajc+shop@offenskill.com?subject=${subject}`}
                                            aria-label={`Request ${duration.label} of mentoring with ${member.name}`}
                                            className="block hover:text-[#f0abfc] transition-colors"
                                        >
                                            <img
                                                src={`${import.meta.env.BASE_URL}${image.slice(1)}`}
                                                alt={member.bookingImages ? `${member.name}: ${duration.label} mentoring` : `Booking image placeholder: ${member.name}, ${duration.label}`}
                                                className="w-full aspect-video object-cover rounded-sm border border-white/10 mb-2"
                                                loading="lazy"
                                            />
                                            <span className="block text-sm font-medium">{duration.label}</span>
                                            <span className="hidden sm:block text-xs text-gray-400 mt-1">{duration.detail}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

export default Mentoring;
