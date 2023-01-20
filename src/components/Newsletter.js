import BaseBtn from "./Buttons/BaseBtn";

const Newsletter = () => {
   
    return (
        <div className="bg-gray-50 py-14 mt-10 mb-16 px-5">
        <h2 className="text-3xl px-6 leading-8 font-bold text-gray-900">Want First Dibs?</h2>
          <p className="text-gray-700 px-6 pt-4 ">
             Join our email list and be the First
             to know about new limited edition
             products, material innovations,
             and lots of other fun updates.
          </p>
         <div className="grid gap-2 px-8 mt-8">
          <input type="text" className="border-b-2 px-3 border-gray-900 py-3 placeholder:font-semibold" placeholder="Enter Your Email Address" />
          <BaseBtn> 
          sign up
          </BaseBtn>
          <p className="text-sm text-gray-700 px-3">
            Note: You can opt-out at any time. See 
            our <a href="#" className="underline font-semibold">Privacy Policy </a> and <a href="#" className="underline font-semibold">Terms</a>.
          </p>
         </div>
     </div>
    )

}

export default Newsletter;