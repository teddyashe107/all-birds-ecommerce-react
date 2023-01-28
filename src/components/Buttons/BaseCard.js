import Banner from "../PanaromaImage";
import BaseBtn from "./BaseBtn";

const BaseCard = ({data}) => {
    return (
		<div className="mt-9">
			<div className="h-[550px] overflow-hidden">
				<picture>
					<source
						media="(min-w-770px)"
						srcSet="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1536/cms/1BvLBpfQwcrfG9Fo3X7z7S/77c2b67353a1a3244512c8234d930cee/23Q1_LNY_Site_Secondary-Hero_3840x1995.jpg"
					></source>
					<img
						className="w-full object-cover"
						src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/66XxrQvrjyiBcBASqqAhCu/6c5aadfc0bec739fd429fba3eed6ef77/23Q1_LNY_Site_Secondary-Hero_750x974.jpg"
						alt="/"
					/>
				</picture>
			</div>

			<div className="grid text-center mt-4 gap-4 px-6 lg:gap-8 lg:mt-8">
				<h2 className="text-2xl font-medium lg:text-4xl lg:font-bold">
					{data.title}
				</h2>
				<p className="text-gray-800 px-5 ">{data.desc}</p>
				{data.buttons.length > 1 ? (
					<div className="grid grid-flow-col gap-2 px-2  lg:mx-auto">
						{data.buttons.map((btn) => {
							return <BaseBtn>{btn.title}</BaseBtn>;
						})}
					</div>
				) : (
					<div className="lg:w-1/4 mx-auto">
						<BaseBtn>{data.buttons[0].title}</BaseBtn>
					</div>
				)}
			</div>
		</div>
    );
}


export default BaseCard;
