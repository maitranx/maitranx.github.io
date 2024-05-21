// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
    {
        id: 'ds365.ai',
        title: 'DS365.ai',
        category: 'A cloud-based service that integrates advanced data analytics and AI/ML models to optmize oilfield operations.',
        img: require('@/assets/images/ds365ai_thumbnail.jpg'),
        skate: null,
        client: require('@/assets/icons/HAL_logo.jpg'),
        isFeature: true,
        isContribute: false,
    },
    {
        id: 'luna',
        title: 'Luna MVP',
        category: 'AI-Driven software development platform that redefines the traditional approach to creating applications.',
        img: require('@/assets/images/Luna_thumbnail-min.jpg'),
        skate: null,
        client: require('@/assets/icons/Luna_logo.svg'),
        isFeature: true,
        isContribute: false,
    },
    {
        id: 'costco-wholesale',
        title: 'Diversity Dashboard; Warehouse Factsheet',
        category: 'UX design for Power BI Dashboard for a multi-billion dollar global retailer',
        img: require('@/assets/images/ui-project-3.jpg'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/icons/costco.svg'),
        isFeature: true,
        isContribute: false,
    },
    {
        id: 'halo-trade',
        title: 'Aura HaloTrade',
        category: 'A scalable Design System for DeFi Trading Platform',
        img: require('@/assets/images/ui-project-1.jpg'),
        skate: require('@/assets/icons/Web3_logo.svg'),
        client: require('@/assets/icons/Aura_logo.svg'),
        isFeature: false,
        isContribute: false,
    },
    {
        id: 'aura-scan',
        title: 'Aurascan',
        category: 'UI design for Blockchain Explorer',
        img: require('@/assets/images/ui-project-2.jpg'),
        skate: require('@/assets/icons/Web3_logo.svg'),
        client: require('@/assets/icons/Aura_logo.svg'),
        isFeature: false,
        isContribute: false,
    },

    {
        id: 'fiserv',
        title: 'Dispute workstation; Paypoint',
        category: 'Global fintech products for banking',
        img: require('@/assets/images/ui-project-4.jpg'),
        skate: require('@/assets/icons/sketch.svg'),
        client: require('@/assets/icons/fiserv.svg'),
        isFeature: false,
        isContribute: false,
    },
    {
        id: 'beckman',
        title: 'Bidding/Pilot projects',
        category: 'HMI System for blood hematology analyzer; Website builder studio',
        img: require('@/assets/images/ui-project-5.jpg'),
        skate: require('@/assets/images/hmi.svg'),
        client: require('@/assets/images/logo_confidential.svg'),
        isFeature: false,
        isContribute: true,
    },
    {
        id: 'workshop',
        title: 'Internal workshop',
        category: 'Through knowledge sharing and skill development initiatives, I aim to create an environment where everyone can thrive, grow, and contribute to our shared success.',
        img: require('@/assets/images/thumbnail_presentation.jpg'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/images/logo_fpt_des.svg'),
        isFeature: false,
        isContribute: true,
        isSkateHidden: true
    }
];

export default projects;
