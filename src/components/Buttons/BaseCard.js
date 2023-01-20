import Banner from "../PanaromaImage";
import BaseBtn from "./BaseBtn";

const BaseCard = ({data}) => {
    return (
        <div className="mt-9">
              <Banner src={data.img} />
               <div className="grid text-center mt-4 gap-4 px-6">
                   <h2 className="text-2xl font-medium">{data.title}</h2>
                   <p className="text-gray-800 px-5">{data.desc}</p>
                   {data.buttons.length > 1 ?
                   <div className="grid grid-flow-col gap-2 px-2">
                    {
                    data.buttons.map((btn) => {
                        return (
                            <BaseBtn>
                              {btn.title}
                           </BaseBtn>
                        )
                    })
                }
                    </div>

                     :
                    <BaseBtn>
                         {data.buttons[0].title}
                    </BaseBtn>
                  }
             </div>
    </div>
    )
}


export default BaseCard;
