const BaseBtn = ({children}) => {
    return (
        <button type="button" className="text-gray-100 grid w-full bg-secondary uppercase py-2 rounded-sm hover:bg-white hover:border-2 hover:border-secondary hover:text-gray-900 box-border">
            {children}
        </button>
    )
}

export default BaseBtn;