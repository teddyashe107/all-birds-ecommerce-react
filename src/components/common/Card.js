import useSliderHook from "common/hooks/useSliderHook";
import { useRef, useEffect, useState } from "react";

const ProductCard = ({products}) => {  
  const [viewPort, setViewPort] = useState(0);
  const scrollableElement = useRef()
  const scroller = useRef()
  const prevIcon = useRef()
  const nextIcon = useRef()


  const next = () => {
    console.log('next is called')
    console.log(scroller.current.scrollLeft)
    const elementWidth = parseInt(getComputedStyle(scrollableElement.current).width)
    console.log(elementWidth, 'element width')
    console.log(`${viewPort} initial view port`)
    scroller.current.scrollLeft = scroller.current.scrollLeft + elementWidth
    console.log(scroller.current.scrollLeft, 'scs >>>>>')
    setViewPort(scroller.current.scrollLeft + elementWidth);

  }

  const prev = () => {
    console.log('prev is called')
		const elementWidth = parseInt(
			getComputedStyle(scrollableElement.current).width
		);
		scroller.current.scrollLeft =
			scroller.current.scrollLeft - elementWidth;
      console.log(scroller.current.scrollLeft, 'prev scroller scroll left')
    setViewPort(0);
  };

  useEffect(() => {
        const elementWidth = parseInt(getComputedStyle(scrollableElement.current).width)
        console.log(elementWidth * products.length, 'final position' )
  }, [])

  return (
		<>
			<h2 className="text-2xl font-semibold text-left px-6 mt-10">
				{products.title}
			</h2>
      <div className="relative">
			<div
				ref={scroller}
				className="overflow-x-auto pt-5 pb-10 scrollbar-hide scroll-smooth"
			>
				<div className=" grid grid-flow-col auto-cols-[91%] gap-4 lg:auto-cols-[30%] ">
					<div className="absolute flex justify-between bottom-2/4 w-full px-16 z-50">
						<div
              ref={prevIcon}
							onClick={prev}
							className={` ${viewPort === 0  ? ' w-0 h-0' : ''} bg-white flex w-10 h-10 rounded-full items-center justify-center ring-2 ring-gray-200 cursor-pointer hover:ring-gray-300`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={3}
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
              ref={nextIcon}
							onClick={next}
							className={`${viewPort ? "-z-50 w-0 h-0" : ''} w-10 h-10 bg-white rounded-full flex items-center justify-center ring-2 ring-gray-200 cursor-pointer hover:ring-gray-300`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={3}
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
					{products.product.map((product) => {
						return (
							<div
								ref={scrollableElement}
								className="md:hover:shadow-2xl md:hover:z-10]"
							>
								<div className="overflow-hidden rounded-sm shadow-lg md:shadow-none lg:p-6 lg:mt-0 cursor-pointer">
									<div>
										<img
											src={
												product.image
											}
											alt={
												product.title
											}
											className="object-cover w-full hover:scale-105 ease-in-out duration-[.3s]  transition-transform aspect-square ]"
										/>
									</div>

									<div className="px-3 py-2 text-left">
										<h3 className="text-lg leading-6">
											{
												product.title
											}
										</h3>
										<p className="py-2 tracking-wide text-gray-700">
											{' '}
											{
												product.desc
											}{' '}
										</p>
										<p className="text-gray-700">
											{' '}
											{
												product.price
											}{' '}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
      </div>
		</>
  );
}

export default ProductCard;