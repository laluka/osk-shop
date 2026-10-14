import { useRef } from 'react';
import { X } from 'lucide-react';
import PageIntro from '../components/PageIntro';

const training = {
    title: 'Expert',
    description: 'Three days of code audits, exploitation, and real-world 0-day research. The final day focuses on AI-assisted offensive workflows.',
    takeaways: [
        'Code-reading methodology',
        'Web application and server instrumentation',
        'Practical web 0-day research and exploit development',
        'Clear vulnerability reports',
        'AI-assisted variant analysis and vulnerability research',
    ],
    prerequisites: [
        'Comfortable reading code in multiple languages',
        'Familiar with XSS, XXE, SSRF, SQL injection, RCE, file access bugs, and deserialization',
        'Able to write scripts in Python or an equivalent language',
    ],
    syllabus: {
        'Day 1': [
            'Code audit techniques and tooling',
            'Fuzzing and introspection',
            'Set up web application labs and investigate potential findings',
        ],
        'Day 2': [
            'Research real 0-days',
            'Develop exploits for vulnerabilities found during the training',
        ],
        'Day 3 - AI': [
            'AI-assisted vulnerability research',
            'Automate code audits and variant analysis with LLMs',
            'AI-assisted fuzzing, triage, and exploit development',
            'Hands-on 0-day research with an AI assistant',
        ],
    },
};

const Training = () => {
    const syllabusRef = useRef<HTMLDialogElement>(null);

    return (
        <div className="pb-16">
            <PageIntro
                title="Expert Training"
                description="Hands-on offensive security training for experienced researchers and security teams."
            />
            <div className="container mx-auto px-4">
                <article className="border-y border-white/10 py-7 mb-10">
                    <div className="flex items-center gap-4 mb-4">
                        <img src={`${import.meta.env.BASE_URL}assets/original/training-badge-expert.png`} alt="Expert training badge" className="w-12 h-12 object-contain" />
                        <div>
                            <p className="text-xs text-gray-400 mb-1">Level 30 · 3 days</p>
                            <h2 className="text-2xl font-semibold">{training.title}</h2>
                        </div>
                    </div>
                    <p className="text-gray-300 max-w-3xl mb-5">{training.description}</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                        {training.takeaways.map((topic) => <li key={topic}>{topic}</li>)}
                    </ul>
                    <button type="button" onClick={() => syllabusRef.current?.showModal()} className="btn btn-outline mt-6">
                        View details & syllabus
                    </button>
                </article>

                <section>
                    <h2 className="text-xl font-semibold mb-5">Arrange a Training</h2>
                    <dl className="space-y-5 max-w-3xl text-sm">
                        <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                            <dt className="font-semibold">Groups</dt>
                            <dd className="text-gray-300">From 2 attendees, either an existing team or a group formed for the session.</dd>
                        </div>
                        <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                            <dt className="font-semibold">Content & Dates</dt>
                            <dd className="text-gray-300">Content is adapted to the attendees. We agree on dates together.</dd>
                        </div>
                        <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
                            <dt className="font-semibold">Pricing</dt>
                            <dd className="text-gray-300">Usually 600€/day/attendee over 3 days, including the AI day. Discounts apply for more than 6 attendees or more than 3 days of training.</dd>
                        </div>
                    </dl>
                    <a href="mailto:loukajc+shop@offenskill.com?subject=Expert%20training" className="btn mt-7">Ask about training</a>
                </section>
            </div>

            <dialog
                ref={syllabusRef}
                aria-labelledby="training-syllabus-title"
                className="bg-bg text-text max-w-4xl max-h-[85vh] p-0 border border-white/20 rounded-sm backdrop:bg-black/70"
                style={{ width: 'calc(100% - 2rem)' }}
                onClick={(event) => {
                    if (event.target === event.currentTarget) syllabusRef.current?.close();
                }}
            >
                <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-5">
                        <h2 id="training-syllabus-title" className="text-2xl font-semibold">Expert Training</h2>
                        <button type="button" onClick={() => syllabusRef.current?.close()} aria-label="Close syllabus" className="p-2 hover:bg-white/5 rounded-sm">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-gray-300 mb-7">{training.description}</p>
                    <h3 className="font-semibold mb-3">Prerequisites</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 mb-8">
                        {training.prerequisites.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <h3 className="font-semibold mb-4">Syllabus</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(training.syllabus).map(([day, topics]) => (
                            <section key={day} className="border-t border-white/10 pt-4">
                                <h4 className="font-semibold mb-3">{day}</h4>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                                    {topics.map((topic) => <li key={topic}>{topic}</li>)}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Training;
