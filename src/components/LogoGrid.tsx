import type { Partner } from '../data/partners';

const LogoGrid = ({ items }: { items: Partner[] }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item) => (
            <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-28 flex items-center justify-center p-4 border border-white/10 rounded-sm hover:border-white/30 transition-colors"
            >
                <img
                    src={item.img.startsWith('/') ? `${import.meta.env.BASE_URL}${item.img.slice(1)}` : item.img}
                    alt={item.name}
                    className="max-h-20 max-w-full object-contain"
                    loading="lazy"
                />
            </a>
        ))}
    </div>
);

export default LogoGrid;
