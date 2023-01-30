import ListItem from './ListItem';
import ImageList from './ImageList';
import footerData from './footer.json'
import socials from './socials.json'
import flags from './flags.json'


const Footer = () => {
	return (
		<footer className="px-8 py-10 mt-6 text-gray-100 bg-black">
			<p className="text-gray-100 md:text-left">
				Enter you email to stay in touch!
			</p>

			<div className="flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-row lg:max-w-lg">
				<input
					type="text"
					placeholder=""
					className="w-full md:col-span-2 mt-1 bg-gray-600 border-b-2 border-gray-200 rounded-sm py-2 "
				/>
				<button
					type="button"
					className="mt-1 font-bold tracking-wider text-gray-100 uppercase bg-gray-600 rounded-xs md:inline-block md:ml-5 lg:max-w-sm lg:px-5 lg:whitespace-nowrap"
				>
					Sign up
				</button>
			</div>

			<div className="grid gap-5 my-10 text-center lg:text-left lg:grid-cols-4">
				<div className="lg:col-span-2">
					<div className="lg:grid lg:grid-cols-2">
						<ListItem content={footerData[0]} />
						<ListItem content={footerData[1]} />
					</div>
				</div>
				<div className="lg:col-span-2">
					{' '}
					<ListItem content={footerData[2]} />
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-6 text-center lg:grid lg:grid-cols-4 lg:my-16 lg:text-left">
				<div>
					<h2 className="font-bold tracking-wider uppercase">
						FOLLOW THE FLOCK
					</h2>
					<p className="text-sm">
						Exclusive offers, a heads up on new things,
						and sightings of Allbirds in the wild. Oh,
						we have cute sheep, too. #weareallbirds
					</p>
					<ul className="flex justify-center lg:justify-start gap-5 mt-5">
						{socials.map((social) => {
							return (
								<li key={social}>
									<img
										src={social}
										alt="social medias"
										className="cursor-pointer"
									/>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="my-3 lg:flex lg:justify-center">
					<img
						src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/1X4EOQF1JJOjMbo48vDUzB/c249da5825f9ae39f1f53bdb90d65285/icon-b-corp.svg"
						alt="some logo"
					/>
				</div>
				<div className="col-span-2">
					<ImageList data={flags} />
				</div>
			</div>

			<div className="mb-10 text-center space-y-9 lg:mx-5">
				<p className="text-sm">
					© 2022 Allbirds, Inc. All Rights Reserved.{' '}
					<a href="#" className="underline">
						Terms
					</a>
					,{' '}
					<a href="#" className="underline">
						Privacy
					</a>{' '}
					&{' '}
					<a href="#" className="underline">
						Accessibility
					</a>
				</p>
				<p className="text-sm underline">
					{' '}
					<a href="#">
						Do Not Sell My Personal Information
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
