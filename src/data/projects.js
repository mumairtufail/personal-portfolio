// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage3 from '../portfolio/Hobbiyst/Home.png';
import WebImage4 from '../portfolio/LAR/2.png';
import WebImage5 from '../portfolio/ramzan_app/Theme 1/4 Home before ramzan.png';
import WebImage6 from '../portfolio/blueskycrm/bluesky.png';



import WebImage2 from '../portfolio/daily_expense/final/08.png';
import MobileImage1 from '../portfolio/Arozeen/Home1.png';
import MobileImage2 from '../portfolio/EMS/EMS Dark/Home.png';
import UIImage1 from '../portfolio/lets_ride/4.png';
import UIImage2 from '../portfolio/Construction/Dashboard/HOme.png';

export const projectsData = [
	{
		id: 1,
		title: 'Daily Expense App',
		category: 'Mobile Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'EMS',
		category: 'Web Application',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'Lets Ride',
		category: 'Mobile Applciation',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Construction App',
		category: 'Web Application',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'Arozeen (E-commerce)',
		category: 'Web Application',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Hobbyist',
		category: 'Mobile Application',
		img: WebImage3,
	},

	{
		id:7,
		title: 'LAR Flight Booking',
		category: 'Web Application',
		img: WebImage4,
	},

	{
		id:8,
		title: 'Ramzan App',
		category: 'Mobile Application',
		img: WebImage5,
	},
	{
		id:9,
		title: 'Blue Skye',
		category: 'Web Application',
		img: WebImage6,
	}
];
