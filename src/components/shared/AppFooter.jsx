import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe
} from 'react-icons/fi';
import { FaInstagram, FaMedium } from 'react-icons/fa';

import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGlobe />,
		url: 'https://www.Kabeerali.me/',
	},
	{
		id: 2,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/kabeer-ali18/',
		
	},
	{
		id: 3,
		icon: <FaMedium />,
		url: 'https://medium.com/@kabeeransari2003',
		
	},
	{
		id: 4,
		icon: <FiGithub />,
		url: 'https://github.com/kabeerali1825',
	},
	{
		id: 5,
		name: 'Instagram',
		icon: <FaInstagram />,
		url: 'https://www.instagram.com/whykabeer/',
	},
	{
		id: 6,
		icon: <FiTwitter />,
		url: 'https://x.com/AliKabeer_?s=08',
		
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
