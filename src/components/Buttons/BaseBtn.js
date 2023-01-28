const BaseBtn = ({children}) => {
    return (
        <button type="button" className="text-gray-100 grid  bg-secondary uppercase py-2 lg:px-8 px-4  rounded-sm hover:bg-white hover:border-2 hover:border-secondary w-full h-[40px] hover:text-gray-900">
            {children}
        </button>
    )
}

export default BaseBtn;