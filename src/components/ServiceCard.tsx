import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    link: string;
}

const ServiceCard = ({ title, description, link }: ServiceCardProps) => (
    <Link to={link} className="flex flex-col border-t border-white/20 py-6 hover:border-[#c026d3] transition-colors">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-5">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm text-[#f0abfc] mt-auto">
            Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </span>
    </Link>
);

export default ServiceCard;
