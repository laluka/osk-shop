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
        name: 'Researcher X',
        bio: 'Introduction coming soon.',
        skills: [],
    },
    {
        name: 'Researcher Y',
        bio: 'Introduction coming soon.',
        skills: [],
    },
    {
        name: 'Researcher Z',
        bio: 'Introduction coming soon.',
        skills: [],
    },
];
