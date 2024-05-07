import React from "react";

const Investors = ({investors }) => {
 
  return (
    <>
      {investors?.map((data, index) => {
        return (  <div className="border-2 border-[#B6B6B657] w-full h-[40%] md:h-[30%] rounded-md p-1 mt-2" key={index}>
              <div className="h-[100%] text-white flex flex-col md:flex-row">
                <img
                  className="h-[50%] md:h-full object-fill  rounded"
                  // src="/img/investor_img.png"
                   src={data.img}
                />
                <div className="p-2" style={{ fontFamily: "poppins" }}>
                  <p className="text-base md:text-lg lg:text-lg xl:text-2xl ">
                    {data.name}
                  </p>

                  <p className="text-xs md:text-lg lg:text-sm xl:text-lg text-[#6E86FF]">
                   {data.position}
                  </p>
                  <p className="text-[9px] md:text-sm lg:text-sm xl:text-lg mt-2 text-[#CFCFCF] capitalize">
                   {data.about}
                  </p>
                </div>
              </div>
            </div>
         
        );
      })}
    </>
  );
};

export default Investors;

{
  /* <> */
}
{
  /* <div className="border-2 border-[#B6B6B657] w-full h-[35%] md:h-[30%] rounded-md p-1 mt-2">
<div className="h-[100%] text-white flex flex-col md:flex-row">
<img className="h-[50%] md:h-full w-full object-cover" src="/img/investor_img.png" />
<div className="p-2" style={{ fontFamily: "poppins" }}>
  {investors.map((investor,index)=>{
    return <p className="text-base md:text-lg lg:text-lg xl:text-2xl ">
               {investor.name}
    </p>
  })}
  
  <p className="text-xs md:text-lg lg:text-sm xl:text-lg text-[#6E86FF]">
    Managing Director
  </p>
  <p className="text-[9px] md:text-sm lg:text-sm xl:text-lg mt-2 text-[#CFCFCF] capitalize">
    Having experience of more than 2 decades in the field of
    electric cables & wire industry. Responsible for overlooking
    the technical operations, strategy and marketing plans of the
    company. He holds a degree of Masters of Business
    Administration (MBA) in Marketing.
  </p>
</div>
</div>
</div>
</> */
}
