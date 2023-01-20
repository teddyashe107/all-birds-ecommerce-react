const HList = ({data}) => {
    return (
        <div className="">
        <ul className='flex gap-1 flex-wrap justify-center lg:justify-start lg:items-start lg:space-x-4 mt-3'>
               {data.map(icon => {
                         return <li key={icon}><div className="w-10 h-10 shrink-0"><img src={icon} alt="social medias" className='cursor-pointer object-cover' /> </div></li>
               })}
            </ul>
        </div>
    )
}

export default HList;