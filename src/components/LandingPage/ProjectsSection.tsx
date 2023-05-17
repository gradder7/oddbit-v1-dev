import React from "react";
import ProjectCard from "./ProjectCard";
import imageProject1 from "../../../public/webp/alexxandria-1.webp";
import imageProject2 from "../../../public/webp/alexxandria-2.webp";
import imageProject2_1 from "../../../public/webp/safarika-1.webp";
import imageProject2_2 from "../../../public/webp/safarika-2.webp";
import imageProject3_1 from "../../../public/webp/heatrow-1.webp";
import imageProject3_2 from "../../../public/webp/heatrow-2.webp";
import imageProject4_1 from "../../../public/webp/adeola-1.webp";
import imageProject4_2 from "../../../public/webp/adeola-2.webp";
// import imageProject2-2 from "../../public/webp/alexxandria-2.webp";
import kite from "../../../public/webp/kite.png";
import kitehover from "../../../public/webp/KiteHover.png";
import aiMagic from "../../../public/webp/aiMagic.jpg";
import fate from "../../../public/webp/fate.png";
import aiMagic2 from "../../../public/webp/aimagicNew.png";
import aiMagicHover from "../../../public/webp/Aimagichover.png";
import fateHover from "../../../public/webp/Fatehover.png";
import fidgetgame from "../../../public/webp/Fidget.png";

export default function ProjectsSection() {
  return (
    <section id="sectionProjects" className="section-projects">
      <h1 className="heading-1">
        <span>Projects We Worked on</span> <small>💼</small>
      </h1>
      <p className="paragraph">
        Each project is unique. Here are some of my works.
      </p>
      <ProjectCard
        title="Ai Magic"
        techStack="NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION"
        imageSrc1={aiMagic2}
        imageSrc2={aiMagicHover}
        websiteUrl="https://aimagic.app/"
        description=""
      />
      <ProjectCard
        title="Fate"
        techStack="NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION"
        imageSrc1={fate}
        imageSrc2={fateHover}
        websiteUrl="https://fate.aimagic.app/"
        description=""
      />
      <ProjectCard
        title="Kite Chat"
        techStack="NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION"
        imageSrc1={kite}
        imageSrc2={kitehover}
        websiteUrl="https://kite.chat/"
        description="lorem ispunjdcn sjdbcjsd sdjvhsjd sjdbsjd jdvnsd s
"
      />
      <ProjectCard
        title="Fidgetgames"
        techStack="HTML, SCSS, JAVASCRIPT, GSAP"
        imageSrc1={imageProject4_1}
        imageSrc2={fidgetgame}
        websiteUrl="/"
        description=""
      />
    </section>
  );
}
