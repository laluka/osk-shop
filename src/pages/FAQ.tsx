import AnimatedSection from '../components/AnimatedSection';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "I'm not sure I have the prerequisites for a training?",
            answer: "Reach out, I'm not pushing to sell, and will help you decide wether the aimes training is adequate! 🍀"
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

            <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
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
    );
};

export default FAQ;
