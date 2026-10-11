import PageIntro from '../components/PageIntro';

const FAQ = () => {
    const sections = [
        {
            title: "Team & Collaboration",
            faqs: [
                {
                    question: "Who is behind OffenSkill?",
                    answer: "We're four independent collaborators working as peers. We bring complementary skills to each project, with OffenSkill coordinating the engagement."
                },
                {
                    question: "Do you work in pairs?",
                    answer: "Whenever possible, yes. Working in pairs helps us cross-check findings, work efficiently, and keep testing safe."
                },
                {
                    question: "Who handles contracts and confidentiality?",
                    answer: "OffenSkill handles your contract, communications, and project tools. Our independent collaborators work under subcontracting contracts and NDAs and carry professional liability insurance."
                }
            ]
        },
        {
            title: "Pentest & Audits",
            faqs: [
                {
                    question: "What can you assess?",
                    answer: "Web applications, cloud infrastructure, Linux, Android, and now Hardware & IoT, OSINT, and Reverse Engineering. We agree on the scope and timeline with you before testing."
                },
                {
                    question: "Do you use AI during audits?",
                    answer: "Yes, we use AI-assisted workflows while accounting for their risks. We favor pre-production environments and keep testing within the agreed scope, with controlled impact."
                },
                {
                    question: "Can our team work with you during the audit?",
                    answer: "Yes. We open a direct communication channel between your developers and our pentesters and keep technical and leadership teams involved. By arrangement, you can also join audit sessions to learn about our methods and tools."
                },
                {
                    question: "What do we receive, and can you verify our fixes?",
                    answer: "You receive a report with findings, severity ratings, proof of concepts, and remediation guidance. An optional recheck verifies your fixes, with a recheck certificate after successful remediation."
                }
            ]
        },
        {
            title: "Training & Mentoring",
            faqs: [
                {
                    question: "Which option fits my experience?",
                    answer: "Our expert training is for experienced security professionals. Mentoring offers individual guidance for students and professionals alike. Email us with your goals and background, and we'll help you choose a suitable format and mentor."
                },
                {
                    question: "Do I need a specific OS for training?",
                    answer: "No specific host OS is required. We provide a training VM and a cloud machine; you need a compatible VM tool or NoMachine to access the cloud environment."
                },
                {
                    question: "Can an audit lead to training for our team?",
                    answer: "Yes. We can follow an audit with a few days of training tailored to your stack, or help build tools and skills so your team can assess applications before the next audit."
                }
            ]
        }
    ];

    return (
        <div className="pb-16">
            <PageIntro title="Frequently Asked Questions" description="Practical answers about our team, audits, training, and mentoring." />
            <div className="container mx-auto px-4 space-y-9">
                {sections.map((section) => (
                    <section key={section.title} className="max-w-4xl">
                        <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                        {section.faqs.map((faq) => (
                            <details key={faq.question} className="border-t border-white/10 py-4">
                                <summary className="cursor-pointer font-medium text-sm text-white">{faq.question}</summary>
                                <p className="text-sm text-gray-300 leading-relaxed mt-3 max-w-3xl">{faq.answer}</p>
                            </details>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
