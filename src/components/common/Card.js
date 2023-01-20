const ProductCard = ({products}) => {  
  return (
    <>
    <h2 className="text-2xl font-semibold text-left px-6 mt-10">{products.title}</h2>
    <div className="mx-6 grid grid-flow-col auto-cols-[91%] gap-4 overflow-x-auto pt-5 pb-10 scrollbar-hide">
      { products.product.map((product => {
          return (
                <div className="md:hover:shadow-2xl md:hover:z-10]">
                 <div className="overflow-hidden rounded-sm shadow-lg md:shadow-none lg:p-6 lg:mt-0 cursor-pointer">
                    <div>
                    <img src={ product.image}  alt={ product.title} className="object-cover w-full hover:scale-105 ease-in-out duration-[.3s]  transition-transform aspect-square ]" />
                    </div>
           
          
                    <div className="px-3 py-2 text-left">
                        <h3 className="text-lg leading-6">{ product.title }</h3>
                        <p className="py-2 tracking-wide text-gray-700"> { product.desc} </p>
                        <p className="text-gray-700"> { product.price} </p>
                    </div>
                 </div>
                </div>
          )}))
      }
    </div>
    </>
  )
}

export default ProductCard;