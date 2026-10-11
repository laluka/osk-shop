import ServiceCard from '../components/ServiceCard';
import TeamProfiles from '../components/TeamProfiles';
import LogoGrid from '../components/LogoGrid';
import { customers, partners } from '../data/partners';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const Home = () => {
    const shuffledCustomers = useMemo(() => shuffleArray(customers), []);
    const shuffledPartners = useMemo(() => shuffleArray(partners), []);

    return (
        <div className="container mx-auto px-4 pb-16">
            <section className="pt-14 pb-12 md:pt-20 md:pb-16">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mb-5">
                    Ethical hacking at <span className="text-[#c026d3]">OffenSkill</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mb-7">
                    Pentests, code audits, expert training, and mentoring.
                    Four independent researchers working with your team.
                </p>
                <div className="flex flex-wrap gap-3">
                    <Link to="/pentest" className="btn">Discuss an audit</Link>
                    <Link to="/training" className="btn btn-outline">View training</Link>
                </div>
            </section>

            <section aria-label="Services" className="grid md:grid-cols-3 gap-x-8 mb-12">
                <ServiceCard
                    title="Pentest & Audits"
                    description="Web, Cloud, Linux, Hardware & IoT, OSINT, and Reverse Engineering."
                    link="/pentest"
                />
                <ServiceCard
                    title="Training"
                    description="Code audits, 0-day research, and AI-assisted offensive security."
                    link="/training"
                />
                <ServiceCard
                    title="Mentoring"
                    description="Work through a technical blocker, review your tooling, or plan what to learn next."
                    link="/mentoring"
                />
            </section>

            <section className="mb-14">
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-300 max-w-3xl mb-7">
                    We're four independent collaborators working as peers. We combine our skills in offensive security
                    with Hardware & IoT, OSINT, and Reverse Engineering. We aim to work in pairs and stay close to your team,
                    sharing what we find and how to fix it.
                </p>
                <TeamProfiles />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Customers</h2>
                <LogoGrid items={shuffledCustomers} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-6">Trusted Partners</h2>
                <LogoGrid items={shuffledPartners} />
            </section>
        </div>
    );
};

export default Home;
