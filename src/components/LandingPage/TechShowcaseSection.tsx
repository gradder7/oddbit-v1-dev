// import React from "react";
// import javascript from "../../../public/webp/TechShowCase/javascript.svg";
// import photosData from "./photosData";

// import Image from "next/image";
// export default function TechShowcaseSection() {
//   return (
//     <section
//       data-scroll
//       data-scroll-offset="35%"
//       data-scroll-repeat={true}
//       data-scroll-class="section-reviews__bg"
//       className="section-reviews"
//     >
//       <div className="section-reviews__top">
//         <h1 className="heading-1">
//           <span>Mmmm, a little brag </span> <small>😊</small>
//         </h1>
//         <p className="paragraph paragraph__sub">
//           What people are saying about my last portfolio
//         </p>
//       </div>
//       <div className="section-reviews__bottom">
//         <div className="section-reviews__bottom-wrapper review-card__anim1">
//           <div className="review-card">
//             <div className="review-card__top">
//               <div>
//                 <Image
//                   src={javascript}
//                   alt="twitter icon"
//                   width={120}
//                   height={80}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Image from "next/image";
import photosData from "./photosData"; // Update the import path accordingly

export default function TechShowcaseSection() {
  return (
    <section
      data-scroll
      data-scroll-offset="35%"
      data-scroll-repeat={true}
      data-scroll-class="section-reviews__bg"
      className="section-reviews"
    >
      <div className="section-reviews__top">
        <h1 className="heading-1">
          <span>Technologies We work on </span> <small>😊</small>
        </h1>
        <p className="paragraph paragraph__sub">
         Counting numbers of technologies
        </p>
      </div>
      <div className="section-reviews__bottom">
        <div className="section-reviews__bottom-wrapper review-card__anim2">
          {photosData.map((photo, index) => (
            <div className="review-card" key={index}>
              <div className="review-card__top">
                <div>
                  <Image
                    src={photo.src}
                    alt="twitter icon"
                    width={120}
                    height={80}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="section-reviews__bottom-wrapper review-card__anim2">
  {reviews?.result.sort().map((review: Ireply) => (
    <div key={review.id} className="review-card">
      <div className="review-card__top">
        <div className="review-card__top--left">
          <p className="review-card__p ">{review.name}</p>
          <h3 className="review-card__h3">{review.userName}</h3>
        </div>
        <div className="review-card__top--right">
          <img src="svg/twitter.svg" alt="twitter icon" />
        </div>
      </div>
      <div className="review-card__bottom">
        <h2 className="review-card__h2">{review.reply}</h2>
      </div>
    </div>
  ))}
</div> */
}
