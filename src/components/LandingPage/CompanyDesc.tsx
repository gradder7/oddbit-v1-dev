import React from "react";

export default function CompanyDesc() {
  return (
    // <>
    //   <h1 className="heading-1">About US</h1>
    //   <p className="about-text">
    //     Hello stranger! 👋, my name is adeola and I am a frontend engineer,
    //     passionate <br /> about digital products that help people experience
    //     everyday life, not endure it.
    //   </p>
    // </>
    <section className="section-about">
      <h1 className="heading-1">
        <span>About us</span> <small>🤙</small>
      </h1>
      <h2 className="section-about__h2">
        Oddbit turns ideas into tangible products, bridging the gap between
        imagination and reality. Our passionate team collaborates closely with
        clients throughout the product development process, ensuring exceptional
        solutions. From design to manufacturing, we handle every stage,
        prioritizing quality and reliability. With a user-centric approach, we
        enhance the overall user experience. Trust Oddbit turns to transform
        your ideas into market-ready products that make a lasting impact.
      </h2>
    </section>
  );
}
