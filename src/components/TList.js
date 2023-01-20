const TList = ({items}) => {
   return (
    <div className="hidden lg:flex">
         <ul className="flex space-x-8 uppercase text-xs font-medium text-gray-900">
             {items.map(item => {
                 return <li>{item}</li>
             })}

     </ul>
    </div>

   )
}

export default TList;