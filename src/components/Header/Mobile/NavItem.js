import { useState } from 'react';

const NavItem = ({ items, catagories }) => {
	const [selectedState, setSelectedState] = useState(0);
	return (
		<ul className="grid gap-2 mt-2 text-gray-700 uppercase md:flex">
			{items.map((item, index) => {
				let teddy = false;
				return (
					<li
						onClick={() => setSelectedState(index)}
						className={`w-full py-3 border-b-2 cursor-pointer ${
							selectedState === index
								? 'text-red-900'
								: ''
						}`}
					>
						<div className="flex items-center justify-between px-10">
							<p className="text-xs font-medium tracking-wider">
								{item}
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default NavItem;
