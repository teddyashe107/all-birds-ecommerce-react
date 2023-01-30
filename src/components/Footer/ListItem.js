const ListItem = ({ content }) => {
	return (
		<div>
			<h2 className="uppercase tracking-wider font-bold">
				{content.title}
			</h2>
			<ul className="grid gap-1">
				{content.items.map((item) => {
					return (
						<li>
							<a href="#" className="text-xs">
								{item}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ListItem;