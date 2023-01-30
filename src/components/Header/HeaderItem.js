const HeaderItem = ({ items }) => {
	return (
		<div className="hidden lg:flex">
			<ul className="flex space-x-8 uppercase text-xs lg:text-md lg:font-semibold lg:tracking-wider font-medium text-gray-900">
				{items.map((item) => {
					return <li>{item}</li>;
				})}
			</ul>
		</div>
	);
};

export default HeaderItem;
