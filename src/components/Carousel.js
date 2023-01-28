import { useCallback } from 'react';
import { useRef, useState } from 'react';
import BaseBtn from './Buttons/BaseBtn';

const categories = ['For everyday', 'for the rain', 'for running'];

const Carousel = ({ products }) => {
	const [active, setActive] = useState(0);

	const previousIndex = useRef(0);
	const scroller = useRef();

	const prev = useCallback((index) => {
		console.log('prev is called')
		const scrollLeft = scroller.current.scrollLeft;
		const itemWidth = parseInt(
			getComputedStyle(scroller.current.children[0]).width
		);

		scroller.current.scrollLeft = scrollLeft - itemWidth * index;
	
	}, []);

	const next = (index) => {
		console.log('next is called')
		requestAnimationFrame(() => {
			const scrollLeft = scroller.current.scrollLeft;
			const itemWidth = parseInt(
				getComputedStyle(scroller.current.children[0]).width
			);
		console.log(scrollLeft)
		console.log(itemWidth, 'item width')
			scroller.current.scrollLeft = scrollLeft + itemWidth * index;
			
		});
	};

	const slide = (index) => {
		if (index === previousIndex.current) return;
		if (index > previousIndex.current) {
			next(index);
			previousIndex.current = index;
		} else {
			if (index === 0) {
				prev(2);
			}
			prev(index);
			previousIndex.current = index;
		}
	};

	const handleSlider = (index) => {
		setActive(index);
		slide(index);
	};

	return (
		<div>
			<h2 className="mt-8 text-2xl font-medium text-gray-900 lg:text-3xl lg:font-bold">Our Favorites</h2>
			<div className="relative">
				<ul className="relative z-20 flex px-8 ml-2 overflow-auto text-sm font-medium tracking-wider text-gray-700 uppercase lg:justify-around lg:tracking-widest lg:text-lg whitespace-nowrap scrollbar-hide">
					{categories.map((item, index) => {
						return (
							<li
								onClick={() =>
									handleSlider(index)
								}
								className={`${
									index === active
										? 'border-b-2 border-black text-black'
										: ''
								} py-4 px-4 cursor-pointer`}
							>
								{item}
							</li>
						);
					})}
				</ul>
				<div className="absolute -bottom-[0.04rem] w-full bg-gray-200 h-1"></div>
			</div>

			<div
				ref={scroller}
				className="flex space-x-3 overflow-hidden lg:relative lg:space-x-4 lg:mx-12 lg:mt-4 lg:flex-1 pb-9 snap-x scroll-smooth scrollbar-hide"
			>
				{products.product.map((item, index) => {
					return (
						<div className="mt-4  shadow-2xl lg:shadow-lg min-w-[300px] snap-center lg:flex-1">
							<div className="relative">
								<div className="overflow-hidden rounded-sm">
									<img
										className="aspect-square lg:w-full object-cover hover:scale-105 ease-in-out transition-transform duration-[.4s]"
										src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_333,b_rgb:f5f5f5/cms/3XfSPNpHJ8yqP6lTBXF9V0/65e257d824e88bf231ab8d3a45ac559f/Category-Carousel-Tile-min.jpg"
										alt="product footage"
									/>
								</div>
								<div className="absolute flex justify-between w-full px-4 bottom-10">
									<div
										onClick={() =>
											prev(2)
										}
										className={`${
											!index
												? '-z-10'
												: ''
										} ${
											index !==
											active
												? ''
												: ''
										} lg:hidden flex w-10 h-10  bg-white rounded-full items-center justify-center ring-2 ring-gray-200 cursor-pointer hover:ring-gray-300`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={
												3
											}
											stroke="currentColor"
											className="w-6 h-6 text-gray-600"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.75 19.5L8.25 12l7.5-7.5"
											/>
										</svg>
									</div>
									<div
										onClick={() =>
											next(2)
										}
										className={`${
											index ===
											products
												.product
												.length -
												1
												? '-z-10'
												: ''
										} ${
											index !==
											active
												? ''
												: ''
										} lg:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center ring-2 ring-gray-200 cursor-pointer hover:ring-gray-300`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={
												3
											}
											stroke="currentColor"
											className="w-6 h-6 text-gray-600"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M8.25 4.5l7.5 7.5-7.5 7.5"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div className="px-4">
								<div>
									<h2 className="pt-4 pb-1 text-xl text-left cursor-pointer">
										Tree Flyer
									</h2>
									<hr className="bg-gray-400" />
									<div className="flex items-center mt-2 space-x-3 cursor-pointer">
										<div className="w-8 h-8 shrink-0">
											<img
												src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_40/cms/1JKyYg5IBgDaJxde4FQeSM/5fe6bae24d75c56616bb1ede00cbb1ca/Weather_Ready.jpg"
												alt="product description"
											/>
										</div>
										<p className="text-sm font-normal text-left text-gray-800">
											Water-repellent
											Long Distance
											Runs
										</p>
									</div>
								</div>
								<div className="grid gap-2 mt-3 mb-6">
									<BaseBtn>
										shop men
									</BaseBtn>
									<BaseBtn>
										shop women
									</BaseBtn>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
