"use client";
import React, { useState } from "react";
import ProjectsSection from "../components/LandingPage/ProjectsSection";
import Footer from "../components/LandingPage/Footer";
import PreLoader from "../components/LandingPage/PreLoader";
import HeroSection from "../components/LandingPage/HeroSection";
import CompanyDesc from "../components/LandingPage/CompanyDesc";
import TechShowcaseSection from "../components/LandingPage/TechShowcaseSection";
import ContactUs from "../components/LandingPage/ContactUs";
import SocialLinks from "../components/LandingPage/SocialLinks";
import { Navigation } from "../components/Navigation/Navigation";
import Head from "next/head";

interface indexProps {}

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const Home: React.FC<indexProps> = ({}) => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

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

  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        {/* <PreLoader /> */}
        {/* <Navigation
          isOpen={isToggleOpen}
          toggleOpen={() => toggleBodyScroll(isToggleOpen)}
        /> */}
        <HeroSection />
        <main className="container">
          <CompanyDesc />
          <ProjectsSection />
          <TechShowcaseSection />
          {/* <ContactUs /> */}
          <SocialLinks />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

// import React, { useState } from "react";
// import Head from "next/head";
// import { Navigation } from "../components/Navigation/Navigation";
// import ProjectsSection from "../components/LandingPage/ProjectsSection";
// import Footer from "../components/LandingPage/Footer";
// import PreLoader from "../components/LandingPage/PreLoader";
// import HeroSection from "../components/LandingPage/HeroSection";
// import CompanyDesc from "../components/LandingPage/CompanyDesc";
// import TechShowcaseSection from "../components/LandingPage/TechShowcaseSection";
// import ContactUs from "../components/LandingPage/ContactUs";

// interface indexProps {}

// const locomotiveScroll =
//   typeof window !== `undefined` ? require("locomotive-scroll").default : null;

// const hoverEffect =
//   typeof window !== `undefined` ? require("hover-effect").default : null;

// const index: React.FC<indexProps> = ({}) => {
//   const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

//   const refScroll = React.useRef(null);
//   let lscroll: any;

//   React.useEffect(() => {
//     if (!refScroll.current) return;
//     // @ts-ignore
//     lscroll = new locomotiveScroll({
//       el: refScroll.current,
//       smooth: true,
//       reloadOnContextChange: true,
//       multiplier: 0.75,
//       inertia: 0.5,
//     });

//     // update locomotive scroll
//     window.addEventListener("load", () => {
//       let image = document.querySelector("img");
//       // @ts-ignore
//       const isLoaded = image!.complete && image!.naturalHeight !== 0;
//       lscroll.update();
//     });

//     // image hover effect
//     Array.from(document.querySelectorAll(".project-card__middle")).forEach(
//       (el: any) => {
//         const imgs: any = Array.from(el.querySelectorAll("img"));
//         new hoverEffect({
//           parent: el,
//           intensity: 0.2,
//           speedIn: el.dataset.speedin || undefined,
//           speedOut: el.dataset.speedout || undefined,
//           easing: el.dataset.easing || undefined,
//           hover: el.dataset.hover || undefined,
//           image1: imgs[0].getAttribute("src"),
//           image2: imgs[1].getAttribute("src"),
//           displacementImage: el.dataset.displacement,
//         });
//       }
//     );

//     // header cursor
//     // const cursor = document.querySelector(".cursor");
//     // window.onmousemove = (e: any) => {
//     //   cursor!.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
//     // };

//     console.clear();
//     console.log.apply(console, [
//       "%c Designed and Developed by Adeola Adeoti %c %c🚀 %c\n",
//       "color: #fff; background: #8000ff; padding:5px 0;",
//       "color: #fff; background: #242424; padding:5px 0 5px 5px;",
//       "background: #242424; padding:5px 0",
//       "background: #242424; padding:5px 5px 5px 0",
//     ]);
//     console.log.apply(console, [
//       "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
//       "color: #fff; background: #8000ff; padding:5px 0;",
//     ]);
//   }, []);

//   function toggleBodyScroll(isToggleOpen: boolean) {
//     if (isToggleOpen === false) {
//       setIsToggleOpen(true);
//     } else if (isToggleOpen === true) {
//       setIsToggleOpen(false);
//     }
//   }

//   return (
//     <>
//       <div id="menu-target" data-scroll-container ref={refScroll}>
//         <Head>
//           <link rel="icon" href="svg/favicon.svg" />
//           <link href="https://adeolaadeoti.xyz/" rel="canonical" />
//           <meta name="theme-color" content="#10101A" />
//           <meta
//             name="apple-mobile-web-app-status-bar-style"
//             content="#10101A"
//           />
//           <title>Adeola Adeoti 🚀 &mdash; Frontend Devloper</title>
//           <meta
//             name="description"
//             content="I'm a self-taught Front End Developer and turning ideas into real life products is my calling."
//           />
//           <meta property="og:type" content="website" />
//           <meta
//             property="og:title"
//             content="Adeola Adeoti 🚀 &mdash; Frontend Devloper"
//           />
//           <meta property="og:url" content="https://adeolaadeoti.xyz/" />
//           <meta property="og:image" content="webp/preview-image.png" />
//           <meta
//             property="og:description"
//             content="I'm a self-taught Front End Developer and turning ideas into real life products is my calling."
//           />
//           <meta
//             name="twitter:title"
//             content="Adeola Adeoti 🚀 &mdash; Frontend Devloper"
//           />
//           <meta
//             name="twitter:description"
//             content="I'm a self-taught Front End Developer and turning ideas into real life products is my calling."
//           />
//           <meta name="twitter:image" content="webp/preview-image.png" />
//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:url" content="https://adeolaadeoti.xyz/" />
//         </Head>
//         <audio loop id="audioPlayer" autoPlay style={{ display: "none" }}>
//           <source src="sound/preloader.mp3" type="audio/mp3" />
//         </audio>
//         {/* <PreLoader /> */}
//         {/* <div className="cursor"></div> */}
//         <Navigation
//           isOpen={isToggleOpen}
//           toggleOpen={() => toggleBodyScroll(isToggleOpen)}
//         />
//         <HeroSection />
//         <main className="container">
//           <CompanyDesc />
//           <ProjectsSection />
//           <TechShowcaseSection />
//           <ContactUs />
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default index;
