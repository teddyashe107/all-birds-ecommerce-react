import { useRef, useState } from "react";
import BaseBtn from "./Buttons/BaseBtn";


const categories = [
    'For everyday',
    'for the rain',
    'for running'
  ]


const Carousel = ({products}) => {
    const [active, setActive] = useState(0);

    const previousIndex = useRef(0)
    const scroller = useRef();
  
    const prev = (index) => {
        const scrollLeft = scroller.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(scroller.current.children[0]).width
        );
        
        scroller.current.scrollLeft = scrollLeft - itemWidth * index;
  
    };
  
    const next = (index) => {
      requestAnimationFrame(() => {
        const scrollLeft = scroller.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(scroller.current.children[0]).width
        );
        scroller.current.scrollLeft = scrollLeft + itemWidth * index;
      });
    };
  
    const slide = (index) => {
      console.log(previousIndex.current, "previous index")
      console.log(index, 'index')
        if(index === previousIndex.current) return
        if(index > previousIndex.current){
          next(index)
          previousIndex.current = index;
        } else {
          if(index === 0) {prev(2)}
          prev(index)
          previousIndex.current = index;
        }
  
      // console.log(index, "slide index")
      // console.log(slider, "slide slider")
      //   if(slider === index) return;
      //   if(index > slider) {
      //     next(index)
      //   } else {
      //     prev(index)
      //   }
    }
  
    const handleSlider = (index) => {
      setActive(index);
      slide(index)
    }



  
return (
    <div>
        
        <h2 className="text-2xl font-medium mt-8">Our Favorites</h2>
            <div className="relative">
            <ul className="uppercase relative flex ml-2 px-8  whitespace-nowrap overflow-auto font-medium text-sm scrollbar-hide  tracking-wider z-20">
                 {categories.map((item, index) => {
                     return   <li onClick={() => handleSlider(index)} className={`${index === active ? "border-b-2 border-gray-500" : "" } py-4 px-4 cursor-pointer`}>{item}</li>
               })}
            </ul>
           <div className="absolute -bottom-[0.04rem] w-full bg-gray-200 h-1"></div>
           </div>

        <div ref={scroller} className="flex overflow-hidden space-x-3 pb-9 snap-x scroll-auto scrollbar-hide">
        {products.product.map((item, index) => {
        return(
        <div className="mt-4 mx-1 shadow-2xl min-w-[300px] snap-center">
          <div className="relative">
          <div className="rounded-sm overflow-hidden">
              <img className="aspect-square object-cover hover:scale-105 ease-in-out transition-transform duration-[.4s]" src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_333,b_rgb:f5f5f5/cms/3XfSPNpHJ8yqP6lTBXF9V0/65e257d824e88bf231ab8d3a45ac559f/Category-Carousel-Tile-min.jpg" alt="product footage" />
          </div>
          <div className="absolute bottom-10 flex w-full justify-between px-4">
          <div onClick={() => prev(1)} className={`${!index ? "-z-10" : ""} ${index != active ? "-z-20" : ""} flex w-10 h-10  bg-white rounded-full items-center justify-center ring-2 ring-gray-200 cursor-pointer hover:ring-gray-300`}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
             </svg>
          </div> 
          <div onClick={() => next(1)} className={`${index === products.length - 1 ? "-z-10" : ""} ${index != active ? "-z-20" : ""} w-10 h-10 bg-white rounded-full flex items-center justify-center ring-2 ring-gray-200 cursor-pointer hover:ring-gray-300`}>
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
    </div>
)

}

export default Carousel;