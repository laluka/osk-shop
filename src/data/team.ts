export type TeamMember = {
    name: string;
    image?: string;
    bio: string;
    skills: string[];
    bookingImages?: Record<'hour' | 'day' | 'week', string>;
};

// Keep collaborator details shared between the homepage and mentoring page.
export const team: TeamMember[] = [
    {
        name: 'Laluka',
        image: '/assets/original/louka-laluka.png',
        bio: 'Louka Jacques-Chevallier. Working in offensive security since 2019, with a love for sharing knowledge through teaching and mentoring.',
        skills: ['Pentesting', 'Code Audits', 'Tooling', 'Mentoring'],
        bookingImages: {
            hour: '/assets/original/mentoring-1h.png',
            day: '/assets/original/mentoring-1d.png',
            week: '/assets/original/mentoring-1w.png',
        },
    },
    {
        name: 'Baptiste p4st1s',
        bio: 'Introduction coming soon.',
        skills: [],
    },
    {
        name: '7h30th3r0n3',
        image: '/assets/original/7h30.png',
        bio: 'Flavien Ruffel. Working in offensive security since 2020, with a passion for hardware red teaming and for sharing knowledge through teaching and mentoring.',
        skills: ['Pentesting', 'Hardware RedTeam', 'OSINT', 'Tooling', 'Mentoring'],
    },
    {
        name: 'Noobosaurus R3x',
        image: '/assets/original/noobo.png',
        bio: 'Hacking with passion. Sharing what I know, learning as I go.',
        skills: ['Pentesting', 'Mentoring', 'OSINT'],
    },
];
