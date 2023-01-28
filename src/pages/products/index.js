import Card from "components/Card";
import SearchBar from "components/SearchBar"
import products from "./products.json"


const Products = () => {
	return (
		<main>
			<SearchBar />
			<div className="grid grid-cols-2 gap-4 md:gap-0 mx-8 md:max-w-6xl md:mx-auto ">
				{products.map((product) => {
					return <Card product={product} />;
				})}
			</div>
		</main>
	);
};

export default Products;
