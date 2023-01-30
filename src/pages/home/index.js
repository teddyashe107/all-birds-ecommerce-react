import Hero from 'components/Hero';
import ProductCard from 'components/common/Card';
import BaseCard from 'components/Buttons/BaseCard';
import Carousel from 'components/Carousel';
import Newsletter from 'components/Newsletter';
import data from './data.json'
import panoramas from './panoramas.json'



const Home = () => {
	return (
		<>
			<Hero />
			<Carousel products={data.products[0]} />
			<BaseCard data={panoramas.panorama[0]} />
			<ProductCard products={data.products[1]} />
			<BaseCard data={panoramas.panorama[1]} />
			<ProductCard products={data.products[2]} />
			<BaseCard data={panoramas.panorama[2]} />
			<ProductCard products={data.products[2] }/>
			<Newsletter />
		</>
	);
};

export default Home;
