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
              <Image
                src={photo.src}
                alt="twitter icon"
                width={120}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
