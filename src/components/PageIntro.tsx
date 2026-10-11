import type { ReactNode } from 'react';

const PageIntro = ({ title, description }: { title: ReactNode; description: string }) => (
    <header className="container mx-auto px-4 pt-12 pb-10 md:pt-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{title}</h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">{description}</p>
    </header>
);

export default PageIntro;
