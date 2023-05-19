"use client";
import React from "react";
import ProjectsSection from "../components/LandingPage/ProjectsSection";
import PreLoader from "../components/LandingPage/PreLoader";
import HeroSection from "../components/LandingPage/HeroSection";
import CompanyDesc from "../components/LandingPage/CompanyDesc";
import TechShowcaseSection from "../components/LandingPage/TechShowcaseSection";
import SocialLinks from "../components/LandingPage/SocialLinksContact";
import Footer from "@/components/LandingPage/Footer";

interface indexProps {}

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const Home: React.FC<indexProps> = ({}) => {
  const refScroll = React.useRef(null);
  let lscroll: any;

  React.useEffect(() => {
    if (!refScroll.current) return;
    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0;
      lscroll.update();
    });

    // image hover effect
    Array.from(document.querySelectorAll(".project-card__middle")).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll("img"));
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute("src"),
          image2: imgs[1].getAttribute("src"),
          displacementImage: el.dataset.displacement,
        });
      }
    );
  }, []);

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        <PreLoader />
        <HeroSection />
        <main className="container">
          <CompanyDesc />
          <ProjectsSection />
          <TechShowcaseSection />
          <SocialLinks />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
