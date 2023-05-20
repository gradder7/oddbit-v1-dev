import ProjectCard from "./ProjectCard";
// images for projects
import kitechatMob from "../../../public/webp/kitechatMob.jpg";
import kitehover from "../../../public/webp/KiteHover.png";
import fate from "../../../public/webp/fate.png";
import fateHover from "../../../public/webp/Fatehover.png";
import aiMagic2 from "../../../public/webp/aimagicNew.png";
import aiMagicHover from "../../../public/webp/Aimagichover.png";
import fidgetgame from "../../../public/webp/fidgetTop.png";
import fidgetgameHover from "../../../public/webp/Fidget.png";

export default function ProjectsSection() {
  return (
    <section id="sectionProjects" className="section-projects">
      <h1 className="heading-1">
        <span>Projects We Worked on</span> <small>💼</small>
      </h1>
      <p className="paragraph">
        Each project is unique. Here are some of my works.
      </p>
      {/* ai magic */}
      <ProjectCard
        title="Ai Magic"
        techStack="NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION"
        imageSrc1={aiMagic2}
        imageSrc2={aiMagicHover}
        websiteUrl="https://aimagic.app/"
        description="AiMagic: Unleash the power of AI! Our chatbot service transforms your words into vibrant images, all in a matter of seconds. Experience a new realm of creative possibilities and let your imagination run wild with us."
      />
      {/* fate */}
      <ProjectCard
        title="Fate"
        techStack="NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION"
        imageSrc1={fate}
        imageSrc2={fateHover}
        websiteUrl="https://fate.aimagic.app/"
        description="Fate Connect: Join the Magic of Chance Chats. Experience fate's enchanting power in random connections. Engage in real conversations, share stories, and create lasting memories. Welcome to Fate Connect."
      />
      {/* kite */}
      <ProjectCard
        title="Kite Chat"
        techStack="NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION"
        imageSrc1={kitechatMob}
        imageSrc2={kitehover}
        websiteUrl="https://kite.chat/"
        description="Kite Chat is a marketing & customer support platform built to help grow your business using new features of Official WhatsApp Business API.
"
      />
      {/* fidget */}
      <ProjectCard
        title="Fidgetgames"
        techStack="HTML, SCSS, JAVASCRIPT, GSAP"
        imageSrc1={fidgetgame}
        imageSrc2={fidgetgameHover}
        websiteUrl="/"
        description="Fidget Games: Your daily dose of gaming excitement! Discover a new game every day, keeping boredom at bay. From thrilling adventures to mind-bending puzzles, get ready to embark on a gaming journey like no other. Let the fun begin!"
      />
    </section>
  );
}
