import Card from "../components/Card";
import SearchBar from '../components/SearchBar';

const products = [
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: 'Women\'s Tree Runners',
      desc: 'kaikoura White  (White Sole)',
      price: '$150'
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/3rhKORN3J95IP1bnAygejK/70ed9e6b17734f0fa575d8f02e6e7cba/TR3MMST080_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_MIST_WHITE.png',
      title: 'Men\'s Treemax-h-screen ${toggle ? "overflow-hidden": "overflow-auto"}` Runners',
      desc: 'Mist (White Sole)',
      price: '$150'
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/7aJZ8e9C8er0utTjy5pSu4/d0590f25b7fff917e0aa8d89b7d1a2b1/Allbirds_WL_RN_SF_PDP_Natural_Grey_LAT.png',
      title: 'Men\'s Tree Runners',
      desc: 'Natural Grey  (Light Grey Sole)',
      price: '$150'
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/4oLF7eyh0cAGuRj6TqySMK/2dee66941ed9a073ec0fe956182e7c7b/Allbirds_TR_RN_SF_PDP_Kauri_Marine_LAT.png',
      title: 'Men\'s Tree Runners',
      desc: 'Marine Blue (White Sole)',
      price: '$105'
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/3rhKORN3J95IP1bnAygejK/70ed9e6b17734f0fa575d8f02e6e7cba/TR3MMST080_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_MIST_WHITE.png',
      title: 'Men\'s Tree Runners',
      desc: 'kaikoura White  (White Sole)',
      price: '$150'
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/onXvGeOjkk4TnV9u9j0O6/bb3abf9144cfbb14c40ea445694def6b/TB1WJBK_SHOE_LEFT_GLOBAL_WOMENS_TREE_BREEZER_JET_BLACK_BLACK.png',
      title: 'Women\'s Tree Breezers',
      desc: 'kaikoura White  (White Sole)',
      price: '$100'
    },
    
  ]

const Products = () => {
    return (
        <main>
            <SearchBar />
            <div className='grid grid-cols-2 gap-4 md:gap-0 mx-8 md:max-w-6xl md:mx-auto '>
                {products.map(product => {
                   return  <Card product={product} />
                })}
            </div>
      </main>
    )
}

export default Products;