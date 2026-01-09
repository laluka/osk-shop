import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    link: string;
    delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, link, delay = 0 }: ServiceCardProps) => {
    return (
        <div
            className="bg-[#1e293b] p-8 rounded-2xl border border-white/5 hover:border-[#c026d3]/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c026d3]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-[#c026d3]/10" />

            <Icon className="w-12 h-12 text-[#c026d3] mb-6" />

            <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
                {description}
            </p>

            <Link
                to={link}
                className="inline-flex items-center gap-2 text-[#c026d3] font-semibold group-hover:gap-3 transition-all"
            >
                Learn more <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
};

export default ServiceCard;
