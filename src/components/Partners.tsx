import AnimatedSection from './AnimatedSection';
import type { Partner } from '../data/partners';

interface PartnersProps {
    title?: string;
    items: Partner[];
    className?: string;
}

const Partners = ({ title, items, className = "py-12" }: PartnersProps) => {
    return (
        <section className={`container mx-auto px-4 ${className}`}>
            <AnimatedSection>
                {title && (
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-center text-white">
                        {title}
                    </h2>
                )}

                <div className="flex flex-wrap justify-center gap-8">
                    {items.map((partner) => (
                        <div key={partner.url} className="flex-grow-0 flex-shrink-0 w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-h-[180px] flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-3xl hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-[#c026d3]/40 hover:shadow-[0_0_40px_rgba(192,38,211,0.15)] group relative overflow-hidden">
                            {/* Decorative background glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#c026d3]/0 via-[#c026d3]/10 to-[#c026d3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 z-10"
                            >
                                <img
                                    src={partner.img.startsWith('/') ? `${import.meta.env.BASE_URL}${partner.img.slice(1)}` : partner.img}
                                    alt={partner.name}
                                    className="max-h-40 max-w-[85%] object-contain filter brightness-95 contrast-110 group-hover:brightness-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Partners;
