const Hero = () => {
    return (
       <>
        <div className="relative max-h-screen overflow-hidden">
          <div className="">
            <img className="object-cover -mt-4" src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_385/cms/7Jl8xThCU7S17XJy9uFKkx/764a2ef4f1d06930da6d65d236419d34/FW22-CORE-Homepage-Mobile-WR-Women.jpg" alt="hero section" />
          </div>
          <div className="absolute top-1/2 bottom-0  text-left text-white">
            <div className="px-6 grid gap-3">
               <h1 className="text-4xl font-bold">Keep The Layers Coming</h1>
               <p className="font-semibold leading-6 text-md ">
                   You know what they say the more super soft
                   merino wool shoes, the cozier.
               </p>
               <div className="flex gap-3 w-full justify-between font-semibold">
                   <button className="bg-white text-gray-900 px-8 uppercase">Shop men</button>
                   <button className="bg-white text-gray-900 px-8 py-4 uppercase text-sm">shop women</button>
               </div>
            </div>
          </div>
          <div className="absolute bottom-0  w-full z-10">
                <div className="bg-secondary py-2 text-sm px-6">
                    <p className="text-white">
                       <span className="font-bold "> Discover Your Perfect Pair </span> Try 
                        our Style Quiz to find the best
                        pair for you. <a href="#" className="underline"> Take the Style Quiz </a>
                    </p>
                </div>
            </div>
        </div>
       </>
    )
}

export default Hero;