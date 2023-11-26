// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Aura HaloTrade',
		category: 'A scalable Design System for DeFi Trading Platform',
		img: require('@/assets/images/ui-project-1.jpg'),
		skate: require('@/assets/icons/web3.svg'),
		client: require('@/assets/icons/aura.svg'),
		isFeature: true
	},
	{
		id: 2,
		title: 'Aurascan',
		category: 'Blockchain Explorer for Transparent Transaction Monitoring',
		img: require('@/assets/images/ui-project-2.jpg'),
		skate: require('@/assets/icons/web3.svg'),
		client: require('@/assets/icons/aura.svg'),
		isFeature: true
	},
	{
		id: 3,
		title: 'Dispute workstation; Paypoint',
		category: 'Global fintech products for banking',
		img: require('@/assets/images/ui-project-4.png'),
		skate: require('@/assets/icons/bpi.svg'),
		client: require('@/assets/icons/fiserv.svg'),
		isFeature: false
	},
	{
		id: 4,
		title: 'Diversity Dashboard; Warehouse Factsheet',
		category: 'Power BI Dashboard for a multi-billion dollar global retailer',
		img: require('@/assets/images/ui-project-3.jpg'),
		skate: require('@/assets/icons/bpi.svg'),
		client: require('@/assets/icons/costco.svg'),
		isFeature: true
	},
	{
		id: 5,
		title: 'Bidding/Pilot projects',
		category: 'HMI System for blood hematology analyzer; Website builder studio',
		img: require('@/assets/images/ui-project-5.png'),
		skate: require('@/assets/icons/bpi.svg'),
		client: require('@/assets/icons/costco.svg'),
		isFeature: false
	},
	{
		id: 6,
		title: 'Internal workshop',
		category: 'Holistic Design for digital products in the right time description',
		img: require('@/assets/images/ui-project-3.jpg'),
		skate: require('@/assets/icons/bpi.svg'),
		client: require('@/assets/icons/costco.svg'),
		isFeature: false
	}
];

export default projects;
