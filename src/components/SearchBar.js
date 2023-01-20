import Button from "./Buttons/Button";

const SearchBar = () => {
    return(
        <section className='flex items-center md:max-w-6xl md:px-6 md:mx-auto justify-between mx-8 py-5 my-1 space-x-2'>
        <div className='relative grow'>
         <input placeholder='Enter Search Term' className='w-full outline-none  px-10 py-3 bg-gray-200 rounded-sm placeholder:text-md placeholder:text-gray-500'/>
            <div className='absolute inset-y-0 px-auto py-3 pl-2 mr-3'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
               </svg>
            </div>
        </div>
         <Button>
           cancel
         </Button>
       </section>
    )
}

export default SearchBar;