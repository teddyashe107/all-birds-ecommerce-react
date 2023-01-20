import Hero from "../components/Hero";
import { useRef, useState, useEffect } from "react";
import Banner from "../components/PanaromaImage";
import BaseBtn from "../components/Buttons/BaseBtn";
import Card from "../components/Card";

const categories = [
  'For everyday',
  'for the rain',
  'for running'
]

const products = [
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


const shops = [
  {
    image: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_400,b_rgb:f5f5f5/cms/2wH3NpaR7C6czfRsOR922S/20d0195f922dd947e7f87df515cf5102/Wool_Runner-Men.jpg',
    title: "New Arrivals",
    desc: "The latest styles and limited edition colors that you can only find here (while they last, that is)."
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

const banner =  'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_450/cms/66XxrQvrjyiBcBASqqAhCu/6c5aadfc0bec739fd429fba3eed6ef77/23Q1_LNY_Site_Secondary-Hero_750x974.jpg'
const banner2 =  'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_450/cms/7CTBU1STx4yjpIkBRApINf/f218f301d4c26a253a331dcad6099fcd/FW22-Core-2ndary-HP-Mobile-WRM.jpg'

const Home = () => {
  const [active, setActive] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0)
  const [slider, setSlider] = useState(0);

  const scroller = useRef();

  const prev = (index) => {
      const scrollLeft = scroller.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scroller.current.children[0]).width
      );
      
      scroller.current.scrollLeft = scrollLeft - itemWidth;
      setScrollPosition(scrollLeft)
      console.log(index + "index prev")
      console.log(slider + "slider prev")
      setSlider(index);

  };

  const next = (index) => {
    requestAnimationFrame(() => {
      const scrollLeft = scroller.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scroller.current.children[0]).width
      );
      scroller.current.scrollLeft = scrollLeft + itemWidth * index;
      setScrollPosition(scrollLeft)
      setSlider(index);
    });
  };

  const slide = (index) => {
    console.log(index, "slide index")
    console.log(slider, "slide slider")
      if(slider === index) return;
      if(index > slider) {
        next(index)
      } else {
        prev(index)
      }
  }

  const handleSlider = (index) => {
    setActive(index);
    slide(index)
  }

    return (
      <>
      <Hero />
      <h2 className="text-2xl font-medium mt-8">Our Favorites</h2>
      <div className="relative">
      <ul className="uppercase relative flex ml-2 px-8  whitespace-nowrap overflow-auto font-medium text-sm scrollbar-hide  tracking-wider z-20">
        {categories.map((item, index) => {
          return   <li onClick={() => handleSlider(index)} className={`${index === active ? "border-b-2 border-gray-500" : "" } py-4 px-4 cursor-pointer`}>{item}</li>
        })}
      </ul>
      <div className="absolute -bottom-[0.04rem] w-full bg-gray-200 h-1"></div>
      </div>

    <div ref={scroller} className="flex overflow-auto space-x-3 pb-9 snap-x scroll-auto scrollbar-hide">
      {[1,2,3].map((item, index) => {
      return(
      <div className="mt-4 mx-10 shadow-2xl min-w-[300px] snap-center">
        <div className="relative">
        <div className="rounded-sm overflow-hidden">
            <img className="aspect-square object-cover hover:scale-105 ease-in-out transition-transform duration-[.4s]" src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_333,b_rgb:f5f5f5/cms/3XfSPNpHJ8yqP6lTBXF9V0/65e257d824e88bf231ab8d3a45ac559f/Category-Carousel-Tile-min.jpg" alt="product footage" />
        </div>
        <div className="absolute bottom-10 flex w-full justify-between px-4">
        <div onClick={prev} className={`${!index ? "-z-10" : "bg-white"} flex w-10 h-10 bg-white rounded-full items-center justify-center ring-2 ring-gray-200 cursor-pointer hover:ring-gray-300`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
           </svg>
        </div> 
        <div onClick={next} className="w-10 h-10 bg-white rounded-full flex items-center justify-center ring-2 ring-gray-200 cursor-pointer hover:ring-gray-300">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
           </svg>
        </div>
      
        </div>
        </div>
        <div className="px-4">
           <div>
            <h2 className="text-left text-xl pt-4 pb-1 cursor-pointer">Tree Flyer</h2>
             <hr className="bg-gray-400" />
            <div className="flex space-x-3 items-center mt-2 cursor-pointer">
              <div className="shrink-0 w-8 h-8"><img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_40/cms/1JKyYg5IBgDaJxde4FQeSM/5fe6bae24d75c56616bb1ede00cbb1ca/Weather_Ready.jpg" alt="product description" /></div>
              <p className="text-sm text-gray-800 font-normal text-left">Water-repellent Long Distance Runs</p>
            </div>
           </div>
           <div className="grid gap-2 mt-3 mb-6">
             <BaseBtn>shop men</BaseBtn>
             <BaseBtn>shop women</BaseBtn>
           </div>
        </div>
      </div>
      ) }) }
     </div>
     <div className="mt-9">
         <Banner src={banner} />
     </div>
     <div className="grid text-center mt-4 gap-4 px-6">
     <h2 className="text-2xl font-medium">Year Of The Rabbit</h2>
     <p className="text-gray-800 px-5">
      To celebrate Lunar New Year we're releasing
      a special edition Wool Runner
     </p>
      <BaseBtn>
       shop now
      </BaseBtn>
     </div>
     <h2 className="text-2xl font-medium text-left px-6 mt-10">New Arrivals</h2>
     <div className="mt-6 mx-6 grid grid-flow-col auto-cols-[91%] gap-4 overflow-x-auto py-10 scrollbar-hide">
      {products.map(product => {
        return <Card product={product} />
      })}
     </div>

     <div className="">
          <Banner src={banner2} />
          <div className="mt-6 mx-6 grid gap-3">
          <h2 className="text-2xl mx-5 leading-8 font-bold text-gray-800">Cozy Things For Crisp Temps</h2>
          <p className="text-gray-800 px-5">
             Super soft Merino wool turns colder
             days into comfier ones.
          </p>
          <div className="grid grid-flow-col gap-2 px-2">
             <BaseBtn>
                shop now
             </BaseBtn>
            <BaseBtn>
               shop now
            </BaseBtn>
          </div>
      </div>
     </div>

     <h2 className="text-2xl font-medium text-left px-6 mt-10">Shop The Collections</h2>
     <div className="mx-6 grid grid-flow-col auto-cols-[91%] gap-4 overflow-x-auto pt-5 pb-10 scrollbar-hide">
      {shops.map(product => {
        return <Card product={product} />
      })}
     </div>

     {/* image grids */}

     <Banner src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1152/cms/24QzGcRbuw1bsB1FZTH2VK/45c841f4209229e7924df02160de2536/Secondary_Homepage_Desktop_-_Sustainability.jpg" />
     {/* <div className="grid grid-rows-5">
      <div className="bg-red-900 grid grid-flow-col grid-cols-5">
        <div className="border col-span-2">
          <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1152/cms/24QzGcRbuw1bsB1FZTH2VK/45c841f4209229e7924df02160de2536/Secondary_Homepage_Desktop_-_Sustainability.jpg" alt="/" />
        </div>
        <div className="border border-yellow-400 col-span-2">b1</div>
        <div className="border">c1</div>
      </div>
      <div className="bg-green-900 grid grid-flow-col grid-cols-5 row-span-2">
        <div className="col-span-2">a2</div>
        <div className="col-span-2">b2</div>
        <div className="border">c2</div>
      </div>
      <div className="bg-yellow-900 grid grid-flow-col grid-cols-5 row-span-2">
        <div className="col-span-2">a3</div>
        <div className="col-span-2">b3</div>
        <div className="border">c3</div>
      </div>

     </div> */}
     <div className="grid gap-4 mt-4  text-center">
          <h2 className="text-3xl px-6 leading-8 font-bold text-gray-900">Can Sustainable Shoes Save The Planet?</h2>
          <p className="text-gray-700 px-6 ">
             we think it's a good place to start.
             Explore our approach to sustainable 
             footwear, sustainable apparel and 
             reducing our environmental impact.
             Check out our progress so fffar, and our
             bold list of commitments for 2025.
          </p>
          <div className="px-4">
             <BaseBtn>
                our sustainable practices
             </BaseBtn>
          </div>
     </div>

     <h2 className="text-2xl font-semibold text-left px-6 mt-10">Stories</h2>
     <div className="mx-6 grid grid-flow-col auto-cols-[91%] gap-4 overflow-x-auto pt-5 pb-10 scrollbar-hide">
      {shops.map(product => {
        return <Card product={product} />
      })}
     </div>

     <div className="bg-gray-50 py-14 mt-10 mb-16 px-5">
        <h2 className="text-3xl px-6 leading-8 font-bold text-gray-900">Want First Dibs?</h2>
          <p className="text-gray-700 px-6 ">
             Join our email list and be the First
             to know about new limited edition
             products, material innovations,
             and lots of other fun updates.
          </p>
         <div className="grid gap-2 px-8 mt-8">
          <input type="text" className="border-b-2 px-3 border-gray-900 py-3 placeholder:font-semibold" placeholder="Enter Your Email Address" />
          <BaseBtn> 
          sign up
          </BaseBtn>
          <p className="text-sm text-gray-700 px-3">
            Note: You can opt-out at any time. See 
            our <a href="#" className="underline font-semibold">Privacy Policy </a> and <a href="#" className="underline font-semibold">Terms</a>.
          </p>
         </div>
     </div>

      </>
    )
}

export default Home;