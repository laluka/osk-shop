import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import type { Partner } from '../data/partners';

interface LogoMarqueeProps {
    title: string;
    items: Partner[];
    className?: string;
    speed?: number; // Higher is slower (seconds for one full rotation)
    titleStyle: 'purple-white' | 'white-purple';
}

const LogoMarquee = ({ title, items, className = "", speed = 40, titleStyle }: LogoMarqueeProps) => {
    const [randomOffset, setRandomOffset] = useState(0);

    useEffect(() => {
        // Random start position between 0 and -50% (covering one full set of items)
        setRandomOffset(Math.random() * -50);
    }, []);

    // Double the items for a seamless loop
    const doubledItems = useMemo(() => [...items, ...items], [items]);

    const titleContent = titleStyle === 'purple-white' ? (
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-center text-white">
            {title.split(' ')[0]} <span className="text-[#c026d3]">{title.split(' ').slice(1).join(' ')}</span>
        </h2>
    ) : (
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-center text-white">
            <span className="text-[#c026d3]">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
        </h2>
    );

    return (
        <section className={`overflow-hidden py-16 ${className}`}>
            <div className="container mx-auto px-4 mb-8">
                {titleContent}
            </div>

            <div className="relative flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <motion.div
                    className="flex items-center gap-8 pr-8"
                    animate={{
                        x: [`${randomOffset}%`, `${randomOffset - 50}%`],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: speed,
                            ease: "linear",
                        },
                    }}
                >
                    {doubledItems.map((partner, index) => (
                        <div
                            key={`${partner.name}-${index}`}
                            className="flex-shrink-0 w-64 h-32 flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-[#c026d3]/40 transition-colors group"
                        >
                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
                            >
                                <img
                                    src={partner.img.startsWith('/') ? `${import.meta.env.BASE_URL}${partner.img.slice(1)}` : partner.img}
                                    alt={partner.name}
                                    className="max-h-16 max-w-full object-contain"
                                />
                            </a>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogoMarquee;
