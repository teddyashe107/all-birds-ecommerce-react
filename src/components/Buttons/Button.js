const Button = ({children}) => {
    return (
        <div>
           <button type='button' className='px-3 text-gray-600 cursor-pointer'>
               {children}
           </button>
        </div>
    )
}

export default Button;