import React from "react";

const BOD = ({ investors }) => {
  return (
    <>
      {investors?.map((data, index) => {
        return (
          <div
            className="border-2 border-[#B6B6B657] w-full h-[40%] md:h-[30%] rounded-md p-1 mt-2"
            key={index}
          >
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

export default BOD;
