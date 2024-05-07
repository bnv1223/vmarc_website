import React from "react";

const BusinessDetail = () => {
  return (
    <div className="bg-black w-full h-[100vh] relative overflow-y-scroll overflow-x-hidden flex justify-center">
      <div
        id="earth_img"
        className="absolute w-[176vw] h-[61vh] md:h-[80vh] lg:h-[160vh] top-[-30%] lg:top-[-100%] right-[-51%] lg:right-[-60%] "
        style={{ transform: "rotate(-55deg)" }}
      >
        <img
          className="w-full h-full opacity-60"
          src="/img/earth.png"
          alt="error"
        />
      </div>

      <div className="absolute top-[20%] w-[80%] h-[50%] md:h-[78%] flex flex-col">
        <div className="flex justify-between items-center h-[70%]">
          <h2
            className="text-xs md:text-base lg:text-xl xl:text-2xl text-white font-[500]"
            style={{ fontFamily: "poppins" }}
          >
            Disclosure As Per Regulation 46 of the <br />
            <span className="font-[800] text-xl md:text-3xl lg:text-4xl xl:text-[44px] leading-8 lg:leading-10 xl:leading-[50px]">
              SEBI (LODR), 2015
            </span>
          </h2>

          <div>
            <img
              className="w-[4rem] md:w-[7rem] lg:w-[9rem] xl:w-[11rem]"
              src="/img/invest1.png"
              alt="error"
            />
          </div>
        </div>
        {/* next div start */}
        <div
          id="buttons"
          className="text-white w-full absolute bottom-0 flex justify-between gap-2 text-xs md:text-sm lg:text-base xl:text-lg"
          style={{ fontFamily: "poppins" }}
        >
          <button className="bg-[#4456B0] p-2 rounded lg:w-[20%]">
            Leadership Team
          </button>
          <button className="bg-[#4B4D58] p-2 rounded lg:w-[20%]">
            Details of Business
          </button>
          <button className="bg-[#4B4D58] p-2 rounded lg:w-[20%]">
            Financial Information
          </button>
          <button className="bg-[#4B4D58] p-2  rounded lg:w-[20%]">
            Shareholding Pattern
          </button>
        </div>
        {/* next div end */}
      </div>
      <div className="absolute bottom-[30%] md:bottom-[2%] border-b border-[#FFFFFF52] w-full"></div>
      {/* business details section */}
      <div className="absolute w-[80%] top-[70%] md:top-[100%] flex flex-col justify-center items-center py-10">
        <p className="text-[#CFCFCF] text-xs md:text-lg leading-7 md:leading-10 text-center md:text-left">
          “V-Marc”is among the global leaders in providing reliable and
          consistent quality of products.By supplying our optimally priced high
          quality products we enable our clients to achieve more and outperform
          their competitors and stay ahead of the innovation curve. Customers'
          satisfaction is our prime objectives it is the foundation stone for
          the growth of the company. <br /> “V-Marc”has earned trust and
          reputation in India by winning the customers’ confidence. A very huge
          quantity of our cables has been in operation across India. The
          Organization is also committed to comply with all applicable
          environment, health & safety legislations and all other requirements
          of existing & prospective buyers.
        </p>
        <p className="text-[#EF3F3C] mt-2">Read More</p>
        <img src="/img/bdarrow.png" />
      </div>

      <div className="absolute w-full h-full bg-[#2B2B2B] top-[150%] md:top-[160%] lg:top-[170%]">
        <div className="w-[80%] h-[30%] relative mt-10 bg-black rounded-lg overflow-hidden mx-auto">
          <img
            src="/img/blackearth.png"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute top-0 w-full text-[#ffff] font-[500] h-full flex flex-col md:flex-row md:justify-around md:items-center px-4 py-2 ">
            <div className="md:basis-1/2 h-full flex flex-col justify-between md:justify-evenly md:px-2">
              <p className="text-sm md:text-base ">
                Grievance Redressal Contact Details
              </p>
              <p className="text-xs md:text-sm ">Email : investor@v-marc.in</p>
              <p className="text-xs md:text-sm ">
                Contact Information of the designated officaials of the listed
                entity responsible for assisting and handling investor
                grievances.
              </p>
            </div>
            <div className="h-full flex flex-col justify-evenly md:px-4">
              <p className="text-xs md:text-sm">Anuj Ahluwalia</p>
              <p className="text-xs md:text-sm">
                Company Secretary & Compliance Officer
              </p>
              <p className="text-xs md:text-sm">Phone: +91 9389922395</p>
              <p className="text-xs md:text-sm">Email: CS@v-marc.in</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] mx-auto mt-5">
          <div className="md:flex justify-between gap-8">
            <div className="bg-[#4b4747] flex md:justify-between gap-8 md:gap-4 p-2 rounded md:w-[48%]">
              <div className="w-[50%] flex items-center">
                <p className="text-white text-xs md:text-sm">Name Change of the company</p>
              </div>
              <div className="flex justify-center items-center gap-2 bg-[#363636] p-1 rounded w-[50%] md:w-[30%]">
                <img src="/img/mdi_eye.png" alt="error" />
                <p className="text-[#8EA1FF]">view PDF</p>
              </div>
            </div>
            <div className="bg-[#4b4747] flex md:justify-between gap-8 md:gap-4 p-2 rounded md:w-[48%] mt-2 md:mt-0">
              <div className="w-[50%] flex items-center">
                <p className="text-white text-xs md:text-sm">Name Change of the company</p>
              </div>
              <div className="flex justify-center items-center gap-2 bg-[#363636] p-1 rounded w-[50%] md:w-[30%]">
                <img src="/img/mdi_eye.png" alt="error" />
                <p className="text-[#8EA1FF]">view PDF</p>
              </div>
            </div>
          </div>
          <div className="md:flex justify-between gap-8">
            <div className="bg-[#4b4747] flex md:justify-between gap-8 md:gap-4 p-2 rounded md:w-[48%] mt-2">
              <div className="w-[50%] flex items-center">
                <p className="text-white text-xs md:text-sm">Name Change of the company</p>
              </div>
              <div className="flex justify-center items-center gap-2 bg-[#363636] p-1 rounded w-[50%] md:w-[30%]">
                <img src="/img/mdi_eye.png" alt="error" />
                <p className="text-[#8EA1FF]">view PDF</p>
              </div>
            </div>
            <div className="bg-[#4b4747] flex md:justify-between gap-8 md:gap-4 p-2 rounded md:w-[48%] mt-2">
              <div className="w-[50%] flex items-center">
                <p className="text-white text-xs md:text-sm">Name Change of the company</p>
              </div>
              <div className="flex justify-center items-center gap-2 bg-[#363636] p-1 rounded w-[50%] md:w-[30%]">
                <img src="/img/mdi_eye.png" alt="error" />
                <p className="text-[#8EA1FF]">view PDF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
