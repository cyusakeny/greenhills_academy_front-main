// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import Heading1 from "@/components/ui/atoms/Heading1";
// const slides = [
//   {
//     imageSrc: "/images/gh1.png",
//     title: "Green Hills Academy",
//     description: "Bringing out BRILLIANCE in every child",
//     buttonText: "Learn More →",
//   },
//   {
//     imageSrc: "/images/studentimage2.jpg",
//     title: "Title 2",
//     description: "Description for Slide 2",
//     buttonText: "Button 2",
//   },
//   {
//     imageSrc: "/images/studentimage.jpg",
//     title: "Title 3",
//     description: "Description for Slide 3",
//     buttonText: "Button 3",
//   },
// ];

// export default function SlidePage() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleSlideChange = (swiper) => {
//     setCurrentIndex(swiper.realIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 2000); // Change to 2000 for a 2-second interval

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <div className="">
//         <Swiper
//           pagination={{
//             type: "custom", // Use custom pagination type
//             renderCustom: (swiper, current, total) => {
//               // Custom pagination rendering function
//               let paginationHTML = "";
//               for (let i = 0; i < total; i++) {
//                 paginationHTML += `
//                   <div class="custom-pagination-bullet ${
//                   current === i ? "custom-pagination-bullet-active" : ""
//                 }"></div>
//                 `;
//               }
//               return paginationHTML;
//             },
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//           initialSlide={currentIndex}
//           onSlideChange={handleSlideChange}
//           loop={true}
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-[400px] flex items-center ml-20 mr-2"
//                 style={{
//                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${slide.imageSrc})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   width: "90%",
//                   height: "500px",
//                   borderRadius: "20px",
//                 }}
//               >
//                 <div className="flex-col justify-start items-start gap-8 flex ml-8">
//                   <div className="text-white text-2xl font-semibold font-['Outfit']">
//                     {slide.title}
//                   </div>
//                   <Heading1
//                     style={{ width: "653px", height: "119px", color: "white" }}
//                   >
//                     {slide.description}
//                   </Heading1>

//                   <button className="mt-8 w-[212.09px] text-white py-3 text-center bg-[#018C79] rounded-xl text-lg font-semibold font-['Outfit']">
//                     {slide.buttonText}
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="">
//         <div className="swiper-pagination">
//           <style>
//             {`
//     /* Inactive pagination dot */
//     .swiper-pagination-bullet {
//       width: 12px;
//       height: 12px;
//       background-color: #ddd;
//       opacity: 0.5;
//     }

//     /* Active pagination dot */
//     .swiper-pagination-bullet-active {
//       width: 18px;
//       height: 18px;
//       background-color: #0073e6;
//     }
//   `}
//           </style>
//         </div>
//       </div>
//     </div>
//   );
// }
