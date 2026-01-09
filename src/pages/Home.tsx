import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import { Shield, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col gap-12 pb-12">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 px-4 overflow-hidden min-h-[60vh] flex items-center">
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
                            <Link to="/training" className="btn btn-outline text-lg px-8 py-3 w-full sm:w-auto backdrop-blur-sm bg-black/20 hover:bg-[#c026d3] border-[#c026d3]">
                                Start Learning
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
                        delay={0}
                    />
                    <ServiceCard
                        title="Training"
                        description="From rookie to expert. Master the art of offensive security with our Level 10, 20, and 30 courses."
                        icon={GraduationCap}
                        link="/training"
                        delay={100}
                    />
                    <ServiceCard
                        title="Mentoring"
                        description="Personalized guidance to accelerate your career, solve technical blockers, or build your roadmap."
                        icon={Users}
                        link="/mentoring"
                        delay={200}
                    />
                </AnimatedSection>
            </section>
        </div>
    );
};

export default Home;
