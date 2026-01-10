export interface Partner {
    name: string;
    url: string;
    img: string;
}

export const customers: Partner[] = [
    { name: 'BuyCo', url: 'https://buyco.co/', img: '/assets/trusted-customers/buyco.png' },
    { name: 'Ector', url: 'https://www.ectorparking.com/', img: '/assets/trusted-customers/ector.png' },
    { name: 'ESNA', url: 'https://esna.bzh/', img: '/assets/trusted-customers/esna.jpg' },
    { name: 'Espace des Marques', url: 'https://www.espace-des-marques.com/', img: '/assets/trusted-customers/espace-des-marques.png' },
    { name: 'Fasst', url: 'https://fasst.io/', img: '/assets/trusted-customers/fasst.png' },
    { name: 'Invivox', url: 'https://invivox.com/', img: '/assets/trusted-customers/invivox.png' },
    { name: 'I-Tracing', url: 'https://i-tracing.com/', img: '/assets/trusted-customers/itracing.png' },
    { name: 'ManoMano', url: 'https://www.manomano.fr/', img: '/assets/trusted-customers/manomano.jpg' },
    { name: 'Mineural', url: 'https://www.mineural.ca/', img: '/assets/trusted-customers/mineural.png' },
    { name: 'Oteria', url: 'https://www.oteria.fr/', img: '/assets/trusted-customers/oteria.jpg' },
    { name: 'RGoods', url: 'https://rgoods.com/', img: '/assets/trusted-customers/rgoods.png' },
    { name: 'Root-Me Pro', url: 'https://pro.root-me.org/', img: '/assets/trusted-customers/root-me-pro.jpg' },
    { name: 'RTE', url: 'https://www.rte-france.com/', img: '/assets/trusted-customers/rte.jpg' },
    { name: 'Stackered', url: 'https://stackered.com/', img: '/assets/trusted-customers/stackered.jpg' },
    { name: 'Wealthcome', url: 'https://wealthcome.fr/', img: '/assets/trusted-customers/wealthcome.png' }
];

export const partners: Partner[] = [
    { name: 'Astar', url: 'https://www.astar.org/', img: '/assets/trusted-partners/astar.jpg' },
    { name: 'Ballpoint', url: 'https://ballpoint.fr/fr/', img: '/assets/trusted-partners/ballpoint.jpg' },
    { name: 'Breachunt', url: 'https://www.breachunt.fr/', img: '/assets/trusted-partners/breachunt.jpg' },
    { name: 'Cyberwings', url: 'https://www.cyberwings.fr/', img: '/assets/trusted-partners/cyberwings.jpg' },
    { name: 'Epieos', url: 'https://epieos.com/', img: '/assets/trusted-partners/epieos.jpg' },
    { name: 'FreeLabz', url: 'https://freelabz.com/', img: '/assets/trusted-partners/freelabz.jpg' },
    { name: 'FuzzingLabs', url: 'https://fuzzinglabs.com/', img: '/assets/trusted-partners/fuzzinglabs.jpg' },
    { name: 'Mobeta', url: 'https://mobeta.fr/', img: '/assets/trusted-partners/mobeta.png' },
    { name: 'NetFreed', url: 'https://netfreed.com/', img: '/assets/trusted-partners/netfreed.jpg' },
    { name: 'TechItSimple', url: 'https://techitsimple.com/', img: '/assets/trusted-partners/techitsimple.jpg' }
];

export const allPartners = [...customers, ...partners];
