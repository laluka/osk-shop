import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Terminal, Cpu, X, CheckCircle, Calendar, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Training = () => {
    const [selectedLevel, setSelectedLevel] = useState<null | typeof levels[0]>(null);

    const levels = [
        {
            level: "Level 10",
            title: "Rookie",
            icon: Terminal,
            color: "blue",
            desc: "The foundation. Understand the basics of offensive security.",
            fullDesc: "This training is designed for people who want to start their journey into the offensive world. We will cover the basics of web security, offensive tooling, and how to structure your recon process. This is a 2-day training with a lot of practice.",
            keyTakeaways: [
                "Get familiar with linux command line & efficiency tooling",
                "Get to know BurpSuite, Chrome Dev Tools, ffuf, and more!",
                "Spend time practicing & exploiting on OWASP top 10 bugs"
            ],
            prerequisites: [
                "Basic knowledge of Linux & Command Line (ls, cd, curl, man)",
                "Know your browser, have already used the inspection features",
                "Be able to use your brain, google, and LLMs like GPT / Mistral"
            ],
            syllabus: {
                "Day 1": [
                    "Intro to Offensive Tooling",
                    "Intro to OWASP top 10",
                    "Warm Up with Frontend & Backend bugs to exploit"
                ],
                "Day 2": [
                    "Full Exploit Chain analysis",
                    "How to structure your recon process",
                    "Exploiting a production-like application to the full",
                    "Opening on linux privilege escalations techniques"
                ]
            }
        },
        {
            level: "Level 30",
            title: "Expert",
            icon: Cpu,
            color: "orange",
            desc: "Cutting edge. Research and 0-day discovery.",
            fullDesc: "This training is designed for advanced security professionals. We will deep dive into advanced exploitation techniques, focus on code-reading methodologies, and go through real-world 0-day research projects. This is a 2-day training with an intensive hands-on part.",
            keyTakeaways: [
                "Narrow focus on code-reading methodology",
                "Web app & server instrumentation for bug detection",
                "Practicing web 0-day research",
                "Write detailed and clear bug reports"
            ],
            prerequisites: [
                "You enjoy reading code, and are familiar with at least 2/3 languages",
                "Be fluent with XSS, XXE, SSRF, SQLI, RCE, File read/write, unserialize",
                "Scripting capabilities (python or equivalent)",
                "This training requires a sharp mind, and coffee! ☕"
            ],
            syllabus: {
                "Day 1": [
                    "Deep Dive on Code Audit Techniques",
                    "Deep Dive on Code Audit Tooling",
                    "Deep Dive on Fuzzing & Introspection Tooling",
                    "Web-App labs setup & brainstorm on potential findings"
                ],
                "Day 2": [
                    "Practice: Let's find some real 0-days now! 💣",
                    "Exploit development for the bugs found during the training"
                ]
            }
        }
    ];

    return (
        <div className="pb-20 relative">
            <div className="relative h-[35vh] flex items-center justify-center overflow-hidden mb-12">
                <img
                    src={`${import.meta.env.BASE_URL}assets/original/trainings-thumb.jpg`}
                    alt="Training Service"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/20 via-[#0f172a]/60 to-[#0f172a]" />

                <AnimatedSection className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                        Training <span className="text-[#c026d3]">Programs</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
                        Level up your skills with our hands-on cybersecurity training paths. From basics to advanced research.
                    </p>
                </AnimatedSection>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 mx-auto mb-12">
                    {levels.map((item, i) => (
                        <AnimatedSection key={i} className="h-full">
                            <div
                                onClick={() => setSelectedLevel(item)}
                                className="bg-[#1e293b] rounded-2xl p-8 h-full border border-white/5 hover:border-[#c026d3]/50 transition-all hover:-translate-y-2 flex flex-col relative overflow-hidden group cursor-pointer"
                            >
                                <div className={`absolute top-0 right-0 w-40 h-40 bg-${item.color}-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-${item.color}-500/20 transition-all`} />

                                <div className="mb-6 inline-flex p-4 rounded-xl bg-[#0f172a] text-[#c026d3]">
                                    <item.icon className="w-8 h-8" />
                                </div>

                                <div className="mb-4">
                                    <span className="text-sm font-bold tracking-wider text-[#c026d3] uppercase mb-1 block">
                                        {item.level}
                                    </span>
                                    <h2 className="text-3xl font-bold font-heading">{item.title}</h2>
                                    {/* Badges */}
                                    {item.level === "Level 10" && (
                                        <img src={`${import.meta.env.BASE_URL}assets/original/training-badge-rookie.png`} alt="Rookie Badge" className="w-20 h-20 absolute top-6 right-6 opacity-90 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                                    )}
                                    {item.level === "Level 30" && (
                                        <img src={`${import.meta.env.BASE_URL}assets/original/training-badge-expert.png`} alt="Expert Badge" className="w-20 h-20 absolute top-6 right-6 opacity-90 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                                    )}
                                </div>

                                <p className="text-gray-400 mb-8 max-w-[85%]">{item.desc}</p>

                                <div className="mt-auto">
                                    <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Key Takeaways</h3>
                                    <ul className="space-y-3">
                                        {item.keyTakeaways.slice(0, 3).map((topic, j) => (
                                            <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <span className="w-1.5 h-1.5 bg-[#c026d3] rounded-full" />
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-[#c026d3] text-sm mt-4 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Click for details & syllabus →
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="max-w-4xl mx-auto pb-20">
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                        {/* Decorative background accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c026d3]/10 rounded-full blur-3xl -mr-32 -mt-32" />

                        <div className="relative z-10 text-center space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    Upcoming trainings are ⚠️ <span className="text-[#c026d3] font-mono">onDemand()</span> ⚠️
                                </h2>
                                <p className="text-lg text-gray-300">
                                    Groups can be free-formed or already constituted, starting at <span className="text-white font-bold">&ge;2 students</span>
                                </p>
                            </div>

                            <div className="flex flex-col gap-8 text-left max-w-2xl mx-auto">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl shrink-0">🛠️</div>
                                    <p className="text-gray-300 text-lg">The content is always tweaked for the attendees needs</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl shrink-0">📅</div>
                                    <p className="text-gray-300 text-lg">The date is always chosen as a common agreement with every participants</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl shrink-0">💰</div>
                                    <p className="text-gray-300 text-lg font-medium">
                                        Usually <span className="text-white">500&euro;/day/attendee</span>, with a discount applied for <span className="text-[#c026d3]">&gt;6 attendees</span> or <span className="text-[#c026d3]">&gt;3 days</span> of training! 😉
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <p className="text-lg text-gray-300">
                                    Ready to level up? Join one of our public sessions or <a href="https://linktr.ee/TheLaluka" target="_blank" rel="noopener noreferrer" className="text-[#c026d3] font-bold hover:underline">reach out</a> via the links in the footer to book a private training for your team! 👇
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedLevel && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedLevel(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#1e293b] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 relative shadow-2xl z-10"
                        >
                            <button
                                onClick={() => setSelectedLevel(null)}
                                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8 md:p-12">
                                <span className="text-[#c026d3] font-bold tracking-wider uppercase text-sm mb-2 block">{selectedLevel.level}</span>
                                <h2 className="text-4xl font-heading font-bold mb-6">{selectedLevel.title} Training</h2>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    {selectedLevel.fullDesc}
                                </p>

                                <div className="grid md:grid-cols-2 gap-12 mb-12">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            <CheckCircle className="text-[#c026d3]" /> Prerequisites
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedLevel.prerequisites.map((req, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                                    <span className="w-1.5 h-1.5 bg-[#c026d3] rounded-full mt-2" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            <BookOpen className="text-[#c026d3]" /> Key Takeaways
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedLevel.keyTakeaways.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                                    <span className="w-1.5 h-1.5 bg-[#c026d3] rounded-full mt-2" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <Calendar className="text-[#c026d3]" /> Syllabus
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-[#0f172a] p-6 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-lg text-white mb-4 border-b border-[#c026d3]/30 pb-2">Day 1</h4>
                                            <ul className="space-y-3">
                                                {selectedLevel.syllabus["Day 1"].map((topic, i) => (
                                                    <li key={i} className="text-gray-300 text-sm flex gap-3">
                                                        <span className="text-[#c026d3] font-bold">0{i + 1}.</span> {topic}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-[#0f172a] p-6 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-lg text-white mb-4 border-b border-[#c026d3]/30 pb-2">Day 2</h4>
                                            <ul className="space-y-3">
                                                {selectedLevel.syllabus["Day 2"].map((topic, i) => (
                                                    <li key={i} className="text-gray-300 text-sm flex gap-3">
                                                        <span className="text-[#c026d3] font-bold">0{i + 1}.</span> {topic}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Training;
