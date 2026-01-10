import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import { Shield, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col gap-12 pb-12">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 px-4 overflow-hidden min-h-[40vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/original/hero-bg.jpg"
                        alt="Cybersecurity Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]" />
                </div>

                <div className="container mx-auto text-center z-10 relative">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight drop-shadow-2xl">
                            Ethical Hacking <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c026d3] to-[#c026d3]">@ OffenSkill</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Welcome to OffenSkill, where we deliver cybersecurity trainings, mentoring, code audits, and pentests!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/pentest" className="btn text-lg px-8 py-3 w-full sm:w-auto shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:shadow-[0_0_30px_rgba(192,38,211,0.8)]">
                                Get Secured
                            </Link>
                            <Link to="/training" className="btn btn-outline text-lg px-8 py-3 w-full sm:w-auto backdrop-blur-sm bg-black/20 hover:bg-[#c026d3] border-[#c026d3] text-[#f0abfc] hover:text-white">
                                See Trainings
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4">
                <AnimatedSection className="grid md:grid-cols-3 gap-6">
                    <ServiceCard
                        title="Pentest & Audits"
                        description="Comprehensive security assessments for Web, Cloud, and Linux environments. Find vulnerabilities before they do."
                        icon={Shield}
                        link="/pentest"
                        image="/assets/original/pentests-thumb.jpg"
                        delay={0}
                    />
                    <ServiceCard
                        title="Training"
                        description="From rookie to expert. Master the art of offensive security with our per-level courses."
                        icon={GraduationCap}
                        link="/training"
                        image="/assets/original/trainings-thumb.jpg"
                        delay={100}
                    />
                    <ServiceCard
                        title="Mentoring"
                        description="Personalized guidance to accelerate your career, solve technical blockers, or build your roadmap."
                        icon={Users}
                        link="/mentoring"
                        image="/assets/original/mentoring-thumb.jpg"
                        delay={200}
                    />
                </AnimatedSection>
            </section>
            {/* About Me Section */}
            <section className="container mx-auto px-4 mt-20">
                <AnimatedSection>
                    <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center">
                            {/* Profile Image */}
                            <div className="w-full md:w-1/3 p-8 lg:p-12">
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-[#c026d3] to-[#78174d] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                                    <img
                                        src="/assets/louka-laluka.png"
                                        alt="Louka Jacques-Chevallier"
                                        className="relative rounded-xl w-full aspect-square object-cover shadow-2xl"
                                    />
                                </div>
                            </div>

                            {/* Bio Text */}
                            <div className="w-full md:w-2/3 p-8 lg:p-12 md:pl-0">
                                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
                                    About <span className="text-[#c026d3]">me</span>
                                </h2>
                                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                                    <p className="font-bold text-white">
                                        I go by Laluka online & Louka Jacques-Chevallier IRL
                                    </p>
                                    <p>
                                        I’ve been part of the Offensive Security Field since 2019, mostly consulting, pentesting, red-teaming, blue-tooling, and mentoring.
                                        I've been giving talks for a while now, but always felt that unidirectional relations were not the best fit for teaching...
                                    </p>
                                    <p className="text-white font-medium italic">
                                        Therefore going toward something more human: Teaching & Mentoring! 💌
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
};

export default Home;
