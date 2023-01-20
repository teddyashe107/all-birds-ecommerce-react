const Banner = ({src}) => {
    return(
        <div className="mt-8">
            <img className="w-full aspect-square object-cover " src={src} alt="/" />
        </div>
    )
}

export default Banner;