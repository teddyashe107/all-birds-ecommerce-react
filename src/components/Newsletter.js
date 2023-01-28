import BaseBtn from "./Buttons/BaseBtn";

const Newsletter = () => {
   
    return (
        <div className="bg-gray-50 py-14 mt-10 mb-16 px-5 lg:max-w-4xl lg:mx-auto">
        <h2 className="text-3xl px-6 leading-8 font-bold text-gray-900">Want First Dibs?</h2>
          <p className="text-gray-700 px-6 pt-4 ">
             Join our email list and be the First
             to know about new limited edition
             products, material innovations,
             and lots of other fun updates.
          </p>
         <div className="grid gap-2 px-8 mt-8 lg:max-w-3xl lg:mx-auto">
          <div className="lg:flex lg:space-x-2 lg:items-end">
          <div className="lg:flex-1">
          <input type="text" className="border-b-2 px-3 lg:w-full border-gray-900 py-3 placeholder:font-semibold" placeholder="Enter Your Email Address" />
          </div>
          <div>
          <BaseBtn> 
          sign up
          </BaseBtn>
          </div>
          
          </div>
          <p className="text-sm text-gray-700 px-3">
            Note: You can opt-out at any time. See 
            our <a href="#" className="underline font-semibold">Privacy Policy </a> and <a href="#" className="underline font-semibold">Terms</a>.
          </p>
         </div>
     </div>
    )

}

export default Newsletter;