import AnimatedSection from '../components/AnimatedSection';
import { Users, Lightbulb, Compass } from 'lucide-react';

const Mentoring = () => {
    return (
        <div className="pb-20">
            <div className="relative h-[35vh] flex items-center justify-center overflow-hidden mb-12">
                <img
                    src={`${import.meta.env.BASE_URL}assets/original/mentoring-thumb.jpg`}
                    alt="Mentoring Service"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/20 via-[#0f172a]/60 to-[#0f172a]" />

                <AnimatedSection className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                        Personal <span className="text-[#c026d3]">Mentoring</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
                        Flexible technical assistance for individuals and companies. We help you overcome blockers.
                    </p>
                </AnimatedSection>
            </div>

            <div className="container mx-auto px-4">
                <div className="space-y-12">
                    <AnimatedSection className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Your Expert Partner</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Need a second pair of eyes on a complex problem? Or guidance on your career path?
                                Our mentoring service is designed to be flexible. Book by the hour, day, or week.
                            </p>
                            <a href="mailto:loukajc+shop@offenskill.com" target="_blank" className="btn">
                                Get in Touch
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#1e293b] p-6 rounded-xl border border-white/5">
                                <Lightbulb className="w-8 h-8 text-[#c026d3] mb-3" />
                                <h3 className="font-bold mb-1">Brainstorming</h3>
                                <p className="text-sm text-gray-400">Validate your ideas and architecture.</p>
                            </div>
                            <div className="bg-[#1e293b] p-6 rounded-xl border border-white/5">
                                <Compass className="w-8 h-8 text-[#c026d3] mb-3" />
                                <h3 className="font-bold mb-1">Roadmaps</h3>
                                <p className="text-sm text-gray-400">Custom learning paths for your team.</p>
                            </div>
                            <div className="bg-[#1e293b] p-6 rounded-xl border border-white/5 col-span-2">
                                <Users className="w-8 h-8 text-[#c026d3] mb-3" />
                                <h3 className="font-bold mb-1">Technical Support</h3>
                                <p className="text-sm text-gray-400">Troubleshooting Linux, DevOps, or Security tools.</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center p-4 bg-[#1e293b] rounded-xl border border-white/5 hover:border-[#c026d3]/50 transition-colors">
                            <img src={`${import.meta.env.BASE_URL}assets/original/mentoring-1h.png`} alt="1 Hour Session" className="w-full h-auto mb-4 rounded-lg" />
                            <h3 className="font-bold text-lg">1 Hour Session</h3>
                            <p className="text-sm text-gray-400 mt-2">Perfect for quick blockers</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-[#1e293b] rounded-xl border border-white/5 hover:border-[#c026d3]/50 transition-colors">
                            <img src={`${import.meta.env.BASE_URL}assets/original/mentoring-1d.png`} alt="1 Day Deep Dive" className="w-full h-auto mb-4 rounded-lg" />
                            <h3 className="font-bold text-lg">1 Day Deep Dive</h3>
                            <p className="text-sm text-gray-400 mt-2">Architecture & Analysis</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-[#1e293b] rounded-xl border border-white/5 hover:border-[#c026d3]/50 transition-colors">
                            <img src={`${import.meta.env.BASE_URL}assets/original/mentoring-1w.png`} alt="1 Week Sprint" className="w-full h-auto mb-4 rounded-lg" />
                            <h3 className="font-bold text-lg">1 Week Sprint</h3>
                            <p className="text-sm text-gray-400 mt-2">Full Project Support</p>
                        </div>
                    </div>

                    <AnimatedSection className="bg-[#c026d3]/10 rounded-2xl p-8 md:p-12 text-center border border-[#c026d3]/20">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to accelerate your progress?</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            Whether you need a one-off session or regular coaching, we can tailor a plan for you.
                        </p>
                        <a href="mailto:loukajc+shop@offenskill.com" target="_blank" className="btn text-white">
                            Book a Session
                        </a>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default Mentoring;
