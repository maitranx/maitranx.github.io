const projectdetails = [
    //project 1
    {
        id: 'halo-trade',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/HaloTrade.vue'),
        componentMobile: import(/* webpackChunkName: "project-details" */ '@/components/projects/mobile/HaloTrade.vue'),
        name: 'Aura HaloTrade',
        title: `A scalable Design System for DeFi Trading Platform`,
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    //project 2
    {
        id: 'aura-scan',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/AuraScan.vue'),
        componentMobile: import(/* webpackChunkName: "project-details" */ '@/components/projects/mobile/AuraScan.vue'),
        name: 'AuraScan',
        title: '<p><span class="font-semibold">Blockchain Explorer</span> for Transparent</p><p class="mt-4">Transaction Monitoring</p>',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    //project 3
    {
        id: 'fiserv',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/Fiserv.vue'),
        componentMobile: import(/* webpackChunkName: "project-details" */ '@/components/projects/mobile/Fiserv.vue'),
        name: 'fiserv',
        title: '<p><span class="font-semibold">Global fintech products</span> for banking</p>',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    {
        id: 'costco-wholesale',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/CostcoWholesale.vue'),
        componentMobile: import(/* webpackChunkName: "project-details" */ '@/components/projects/mobile/CostcoWholesale.vue'),
        name: 'Costco Wholesale',
        title: 'Power BI Dashboard for a multi-billion dollar global retailer',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    {
        id: 'beckman',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/Beckman.vue'),
        componentMobile: import(/* webpackChunkName: "project-details" */ '@/components/projects/mobile/Beckman.vue'),
        name: 'HMI System for blood hematology analyzer',
        title: 'Bidding/pilot projects',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    {
        id: 'luna',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/Luna.vue'),
        componentMobile: import(/* webpackChunkName: "project-details" */ '@/components/projects/Luna.vue'),
        name: 'Luna',
        title: 'AI-Driven Software development platform',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    {
        id: 'ds365.ai',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/DS365ai.vue'),
        componentMobile: import(/* webpackChunkName: "project-details" */ '@/components/projects/DS365ai.vue'),
        name: 'DS365.ai',
        title: 'AI-Driven Software development platform',
        relatedProject: null
        // {
        //     relatedProjectsHeading: 'Related Projects',
        //     relatedProjects: [
        //         {
        //             id: 9,
        //             title: 'NFT Marketplace',
        //             img: require('@/assets/images/ui-project-1.jpg'),
        //         },
        //     ],
        // },
    },
    {
        id: 'workshop',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/Workshop.vue'),
        name: 'Team sharing & learning',
        title: 'Internal workshop',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    {
        id: 'hmi',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/HMISystem.vue'),
        name: 'HMI System for blood hematology analyzer',
        title: 'Bidding/pilot projects',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
];
export default projectdetails;
