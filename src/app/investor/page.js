import Investor from "@/components/investor/Investor";
import NaveBar from "@/components/naveBar/NaveBar";
import React from "react";
// import image1 from './public/img/Mr._Vikas_Garg.png'
import Image from 'next/image'

const page = () => {
  const commitee = [
    "Audit",
    "Nomination And Remuneration",
    "Stakeholder Relationship",
    "Corporate Social Responsibility",
  ];
  const investors = [
    {
      img: "/img/BOD1.png",
      name: "Mr. Vikas Garg",
      position: "Managing Director",
      about: "Having experience of more than 2 decades in the field of electric cables & wire industry. Responsible for overlooking the technical operations, strategy and marketing plans of the company. He holds a degree of Masters of Business Administration (MBA) in Marketing.",
    },
    {
      img: "/img/BOD2.jpg",
      name: "Mr. Deepak Prabhakar Tikle",
      position: "Executive Director",
      about: "He is a proactive leader with 32 years of experience in Profit Centre Operations, Sales & Marketing, Plant Management, Business Development, and Channel Management & Team Management. He holds B.E. (Electronic & Telecommunication) and MBA in Marketing Degree from University of Pune.",
    },
    {
      img: "/img/BOD3.jpeg",
      name: "Mr. Raj Kumar Pandey",
      position: "Independent Director",
      about: "He is a Company Secretary (CS) by Profession. He is having experience of more than 12 years in the corporates. He was associated with Patanjali Food & Herbal Park Private Limited for around 10 years in leadership roles in establishing the Mega Food Park, Scheme of ministry of Food Processing Industries.",
    },
    {
      img: "/img/BOD4.jpg",
      name: "Mr. Ranjeet Kumar Tibrewal ",
      position: "Independent Director",
      about: "He is a practicing Chartered Accountant with a vast experience of 19 years in the field of business and finance, auditing, taxation, financial and general management which also include financial reporting, consulting, corporate finance, or accounting systems and processes",
    },
   
    {
      img: "/img/BOD5.png",
      name: "Mrs. Meenakshi Garg",
      position: "Non-Executive Director",
      about: "Associated with the company for last 10 years. Holds Bachelor of commerce degree from Delhi University and has an experience of more than a decade in the Industry of Wires and Cables.",
    },
  ];
  return (
    <div>
      <NaveBar />
      <Investor commitee={commitee} investors={investors}/>
    </div>
  );
};

export default page;
