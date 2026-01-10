import AnimatedSection from '../components/AnimatedSection';
import { HelpCircle, GraduationCap, Shield, Users } from 'lucide-react';

const FAQ = () => {
    const sections = [
        {
            title: "Training",
            icon: GraduationCap,
            faqs: [
                {
                    question: "I'm not sure I have the prerequisites for a training?",
                    answer: "Reach out, I'm not pushing to sell, and will help you decide wether the aimed training is adequate! 🍀"
                },
                {
                    question: "Do I need a specific OS for the training?",
                    answer: "Yes & No, anything can work, but I'll both provide a distro to install in a VM, and a cloud provisioned machine for you. As long as you can have VirtualBox, an alternative, or NoMachine to access the provisioned VM, you're good!"
                },
                {
                    question: "Where & When can on-site trainings take place?",
                    answer: "I'm based in France (Lyon), but can be anywhere as long as the budget covers the travel & hosting! 😉 Trainings are usually 9am to 5pm CEST time, but can be tweaked on demand 🌻"
                },
                {
                    question: "Why are trainings 2 days long \"only\"?",
                    answer: "Trust me, we'll see quite a few tools and techniques, you'll need time to adopt them to the full! Practice makes a hacker. Guidance (mentoring/training) can help, but spend time on your own with your fresh skill set! 🌹"
                }
            ]
        },
        {
            title: "Pentest & Audits",
            icon: Shield,
            faqs: [
                {
                    question: "How long does a typical pentest take?",
                    answer: "It depends on the scope! A small web app might take 3-5 days, while a complex infrastructure audit could take 2-4 weeks. We'll discuss the timeline during the initial scope call. 🕐"
                },
                {
                    question: "What deliverables do I receive after a pentest?",
                    answer: "You'll receive a comprehensive report with detailed findings, severity ratings, proof-of-concept exploits, and remediation steps. Optional deliverables include an oral restitution presentation and a certificate of pentest. 📜"
                },
                {
                    question: "Do you offer recheck services after we fix vulnerabilities?",
                    answer: "Absolutely! Rechecks are optional but highly recommended. We'll verify that your fixes are effective and issue a certificate of recheck upon successful remediation. ✅"
                },
                {
                    question: "Can you work with our development team during the audit?",
                    answer: "Yes! We believe in a partnership approach. We can work closely with your team, explaining findings in a judgment-free environment and helping build a security-first culture. 🤝"
                },
                {
                    question: "What's the difference between a pentest and a code audit?",
                    answer: "A pentest focuses on finding vulnerabilities through active testing (black/grey box), while a code audit involves deep code review to identify security flaws at the source level. Both are valuable and can be combined! 🔍"
                }
            ]
        },
        {
            title: "Mentoring",
            icon: Users,
            faqs: [
                {
                    question: "Who is mentoring for?",
                    answer: "Everyone! From students wanting to break into the field to professionals needing guidance on specific topics or career moves. 🚀"
                },
                {
                    question: "Can we cover specific technical topics?",
                    answer: "Yes! We can deep dive into web security, network pentesting, code review, tool development, or any other area of offensive security you're interested in. 💻"
                },
                {
                    question: "How do I book a session?",
                    answer: "Simply reach out via email! We'll discuss your needs and find a time that works for both of us. The link is in the footer! 👇"
                }
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 pb-20">
            <AnimatedSection className="pt-12 pb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Frequently Asked <span className="text-[#c026d3]">Questions</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Everything you need to know about our services.
                </p>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto space-y-16 mb-32">
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <AnimatedSection>
                            <div className="flex items-center gap-3 mb-8">
                                <section.icon className="w-8 h-8 text-[#c026d3]" />
                                <h2 className="text-3xl font-heading font-bold">{section.title}</h2>
                            </div>
                        </AnimatedSection>

                        <div className="space-y-6">
                            {section.faqs.map((faq, index) => (
                                <AnimatedSection key={index} delay={index * 100}>
                                    <div className="bg-[#1e293b] p-6 rounded-xl border border-white/5 hover:border-[#c026d3]/30 transition-colors">
                                        <div className="flex gap-4">
                                            <div className="mt-1">
                                                <HelpCircle className="w-6 h-6 text-[#c026d3]" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 text-white">{faq.question}</h3>
                                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FAQ;
