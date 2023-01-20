import Hero from "../components/Hero";
import ProductCard from "../components/common/Card";
import BaseCard from "../components/Buttons/BaseCard";
import Carousel from "../components/Carousel";
import Newsletter from "../components/Newsletter";

const products = {
  title: "New Arrival",
  product: [
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: "Women's Wool Runner",
      desc: "Limited Edition Color, Hazy Beige"
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: "Women's Wool Runner",
      desc: "Limited Edition Color, Hazy Beige"
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: "Women's Wool Runner",
      desc: "Limited Edition Color, Hazy Beige"
    },

  ]

}

const products2 = {
  title: "Shop The Collections",
  product: [
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: "Women's Wool Runner",
      desc: "Limited Edition Color, Hazy Beige"
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: "Women's Wool Runner",
      desc: "Limited Edition Color, Hazy Beige"
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: "Women's Wool Runner",
      desc: "Limited Edition Color, Hazy Beige"
    },

  ]

}

const products3 = {
  title: "Stories",
  product: [
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: "Women's Wool Runner",
      desc: "Limited Edition Color, Hazy Beige"
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: "Women's Wool Runner",
      desc: "Limited Edition Color, Hazy Beige"
    },
    {
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://images.ctfassets.net/9uo1qvvet3xa/9mrUrX0QSQzPODpMk9xjV/ea626099d097d7276f0c94d2102e50bd/TR3MKWW_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_KAIKOURA_WHITE_WHITE.png',
      title: "Women's Wool Runner",
      desc: "Limited Edition Color, Hazy Beige"
    },

  ]

}


const data = 
  {
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_450/cms/66XxrQvrjyiBcBASqqAhCu/6c5aadfc0bec739fd429fba3eed6ef77/23Q1_LNY_Site_Secondary-Hero_750x974.jpg',
    title: "Year Of The Rabbit",
    desc: "To celebrate Lunar New Year we're releasing a special edition Wool Runner",
    buttons: [
      {
        title: "Shop now"
      }
    ]
  }

const data2 = 
  {
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_450/cms/7CTBU1STx4yjpIkBRApINf/f218f301d4c26a253a331dcad6099fcd/FW22-Core-2ndary-HP-Mobile-WRM.jpg',
    title: "Cozy Things For Crisp Temps",
    desc: "Super soft Merino wool turns colder days into comfier ones.",
    buttons: [
      {
        title: "Shop Men"
      },
      {
        title: "Shop Women"
      }
    ]
  }

const data3 = 
  {
    img: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1152/cms/24QzGcRbuw1bsB1FZTH2VK/45c841f4209229e7924df02160de2536/Secondary_Homepage_Desktop_-_Sustainability.jpg",
    title: "Can Sustainable Shoes Save The Planet?",
    desc: "we think it's a good place to start. Explore our approach to sustainable  footwear, sustainable apparel and  reducing our environmental impact. Check out our progress so fffar, and our bold list of commitments for 2025.",
    buttons: [
      {
        title: "Our sustainable practices"
      }
    ]
  }


const Home = () => {
    return (
      <>
      <Hero />
         <Carousel  products={products} />
         <BaseCard data={data} />
         <ProductCard products={products} />
         <BaseCard data={data2} />
         <ProductCard products={products2} />
         <BaseCard data={data3} />
         <ProductCard products={products3} />
         <Newsletter />
      </>
    )
}

export default Home;