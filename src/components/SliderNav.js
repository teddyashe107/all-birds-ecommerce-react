// import { useState } from "react";
// 
// const SliderNav = ({categories}) => {
// 
//     const [active, setActive] = useState(0);
// 
//     const handleSlider = (index) => {
//         setActive(index);
//         slide(index)
//       }
//     return (
//         <>
//             <h2 className="text-2xl font-medium mt-8">Our Favorites</h2>
//             <div className="relative">
//             <ul className="uppercase relative flex ml-2 px-8  whitespace-nowrap overflow-auto font-medium text-sm scrollbar-hide  tracking-wider z-20">
//                  {categories.map((item, index) => {
//                      return   <li onClick={() => handleSlider(index)} className={`${index === active ? "border-b-2 border-gray-500" : "" } py-4 px-4 cursor-pointer`}>{item}</li>
//                })}
//             </ul>
//            <div className="absolute -bottom-[0.04rem] w-full bg-gray-200 h-1"></div>
//         </div>
//      </>
//     )
// }
// 
// export default SliderNav;