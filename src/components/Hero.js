const Hero = () => {
    return (
		<>
			<div className=" max-h-screen overflow-hidden bg-yellow-400">
				<div className="w-full relative overflow-hidden max-h-[550px] md:max-h-screen">
					<picture>
						<source media="(min-width: 770px)" srcSet="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1280/cms/1eye8E9MoOhVEosonUiHXd/2996e6a8bf8e2dfef4c4daae8086b3a2/FW22_Core_Desktop_Hero-WR.jpg"></source>
						<img
							className="object-cover w-full -mt-4"
							src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_385/cms/7Jl8xThCU7S17XJy9uFKkx/764a2ef4f1d06930da6d65d236419d34/FW22-CORE-Homepage-Mobile-WR-Women.jpg"
							alt="hero section"
						/>
					</picture>

					<div className="absolute  text-left text-white top-1/2">
						<div className="grid gap-3 px-6">
							<h1 className="text-4xl font-bold">
								Keep The Layers Coming
							</h1>
							<p className="font-semibold leading-6 text-md ">
								You know what they say the more
								super soft merino wool shoes,
								the cozier.
							</p>
							<div className="flex w-full gap-3 font-semibold">
								<button className="px-8 text-gray-900 uppercase bg-white">
									Shop men
								</button>
								<button className="px-8 py-4 text-sm text-gray-900 uppercase bg-white">
									shop women
								</button>
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 z-10 w-full">
						<div className="px-6 py-2 sm:py-3 md:py-4 text-sm bg-secondary">
							<p className="text-white">
								<span className="font-bold ">
									{' '}
									Discover Your Perfect Pair{' '}
								</span>{' '}
								Try our Style Quiz to find the
								best pair for you.{' '}
								<a
									href="#"
									className="underline"
								>
									{' '}
									Take the Style Quiz{' '}
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
    );
}

export default Hero;